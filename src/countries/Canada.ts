import Country from "../Country";

export default class Canada extends Country {
  code = "CA";

  center: [number, number] = [60.5, -97.1];
  zoom = 4;

  regions = [
    391186, // Alberta
    390867, // British Columbia
    390841, // Manitoba
    68942, // New Brunswick
    391196, // Newfoundland and Labrador
    391220, // Northwest Territories
    390558, // Nova Scotia
    390840, // Nunavut
    68841, // Ontario
    391115, // Prince Edward Island
    61549, // Quebec
    391178, // Saskatchewan
    391455, // Yukon
  ];
}