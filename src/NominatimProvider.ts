import fs from "fs";
import path from "path";
import axios from "axios";

import TimeoutLock from "./util/TimeoutLock";
import Nominatim from "./Nominatim";

// Assuming execution from project's root directory
const CACHE_PATH = path.join(process.cwd(), "cache");

export default class NominatimProvider {
  private cached: number[];

  private timeout = new TimeoutLock();

  constructor(path: string = CACHE_PATH) {
    if(!fs.existsSync(path))
      fs.mkdirSync(path);

    this.cached = fs.readdirSync(path).map(f => Number(f.split(".")[0]));
  }

  async get(id: number): Promise<Nominatim> {

    if(this.cached.includes(id)) {
      return new Nominatim(JSON.parse(fs.readFileSync(path.join(CACHE_PATH, `${id}.json`)).toString()));
    }

    return new Nominatim(await this.download(id));
  }

  async download(id: number): Promise<any> {
    await this.timeout.wait();
    this.timeout.lock(1000);

    console.log(`Downloading R${id}`);

    let { data } = await axios.get(`https://nominatim.openstreetmap.org/details?osmtype=R&osmid=${id}&polygon_geojson=1&format=json`, {
      responseType: "json",
    });

    fs.writeFileSync(path.join(CACHE_PATH, `${id}.json`), JSON.stringify(data, null, "\t"));

    this.cached.push(id);

    return data;
  }
}