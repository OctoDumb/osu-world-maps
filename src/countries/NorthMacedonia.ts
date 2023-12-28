import Country from "../Country";

export default class NorthMacedonia extends Country {
  code = "MK"
  
  center: [number, number] = [41.6, 21.5];
  zoom = 8;

  regions = [
	2572311, // Vardar
	2572069, // Eastern
	2573888, // Southwestern
	2572240, // Southeastern
	2572701, // Pelagonia
	2573935, // Polog
	2570958, // Northeastern
	2460455, // Skopje
  ];
}

