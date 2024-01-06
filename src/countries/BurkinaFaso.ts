import Country from "../Country";

export default class BurkinaFaso extends Country {
  code = "BF";

  center: [number, number] = [12.3, -2.3];
  zoom = 7;

  regions = [
    2674448, // Boucle du Mouhoun
    2745987, // Cascades
    2746031, // Centre 
    2746016, // Central-East
    2746040, // Central-North
    2813987, // Central-West
    2746024, // Central-South
    1143562, // East
    2674447, // Upper-Basins
    1159881, // North
    2746035, // Central-Plateau
    1159873, // Sahel
    2745992, // Southwest
  ];
}

