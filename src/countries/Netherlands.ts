import Country from "../Country";

export default class Netherlands extends Country {
  code = "NL";

  center: [number, number] = [52, 5.5];
  zoom = 7;

  regions = [
    47540, // Drenthe
    47407, // Flevoland
    47381, // Frisia
    47554, // Gelderland
    47826, // Groningen
    47793, // Limburg
    47696, // North Brabant
    47654, // North Holland
    47608, // Overijssel
    47772, // South Holland
    47667, // Utrecht
    47806, // Zeeland
  ];
}