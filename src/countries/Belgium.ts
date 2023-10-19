import Country from "../Country";

export default class Belgium extends Country {
  code = "BE";

  center: [number, number] = [50.5, 4.8];
  zoom = 8;

  regions = [
    53114, // Antwerp
    54094, // Brussels-Capital
    53135, // East Flanders
    58004, // Flemish Brabant
    157559, // Hainaut
    53142, // Limburg
    1412581, // Luxembourg
    1311816, // Namur
    1407192, // Liège
    78748, // Walloon Brabant
    416271, // West Flanders
  ];
}