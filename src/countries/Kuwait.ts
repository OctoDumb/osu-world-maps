import Country from "../Country";

export default class Kuwait extends Country {
  code = "KW";

  center: [number, number] = [29.3, 47.9];
  zoom = 9;

  regions = [
	4579477, // Ahmadi
	4579478, // Al-Asimah
	4579479, // Farwaniya
	4579480, // Hawalli
	4579481, // Jahra
	4579482, // Mubarak Al-Kabeer
  ];
}

