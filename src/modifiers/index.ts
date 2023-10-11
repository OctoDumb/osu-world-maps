import { Feature } from "../Nominatim";
import NominatimProvider from "../NominatimProvider";

export default interface IModifier {
  build(provider: NominatimProvider): Promise<Feature>
}