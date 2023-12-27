import Country from "../Country";

export default class Slovenia extends Country {
  code = "SI";

  center: [number, number] = [46, 14.7]; 
  zoom = 8;

  regions = [
	1703918, // Upper Carniola
	1703668, // Southeast Slovenia
	1703687, // Savinja 
	1703400, // Mura
	1703402, // Lower Sava
	1703401, // Littoral–Inner Carniola
	541729, // Gorizia
	541718, // Drava
	1703387, // Coastal–Karst
	1699230, // Central Slovenia
	1699148, // Central Sava
	541722, // Carinthia
  ];
}
