import Country from "../Country";

export default class Mexico extends Country {
  code = "MX";

  center: [number, number] = [23.7, -103.6];
  zoom = 6;

  regions = [
		2610002, // Aguascalientes
		2589611, // Baja California Sur
		2589601, // Baja California
		2568834, // Campeche
		2556679, // Chiapas
		1673425, // Chihuahua
		1661524, // Coahuila
		2340912, // Colima
		2399740, // Durango
		2340909, // Guanajuato
		2439316, // Guerrero
		1376490, // Hidalgo
		2340910, // Jalisco
		1376330, // Mexico City
		2340636, // Michoacán
		1376332, // Morelos
		7695827, // Nayarit
		1661523, // Nuevo León
		2529822, // Oaxaca
		1376491, // Puebla
		2340903, // Querétaro
		2614434, // Quintana Roo
		4086617, // San Luis Potosi
		2455086, // Sinaloa
		1673426, // Sonora
		1376489, // State of Mexico
		2556680, // Tabasco
		2415518, // Tamaulipas
		1375274, // Tlaxcala
		2415761, // Veracruz
		2614435, // Yucatán
		2399704, // Zacatecas
  ];
}