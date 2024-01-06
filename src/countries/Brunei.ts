import Country from "../Country";

export default class Brunei extends Country {
  code = "BN";

  center: [number, number] = [4.6, 114.7];
  zoom = 9;

  regions = [
    3853884, // Belait
    3853885, // Brunei-Muara 
    7843853, // Temburong
    3853886, // Tutong
  ];
}

