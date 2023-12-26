import Country from "../Country";

export default class UnitedArabEmirates extends Country {
  code = "AE";

  center: [number, number] = [24.6, 53.9]; 
  zoom = 7;

  regions = [
    3766482, // Ajman
    3766481, // Abu Dhabi
    3766484, // Fujairah 
    3766486, // Sharjah
    3766483, // Dubai
    3766485, // Ras Al Khaimah
    3766487, // Umm Al Quwain
  ];
}