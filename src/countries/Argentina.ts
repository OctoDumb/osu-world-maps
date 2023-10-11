import Country from "../Country";

export default class Argentina extends Country {
  code = "AR";

  center: [number, number] = [-38.1, -66.6];
  zoom = 5;

  regions = [
		1632167, // Buenos Aires Province
		1224652, // Buenos Aires
		153545, // Catamarca Province
		153554, // Chaco Province
		153548, // Chubut Province
		153552, // Corrientes Province
		3592494, // Córdoba Province
		153551, // Entre Ríos Province
		2849847, // Formosa Province
		153556, // Jujuy Province
		153541, // La Pampa Province
		153536, // La Rioja Province
		153540, // Mendoza Province
		153553, // Misiones PRovince
		1606727, // Neuquén Province
		153547, // Río Negro Province
		2405230, // Salta Province
		153539, // San Juan Province
		153538, // San Luis Province
		153549, // Santa Cruz Province
		153543, // Santa Fe Province
		153544, // Santiago del Estero Province
		153550, // Tierra del Fuego Province
		153558, // Tucumán Province
  ];
}