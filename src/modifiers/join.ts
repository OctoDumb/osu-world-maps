import fs from "fs"; 
import path from "path";

import { cloneDeep } from "lodash";

import IModifier from ".";
import { CountryRegion } from "../Country";
import { Feature } from "../Nominatim";
import NominatimProvider from "../NominatimProvider";
import Mapshaper from "../util/Mapshaper";

export default class JoinModifier implements IModifier {
  constructor(
    private regions: CountryRegion[]
  ) {}

  async build(provider: NominatimProvider): Promise<Feature> {
    let features = [];
    let paths = [];

    for(let i = 0; i < this.regions.length; i++) {
      let region = this.regions[i];
      let feature = typeof region == "number"
        ? (await provider.get(region)).toFeature()
        : await region.build(provider);
      features.push(feature);
      let p = path.join(process.cwd(), "temp", `${i+1}.json`);
      fs.writeFileSync(p, JSON.stringify(feature));
      paths.push(p);
    }

    let base = cloneDeep(features[0]);
    
    let joinedPath = path.join(process.cwd(), "temp", "joined.json");
    
    let a = await Mapshaper(`-i files=${paths.join(',')} combine-files merge-files -dissolve2 -o ${joinedPath}`);

    let joined = JSON.parse(fs.readFileSync(joinedPath).toString());

    base.geometry = joined.geometries[0];

    return base;
  }
}