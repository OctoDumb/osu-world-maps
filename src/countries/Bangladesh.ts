import Country from "../Country";

export default class Bangladesh extends Country {
  code = "BD";

  center: [number, number] = [23.7, 90.4];
  zoom = 7;

  regions = [
    3921298, // Barisal
    3824588, // Chattogram
    3921322, // Dhaka
    3825003, // Khulna
    7318343, // Mymensingh
    3859335, // Rajshahi
    3921211, // Rangpur
    3921222, // Sylhet
  ];
}

