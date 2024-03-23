import Country from "../Country";

export default class Albania extends Country {
  code = "AL";

  center: [number, number] = [41.1, 20];
  zoom = 8;

  regions = [
    1252289, // Berat
    1249567, // Dibër
    1249872, // Durrës
    1250609, // Elbasan
    1251469, // Fier
    1253915, // Gjirokastër
    1252589, // Korçë
    1759889, // Kukës
    1248935, // Lezhë
    1248293, // Shkodër
    1250098, // Tirana
    1255521, // Vlorë
  ];
}

