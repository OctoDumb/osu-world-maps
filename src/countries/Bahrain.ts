import Country from "../Country";

export default class Bahrain extends Country {
  code = "BH"
  
  center: [number, number] = [26.1, 50.5];
  zoom = 10;

  regions = [
    3028094, // Capital Governorate
    2522430, // Southern Governorate
    3028095, // Muharraq Governorate
    2522303, // Northern Governorate
  ];
}

