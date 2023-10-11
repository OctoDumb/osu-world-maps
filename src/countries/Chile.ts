import Country from "../Country";

export default class Chile extends Country {
  code = "CL";

  center: [number, number] = [-38.5, -72.3];
  zoom = 5;

  regions = [
		240932, // Antofagasta Region
		296378, // Araucanía Region
		238392, // Arica and Parinacota Region
		271889, // Atacama Region
		305693, // Aysén Region
		252891, // Biobío Region
		231672, // Coquimbo Region
		274991, // Los Lagos Region
		274988, // Los Ríos Region
		239882, // Maule Region
		206487, // O'Higgins Region
		301542, // Region of Magallanes and Chilean Antarctica
		198848, // Santiago Metropolitan Region
		238393, // Tarapacá Region
		198847, // Valparaiso Region
		7421025, // Ñuble Region
  ];
}