import fs from "fs";
import path from "path";
import zlib from "zlib";

import getCountries from "../src/countries";
import Country from "../src/Country";
import { measureTime } from "../src/util/TimeMeasure";
import { World } from "../src/World";

const outputPath = path.join(process.cwd(), "out");
if(!fs.existsSync(outputPath))
  fs.mkdirSync(outputPath);

const jsonPath = path.join(outputPath, "json");
if(!fs.existsSync(jsonPath))
  fs.mkdirSync(jsonPath);

const sqlPath = path.join(outputPath, "sql");
if(!fs.existsSync(sqlPath))
  fs.mkdirSync(sqlPath);

const localePath = path.join(outputPath, "locale");
if(!fs.existsSync(localePath))
  fs.mkdirSync(localePath);

const tempPath = path.join(process.cwd(), "temp");

const args = process.argv.slice(2);

const options = {
  noCache: false,
};

if (args[0] == "--no-cache") {
  options.noCache = true;
  args.shift();
}

(async() => {
  const manualCountries = await getCountries();
  const world = new World(manualCountries);
  const countries = [...manualCountries, world];
  const countriesToBundle: Country[] = args.length ? args.map(code => countries.find(c => c.code == code)!).filter(c => c) : countries;

  if(!countriesToBundle.length) {
    throw new Error("No countries to bundle");
  }

  for(let country of countriesToBundle) {
    console.log(`🔍 Bundling ${country.constructor.name} [${country.code}]`);

    let locale: any = {};
    let missingNames: string[] = [];

    const [processingDuration, [data, sql]] = await measureTime(async () => {
      let [data, sql] = await country.bundle(!options.noCache);
      let json: any = JSON.parse(data.toString());

      for (let feature of json.features) {
        if(!feature.properties.name) {
          missingNames.push(feature.properties.id);
        } else {
          locale[feature.properties.id] = feature.properties.name;
        }
      }

      return [data, sql];
    });

    console.log(`• 🏭 Processing finished in ${processingDuration}ms`);

    fs.writeFileSync(path.join(jsonPath, `${country.code}.json`), data!);
    fs.writeFileSync(path.join(sqlPath, `${country.code}.sql`), sql!);

    const [gzipDuration, gzip] = await measureTime(() => zlib.gzipSync(data));
    console.log(`• 📚 Compressed using gzip in ${gzipDuration}ms`);
    fs.writeFileSync(path.join(jsonPath, `${country.code}.json.gz`), gzip);

    const [brotliDuration, brotli] = await measureTime(() => zlib.brotliCompressSync(data));
    console.log(`• 📚 Compressed using brotli in ${brotliDuration}ms`);
    fs.writeFileSync(path.join(jsonPath, `${country.code}.json.br`), brotli);

    fs.writeFileSync(path.join(localePath, `${country.code}.json`), JSON.stringify(locale, null, "\t"));

    if(missingNames.length)
      console.log(`• ⚠ Missing names for ${missingNames.join(', ')}`);
  }

  console.log(`🧹 Cleaning up temporary files`);

  let tempFiles = fs.readdirSync(tempPath);

  for(let file of tempFiles) {
    fs.rmSync(path.join(tempPath, file));
  }
})();
