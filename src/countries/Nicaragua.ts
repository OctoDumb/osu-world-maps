import Country from "../Country";

export default class Nicaragua extends Country {
  code = "NI";

  center: [number, number] = [12.9, -85.2];
  zoom = 8;

  regions = [
    2194862, // Boaco
    3634063, // Carazo
    2194907, // Chinandega 
    2194866, // Chontales
    2194930, // Estelí
    3634064, // Granada
    2196713, // Jinotega
    2194905, // León
    2194929, // Madriz
    2194897, // Managua
    3634065, // Masaya 
    2194958, // Matagalpa
    2194941, // Nueva Segovia
    3634066, // Rivas
    2194832, // Río San Juan
    2195034, // North Caribbean Coast Autonomous Region
    2195081, // South Caribbean Coast Autonomous Region 
  ];
}

