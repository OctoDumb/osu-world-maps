import { Feature } from "../Nominatim";
import { CountryRegion } from "../Country";
import NominatimService from "../NominatimService";

export interface IModifier {
  build(): Promise<Feature>;
}

export abstract class Modifier implements IModifier {
  protected get nominatimService(): NominatimService {
    return NominatimService.instance;
  }

  public abstract build(): Promise<Feature>;

  protected async convertRegionParameterToFeature(region: CountryRegion): Promise<Feature> {
    return typeof region === "number"
      ? (await this.nominatimService.get(region)).toFeature()
      : await region.build();
  }
}
