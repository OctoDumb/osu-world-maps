import Country from "../Country";

export default class France extends Country {
  code = "FR";

  center: [number, number] = [46.4, 3.14];
  zoom = 6;

  regions = [
    3792877, // Auvergne-Rhône-Alpes
    102740, // Brittany
    8640, // Centre-Val de Loire
    76910, // Corsica
    3792876, // Grand Est
    4217435, // Hauts-de-France
    8649, // Ile-de-France
    3793170, // Normandy
    3792880, // Nouvelle-Aquitaine
    3792883, // Occitania
    8650, // Pays de la Loire
    8654, // Provence-Alpes-Côte d'Azur
    3792878, // Bourgogne-Franche-Comté
  ];
}