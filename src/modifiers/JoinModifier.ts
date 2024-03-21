import fs from "fs";
import path from "path";

import { cloneDeep } from "lodash";

import { Modifier } from "./Modifier";
import { CountryRegion } from "../Country";
import { Feature } from "../Nominatim";
import Mapshaper from "../util/Mapshaper";

import { v4 as uuid } from "uuid";

/**
 * Merges multiple {@link CountryRegion}s
 * 
 * All properties, including ID and name, are inherited from the first {@link CountryRegion}
 */
export default class JoinModifier extends Modifier {
  constructor(
    private regions: CountryRegion[],
  ) {
    super();
  }

  public async build(): Promise<Feature> {
    let features = [];
    let paths = [];

    for(let i = 0; i < this.regions.length; i++) {
      const region = this.regions[i];
      const feature = await this.convertRegionParameterToFeature(region);

      features.push(feature);

      let p = path.join(process.cwd(), "temp", `${uuid()}.json`);
      fs.writeFileSync(p, JSON.stringify(feature));
      paths.push(p);
    }

    let base = cloneDeep(features[0]);

    let joinedPath = path.join(process.cwd(), "temp", `${uuid()}.json`);

    let a = await Mapshaper(`-i files=${paths.join(',')} combine-files merge-files -dissolve2 -o ${joinedPath}`);

    let joined = JSON.parse(fs.readFileSync(joinedPath).toString());

    base.geometry = joined.geometries[0];

    return base;
  }
}
