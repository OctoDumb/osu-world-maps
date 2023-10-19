import Country from "../Country";

export default class Germany extends Country {
  code = "DE";

  center: [number, number] = [50.5, 10.5];
  zoom = 6;

  regions = [
    62611, // Baden-Württemberg
    2145268, // Bavaria
    62422, // Berlin
    62504, // Brandenburg
    62718, // Bremen
    62782, // Hamburg
    62650, // Hesse
    62771, // Lower Saxony
    28322, // Mecklenburg-Vorpommern
    62761, // North Rhine-Westphalia
    62341, // Rhineland-Palatinate
    62372, // Saarland
    62607, // Saxony-Anhalt
    62467, // Saxony
    51529, // Schleswig-Holstein
    62366, // Thuringia
  ];
}