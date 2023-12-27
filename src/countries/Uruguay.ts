import Country from "../Country";

export default class Uruguay extends Country {
  code = "UY";

  center: [number, number] = [-32.9, -55.5]; 
  zoom = 7;

  regions = [
	1617618, // Artigas
	1625171, // Canelones
	1656175, // Cerro Largo
	1650769, // Colonia
	1646018, // Durazno
	1645684, // Flores
	1635164, // Florida
	1635124, // Lavalleja
	1635117, // Maldonado
	1634207, // Montevideo
	1662387, // Paysandú
	1662476, // Río Negro
	1627812, // Rivera
	1653142, // Rocha
	1614733, // Salto
	1635189, // San José
	1646600, // Soriano
	1662265, // Tacuarembó
	1640982, // Treinta y Tres
  ];
}
