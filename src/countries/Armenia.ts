import Country from "../Country";

export default class Armenia extends Country {
  code = "AM";

  center: [number, number] = [40.2, 45.2];
  zoom = 8;

  regions = [
    3917110, // Aragatsotn
    364083, // Ararat
    364086, // Armavir
    364087, // Yerevan
    364080, // Gegharkunik
    364084, // Kotayk
    364078, // Lori
    364077, // Shirak
    364082, // Syunik
    364079, // Tavush
    364081, // Vayots Dzor
  ];
}

