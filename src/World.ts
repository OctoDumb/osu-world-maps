import Country, { CountryRegion } from "./Country";
import JoinModifier from "./modifiers/JoinModifier";
import CustomIdModifier from "./modifiers/CustomIdModifier";

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
    this.regions = countries.map((c) => {
      const regions = c.getRegions();

      return new CustomIdModifier(
        new JoinModifier(regions),
        c.code
      );
    }).flat(1);
  }
}
