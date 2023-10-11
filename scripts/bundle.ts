import fs from "fs";

import NominatimProvider from "../src/NominatimProvider";
import countries from "../src/countries";

const code = "UK";

const country = countries.find(c => c.code == code);

if(!country) {
  throw new Error("Country not found");
}

const provider = new NominatimProvider();

(async() => {
  let [data, sql] = await country.bundle(provider);

  fs.writeFileSync("./test.js", `const DATA = ${JSON.stringify(data)}`);
  fs.writeFileSync("./query.sql", sql);
})();