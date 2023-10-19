import fs from "fs";
import path from "path";

import { Modifier } from "./Modifier";
import { CountryRegion } from "../Country";
import { Feature } from "../Nominatim";
import NominatimService from "../NominatimService";
import Mapshaper from "../util/Mapshaper";
import { cloneDeep } from "lodash";

import { v4 as uuid } from "uuid";

export default class EraseModifier extends Modifier {
  constructor(
    private from: CountryRegion,
    private erase: CountryRegion,
  ) {
    super();
  }

  public async build(): Promise<Feature> {
    let from = await this.convertRegionParameterToFeature(this.from);
    let erase = await this.convertRegionParameterToFeature(this.erase);

    let base = cloneDeep(from);

    let fromPath = path.join(process.cwd(), "temp", `${uuid()}.json`);
    let erasePath = path.join(process.cwd(), "temp", `${uuid()}.json`);

    fs.writeFileSync(fromPath, JSON.stringify(from));
    fs.writeFileSync(erasePath, JSON.stringify(erase));

    let erasedPath = path.join(process.cwd(), "temp", `${uuid()}.json`);

    await Mapshaper(`${fromPath} -erase ${erasePath} -o ${erasedPath}`);

    let erased = JSON.parse(fs.readFileSync(erasedPath).toString());

    // -erase returns a FeatureCollection
    base.geometry = erased.features[0].geometry;

    return base;
  }
}
