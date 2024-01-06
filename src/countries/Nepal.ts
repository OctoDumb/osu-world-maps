import Country from "../Country";

export default class Nepal extends Country {
  code = "NP";

  center: [number, number] = [28.1, 85];
  zoom = 7;

  regions = [
    10489132, // Koshi
    10489318, // Madhesh
    10489317, // Bagmati
    10489605, // Gandaki
    10493722, // Lumbini
    10493723, // Karnali
    10488187, // Sudurpashchim
  ];
}

