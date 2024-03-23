import Country from "../Country";

export default class Andorra extends Country {
  code = "AD";

  center: [number, number] = [42.5, 1.6];
  zoom = 11;

  regions = [
    2804753, // Andorra la Vella
    2804754, // Canillo
    2804755, // Encamp
    2804756, // Escaldes–Engordany
    2804757, // La Massana
    2804758, // Ordino
    2804759, // Sant Julià de Lòria
  ];
}

