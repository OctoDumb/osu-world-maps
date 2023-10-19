import Country from "../Country";

export default class Poland extends Country {
  code = "PL";

  center: [number, number] = [52.1, 19.2];
  zoom = 7;

  regions = [
    130971, // Greater Poland Voivodeship
    130914, // Holy Cross Voivodeship
    223407, // Kuyavian-Pomeranian Voivodeship
    224459, // Lesser Poland Voivodeship
    224457, // Lower Silesian Voivodeship
    130919, // Lublin Voivodeship
    130969, // Lubusz Voivodeship
    130935, // Masovian Voivodeship
    224460, // Opole Voivodeship
    224461, // Podlaskie Voivodeship
    130975, // Pomeranian Voivodeship
    224462, // Silesian Voivodeship
    130957, // Subcarpathian Voivodeship
    223408, // Warmian-Masurian Voivodeship
    104401, // West Pomeranian Voivodeship
    224458, // Łódzkie Voivodship
  ];
}