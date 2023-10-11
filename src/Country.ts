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
   * @returns A GeoJSON object and an SQL query to add 
   */
  async bundle(provider: NominatimProvider): Promise<[any, string]> {
    if(!fs.existsSync(path.join(process.cwd(), "temp")))
      fs.mkdirSync(path.join(process.cwd(), "temp"));

    let data = {
      type: "FeatureCollection",
      features: [] as Feature[],
    };

    for(let region of this.regions) {
      let feature;
      if(typeof region == "number") {
        let nominatim = await provider.get(region);
        feature = nominatim.toFeature();
      } else {
        feature = await region.build(provider);
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

    return [JSON.parse(geojson.toString()), sql];
  }

  async extractNames(language: string) {
    
  }
}