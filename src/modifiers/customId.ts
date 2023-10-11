import IModifier from ".";
import { CountryRegion } from "../Country";
import { Feature } from "../Nominatim";
import NominatimProvider from "../NominatimProvider";

export default class CustomIdModifier implements IModifier {
  constructor(private region: CountryRegion, private id: string) {}

  async build(provider: NominatimProvider): Promise<Feature> {
    let region = typeof this.region == "number"
      ? (await provider.get(this.region)).toFeature()
      : await this.region.build(provider);

    region.properties.id = this.id;

    return region;
  }
}