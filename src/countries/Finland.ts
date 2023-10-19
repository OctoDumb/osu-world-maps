import Country from "../Country";

export default class Finland extends Country {
  code = "FI";

  center: [number, number] = [63.8, 25.4];
  zoom = 6;

  regions = [
    1701740, // Central Finland
    1702330, // Central Ostrobothnia
    1997164, // Kainuu
    1473990, // Kanta-Häme
    2102313, // Kymenlaakso
    1724359, // Lapland
    1999428, // North Karelia
    1724360, // North Ostrobothnia
    918898, // North Savo
    2000320, // Ostrobothnia
    1701741, // Pirkanmaa
    1703362, // Päijät-Häme
    2000361, // Satakunta
    2067231, // South Karelia
    1702263, // South Ostrobothnia
    918897, // South Savo
    38092, // Southwest Finland
    37355, // Uusimaa
    2375171, // Åland Islands
  ];
}