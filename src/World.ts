import Country, { CountryRegion } from "./Country";

export class World extends Country {
  code = "WORLD";

  center: [number, number] = [0, 0];
  zoom = 1;

  regions: CountryRegion[] = [];

  constructor(countries: Country[]) {
    super();

    this.setRegions(countries);
  }

  private setRegions(countries: Country[]) {
    this.regions = countries.map((c) => c.getRegions()).flat(1);
  }
}
