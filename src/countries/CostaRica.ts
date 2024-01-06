import Country from "../Country";

export default class CostaRica extends Country {
  code = "CR";

  center: [number, number] = [9.7, -84.1];
  zoom = 8;

  regions = [
    3222933, // Alajuela
    3223054, // Cartago
    3222919, // Guanacaste
    3221947, // Heredia
    3223056, // Limón
    3223028, // Puntarenas
    3223004, // San José
  ];
}
