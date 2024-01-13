import { Modifier } from "./Modifier";
import { CountryRegion } from "../Country";
import { Feature } from "../Nominatim";

/**
 * Assigns a custom name to a {@link CountryRegion}
 */
export default class CustomNameModifier extends Modifier {
  constructor(
    private region: CountryRegion,
    private name: string,
  ) {
    super();
  }

  public async build(): Promise<Feature> {
    const region = await this.convertRegionParameterToFeature(this.region);

    region.properties.name = this.name;

    return region;
  }
}
