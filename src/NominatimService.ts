import fs from "fs";
import path from "path";
import axios from "axios";

import TimeoutLock from "./util/TimeoutLock";
import Nominatim from "./Nominatim";

// Assuming execution from project's root directory
const DEFAULT_CACHE_PATH = path.join(process.cwd(), "cache");

export default class NominatimService {
  private cache_path: string;
  private cached: number[];

  private timeout = new TimeoutLock();

  private static _instance: NominatimService;

  public static get instance() {
    if (!this._instance) {
      this._instance = new NominatimService();
    }

    return this._instance;
  }

  constructor(path: string = DEFAULT_CACHE_PATH) {
    this.cache_path = path;
    
    if(!fs.existsSync(path))
      fs.mkdirSync(path);

    this.cached = fs.readdirSync(path).map(f => Number(f.split(".")[0]));
  }

  async get(id: number, cached: boolean = true): Promise<Nominatim> {
    if(this.cached.includes(id) && cached) {
      let data = JSON.parse(fs.readFileSync(path.join(this.cache_path, `${id}.json`)).toString());
      return new Nominatim(id, data);
    }

    const data = await this.download(id);

    return new Nominatim(id, data);
  }

  private async download(id: number): Promise<any> {
    await this.timeout.wait();
    this.timeout.lock(1300);

    console.log(`Downloading R${id}`);

    let { data } = await axios.get(`https://nominatim.openstreetmap.org/details?osmtype=R&osmid=${id}&polygon_geojson=1&format=json`, {
      responseType: "json",
      headers: {
        "User-Agent": "osu! World",
      },
    });

    fs.writeFileSync(path.join(this.cache_path, `${id}.json`), JSON.stringify(data, null, "\t"));

    this.cached.push(id);

    return data;
  }
}
