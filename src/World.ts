import Country, { CountryRegion } from "./Country";
import JoinModifier from "./modifiers/JoinModifier";
import CustomIdModifier from "./modifiers/CustomIdModifier";

export class World extends Country {
  code = "WORLD";

  simplifyFactor = 0.15;

  center: [number, number] = [0, 0];
  zoom = 2;

  regions: CountryRegion[] = [];

  constructor(countries: Country[]) {
    super();

    this.regions = countries.flatMap(
      country => new CustomIdModifier(
        new JoinModifier(country.getRegions()),
        country.code
      )
    );
  }
}
