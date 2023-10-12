import fs from "fs";
import path from "path";
import zlib from "zlib";

import NominatimProvider from "../src/NominatimProvider";
import getCountries from "../src/countries";
import Country from "../src/Country";

const outputPath = path.join(process.cwd(), "out");
if(!fs.existsSync(outputPath))
  fs.mkdirSync(outputPath);

const args = process.argv.slice(2);

(async() => {
  const countries = await getCountries();
  const countriesToBundle: Country[] = args.length ? args.map(code => countries.find(c => c.code == code)!).filter(c => c) : countries;

  if(!countriesToBundle.length) {
    throw new Error("No countries to bundle");
  }

  const provider = new NominatimProvider();

  for(let country of countriesToBundle) {
    console.log(`🔍 Bundling ${country.constructor.name} [${country.code}]`);

    const start = Date.now();

    let [data, sql] = await country.bundle(provider);

    const end = Date.now()

    console.log(`• 🏭 Processing finished in ${end - start}ms`);

    fs.writeFileSync(path.join(outputPath, `${country.code}.json`), data);
    fs.writeFileSync(path.join(outputPath, `${country.code}.sql`), sql);

    {
      let start = Date.now();
      let gzip = zlib.gzipSync(data);
      let end = Date.now();
      console.log(`• 📚 Compressed using gzip in ${end - start}ms`);
      fs.writeFileSync(path.join(outputPath, `${country.code}.json.gz`), gzip);
    }
    {
      let start = Date.now();
      let brotli = zlib.brotliCompressSync(data);
      let end = Date.now();
      console.log(`• 📚 Compressed using brotli in ${end - start}ms`);
      fs.writeFileSync(path.join(outputPath, `${country.code}.json.br`), brotli);
    }
  }
})();