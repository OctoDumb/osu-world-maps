import Country from "../Country";

export default class Luxembourg extends Country {
  code = "LU";

  center: [number, number] = [49.8, 6.1];
  zoom = 9;

  regions = [
	407813, // Capellen
	1115796, // Clervaux
	1113683, // Diekirch
	407792, // Echternach
	1113898, // Esch-sur-Alzette
	407796, // Grevenmacher
	407824, // Luxembourg
	407810, // Mersch
	660245, // Redange
	407799, // Remich
	1342842, // Vianden
	1115797, // Wiltz
  ];
}

