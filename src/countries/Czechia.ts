import Country from "../Country";

export default class Czechia extends Country {
  code = "CZ";

  center: [number, number] = [49.7, 15.5];
  zoom = 8;

  regions = [
    442311, // South Moravia
    442321, // South Bohemia
    442314, // Karlovy Vary
    442453, // Vysočina
    442463, // Hradec Králové
    442455, // Liberec
    442461, // Moravia-Silesia
    442459, // Olomouc Region
    442460, // Pardubice
    442466, // Plzeň
    435514, // Prague
    442397, // Central Bohemia
    442449, // Zlín
    442452, // Ústí nad Labem
  ];
}