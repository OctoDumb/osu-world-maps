import Country from "../Country";

export default class Pakistan extends Country {
  code = "PK";

  center: [number, number] = [30.5, 68.4];
  zoom = 6;

  regions = [
    3780130, // Azad Jammu and Kashmir
    357968, // Balochistan
    357995, // Gilgit-Baltistan
    358002, // Islamabad Capital Territory
    3780131, // Khyber Pakhtunkhwa
    357988, // Punjab
    357981, // Sindh
  ];
}

