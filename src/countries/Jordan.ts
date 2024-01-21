import Country from "../Country";

export default class Jordan extends Country {
  code = "JO";

  center: [number, number] = [31.3, 36.7];
  zoom = 8;

  regions = [
    2925616, // Ajloun Governate
    2926345, // Aqaba Governate
    2926344, // Amman Governate
    2925596, // Balqa Governate
    2926346, // Karak Governate
    2925608, // Mafraq Governate
    2926349, // Tafilah Governate
    2925597, // Zarqa Governate
    2925617, // Irbid Governate
    2925599, // Jerash Governate
    2926347, // Ma'an Governate
    2926348, // Madaba Governate
  ];
}

