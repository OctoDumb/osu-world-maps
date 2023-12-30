import Country from "../Country";

export default class Kyrgyzstan extends Country {
  code = "KG";

  center: [number, number] = [41.3, 74.6];
  zoom = 7;

  regions = [
    8493930, // Bishkek City
    178019, // Batken Region
    178026, // Chüy Region
    178024, // Jalal-Abad Region
    1251542, // Naryn Region
    178020, // Osh Region
    178023, // Talas Region
    178025, // Issyk-Kul Region
    8496351, // Osh City
  ];
}

