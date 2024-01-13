import fs from "fs";
import path from "path";
import { CountryRegion } from "../Country";
import { Feature } from "../Nominatim";
import { Modifier } from "./Modifier";

import { v4 as uuid } from "uuid";
import Mapshaper from "../util/Mapshaper";

/**
 * Moves a {@link CountryRegion} to the other side of the globe.
 * 
 * Used for situations, when a region is separated by the {@link https://en.wikipedia.org/wiki/180th_meridian |180th meridian}
 */
export default class FlipModifier extends Modifier {
  constructor(
    private region: CountryRegion,
    private positive: boolean = false
  ) {
    super();
  }

  private flipGeometry(geometry: any) {
    if(typeof geometry[0] == 'number') {
      if(this.positive && geometry[0] > 0)
        geometry[0] -= 360;
      else if(!this.positive && geometry[0] < 0)
        geometry[0] += 360;
    } else {
      for(let g of geometry)
        this.flipGeometry(g);
    }
  }

  public async build(): Promise<Feature> {
    const region = await this.convertRegionParameterToFeature(this.region);

    this.flipGeometry(region.geometry.coordinates);

    let regionPath = path.join(process.cwd(), "temp", `${uuid()}.json`);
    let outputPath = path.join(process.cwd(), "temp", `${uuid()}.json`);

    fs.writeFileSync(regionPath, JSON.stringify(region));

    await Mapshaper(`${regionPath} -dissolve2 -o ${outputPath}`);

    let joined = JSON.parse(fs.readFileSync(outputPath).toString());

    region.geometry = joined.geometries[0];

    return region;
  }
}