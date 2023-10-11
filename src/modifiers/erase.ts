import fs from "fs";
import path from "path";

import IModifier from ".";
import { CountryRegion } from "../Country";
import { Feature } from "../Nominatim";
import NominatimProvider from "../NominatimProvider";
import Mapshaper from "../util/Mapshaper";
import { cloneDeep } from "lodash";

export default class EraseModifier implements IModifier {
  constructor(
    private from: CountryRegion,
    private erase: CountryRegion,
  ) {}

  async build(provider: NominatimProvider): Promise<Feature> {
    let from = typeof this.from == "number"
      ? (await provider.get(this.from)).toFeature()
      : await this.from.build(provider);
    let erase = typeof this.erase == "number"
      ? (await provider.get(this.erase)).toFeature()
      : await this.erase.build(provider);

    let base = cloneDeep(from);

    let fromPath = path.join(process.cwd(), "temp", "1.json");
    let erasePath = path.join(process.cwd(), "temp", "2.json");

    fs.writeFileSync(fromPath, JSON.stringify(from));
    fs.writeFileSync(erasePath, JSON.stringify(erase));

    let erasedPath = path.join(process.cwd(), "temp", "erased.json");

    await Mapshaper(`${fromPath} -erase ${erasePath} -o ${erasedPath}`);

    let erased = JSON.parse(fs.readFileSync(erasedPath).toString());

    base.geometry = erased.features[0].geometry

    return base;
  }
}