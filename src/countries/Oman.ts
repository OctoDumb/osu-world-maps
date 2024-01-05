import Country from "../Country";

export default class Oman extends Country {
  code = "OM";

  center: [number, number] = [22.2, 56.4];
  zoom = 7;

  regions = [
    3781241, // Ad Dakhiliyah
    3781242, // Ad Dhahirah
    3781240, // Al Batinah North 
    3994012, // Al Batinah South
    3781313, // Al Buraymi
    3781238, // Al Wusta
    10169425, // Ash Sharqiyah North
    10169426, // Ash Sharqiyah South
    3781314, // Dhofar
    3781239, // Muscat
    3781315, // Musandam
  ];
}

