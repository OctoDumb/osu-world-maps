import fs from "fs";
import path from "path";

import NominatimProvider from "./NominatimProvider";
import Mapshaper from "./util/Mapshaper";
import IModifier from "./modifiers";
import { Feature } from "./Nominatim";

export type CountryRegion = number | IModifier;

export default abstract class Country {
  public abstract code: string;

  protected abstract center: [number, number];
  protected abstract zoom: number;

  protected simplifyFactor = 0.3;

  protected abstract regions: CountryRegion[];

  /**
   * @returns A GeoJSON object Buffer and an SQL query to add 
   */
  async bundle(provider: NominatimProvider): Promise<[Buffer, string]> {
    if(!fs.existsSync(path.join(process.cwd(), "temp")))
      fs.mkdirSync(path.join(process.cwd(), "temp"));

    let data = {
      type: "FeatureCollection",
      features: [] as Feature[],
    };

    for(let region of this.regions) {
      let feature: Feature;
      if(typeof region == "number") {
        let nominatim = await provider.get(region);
        feature = nominatim.toFeature();
      } else {
        feature = await region.build(provider);
      }
      if(feature.properties.id == "id") {
        console.log(`⚠ ${region} is missing an ID`);
      }
      data.features.push(feature);
    }

    let sql = `INSERT INTO "Country" (id, center, zoom) VALUES ('${this.code}', '${this.center.join(', ')}', ${this.zoom})\n`
      + 'INSERT INTO "Region" (id, country_id) VALUES ' + data.features.map(f => `('${f.properties.id}', '${this.code}')`).join(', ');

    const collectionPath = path.join(process.cwd(), "temp", "original.json");
    const simplifiedPath = path.join(process.cwd(), "temp", "simple.json");
    fs.writeFileSync(collectionPath, JSON.stringify(data));

    await Mapshaper(`-i ${collectionPath} -simplify ${this.simplifyFactor * 100}% -o ${simplifiedPath}`);

    let geojson = fs.readFileSync(simplifiedPath);

    return [geojson, sql];
  }

  async extractNames(language: string) {
    
  }
}