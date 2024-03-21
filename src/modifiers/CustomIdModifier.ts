import { Modifier } from ".";
import { CountryRegion } from "../Country";
import { Feature } from "../Nominatim";

/**
 * Assigns a custom ID value to a {@link CountryRegion}
 */
export default class CustomIdModifier extends Modifier {
  constructor(
    private region: CountryRegion,
    private id: string,
  ) {
    super();
  }

  public async build(): Promise<Feature> {
    const region = await this.convertRegionParameterToFeature(this.region);

    region.properties.id = this.id;

    return region;
  }
}
