import fs from "fs";
import Country from "../Country";

export default async function getCountries(): Promise<Country[]> {
  return Promise.all(
    fs.readdirSync(__dirname)
      .filter(f => f != "index.ts")
      .map(f => import(`./${f}`))
  ).then((v: any[]) => {
    return v.map(c => new c.default());
  });
}
