import Country from "../Country";

export default class Switzerland extends Country {
  code = "CH";

  center: [number, number] = [46.8, 8.2];
  zoom = 9;

  regions = [
    1686359, // Aargau
    1686649, // Appenzell Ausserrhoden
    1686666, // Appenzell Innerrhoden
    1686366, // Basel-Landschaft
    1699639, // Basel-City
    1686344, // Bern
    1698314, // Fribourg
    1702419, // Geneva
    1685673, // Glarus
    1686631, // Grisons
    1697347, // Jura
    1685677, // Lucerne
    1702420, // Neuchâtel
    1686449, // Nidwalden
    1686448, // Obwalden
    1687006, // St. Gallen
    1696112, // Schaffhausen
    1688583, // Schwyz
    1701133, // Solothurn
    1693811, // Thurgau
    1687730, // Ticino
    1693971, // Uri
    1686699, // Wallis
    1702421, // Vaud
    1686447, // Zug
    1690227, // Zurich
  ];
}