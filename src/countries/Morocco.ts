import Country from "../Country";

export default class Morocco extends Country {
  code = "MA";

  center: [number, number] = [29.7, -10];
  zoom = 6;

  regions = [
    4734547, // Béni Mellal-Khénifra
    2424085, // Casablanca-Settat
    3406823, // Dakhla-Oued Ed-Dahab 
    2424034, // Drâa-Tafilalet
    4730909, // Fès-Meknès
    2424040, // Guelmim-Oued Noun
    1719443, // Oriental
    2424260, // Laâyoune-Sakia El Hamra
    2424086, // Marrakesh–Safi
    4730737, // Rabat-Salé-Kénitra
    2424036, // Souss-Massa
    1592819, // Tanger-Tetouan-Al Hoceima
  ];
}
