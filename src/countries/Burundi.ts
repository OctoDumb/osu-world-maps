import Country from "../Country";

export default class Burundi extends Country {
  code = "BI";

  center: [number, number] = [-3.4, 30];
  zoom = 9;

  regions = [
    1700314, // Bubanza
    1694988, // Bujumbura Mairie
    1695013, // Bujumbura Rural
    1695014, // Bururi
    1695104, // Cankuzo
    1700315, // Cibitoke
    1700324, // Gitega
    1700328, // Karuzi
    1700316, // Kayanza
    1700329, // Kirundo
    1695019, // Makamba
    1700317, // Muramvya
    1700330, // Muyinga
    1700318, // Mwaro
    1700331, // Ngozi
    7318716, // Rumonge
    1695020, // Rutana
    1695105, // Ruyigi
  ];
}

