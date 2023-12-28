import Country from "../Country";

export default class Qatar extends Country {
  code = "QA";

  center: [number, number] = [25.3, 51.2];
  zoom = 9;

  regions = [
	27335, // Al Shamal
	27329, // Al Khor
	27330, // Al-Shahaniya
	27328, // Umm Salal
	11146904, // Al Daayen
	27332, // Doha
	27331, // Al Rayyan
	27337, // Al Wakrah
  ];
}

