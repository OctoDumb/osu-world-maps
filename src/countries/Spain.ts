import Country from "../Country";

export default class Spain extends Country {
  code = "ES";

  center: [number, number] = [40, -3.5];
  zoom = 7;

  regions = [
    349044, // Andalusia
    349045, // Aragon
    349033, // Asturias
    349042, // Autonomous Community of the Basque Country
    6426656, // Balearic Islands
    349048, // Canary Islands
    349013, // Cantabria
    349041, // Castile and León
    349052, // Castile-La Mancha
    349053, // Catalonia
    349055, // Community of Madrid
    349050, // Extremadura
    349036, // Galicia
    1154757, // Melilla
    349027, // Navarre
    349047, // Region of Murcia
    348991, // Rioja
    1154756, // Ceuta
    349043, // Valencian Community
  ];
}