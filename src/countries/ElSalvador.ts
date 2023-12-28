import Country from "../Country";

export default class ElSalvador extends Country {
  code = "SV";

  center: [number, number] = [13.7, -88.8];
  zoom = 9;

  regions = [
	3623374, // Ahuachapán
	3624451, // Cabañas
	3624440, // Chalatenango
	3624439, // Cuscatlán
	3624113, // La Libertad
	3624477, // La Paz
	3625432, // La Unión
	3625421, // Morazán
	3625408, // San Miguel
	3624436, // San Salvador
	3624468, // San Vicente
	3624100, // Santa Ana
	3624092, // Sonsonate
	3625389, // Usulután
  ];
}

