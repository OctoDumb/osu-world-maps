import Country from "../Country";

export default class Austria extends Country {
  code = "AT";

  center: [number, number] = [47.5, 13.4];
  zoom = 8;

  regions = [
    76909, // Burgenland
    52345, // Carinthia
    77189, // Lower Austria
    86539, // Salzburg
    35183, // Styria
    52343, // Tyrol
    102303, // Upper Austria
    109166, // Vienna
    74942, // Vorarlberg
  ];
}