import Country from "../Country";

export default class Colombia extends Country {
  code = "CO";

  center: [number, number] = [3.6, -73];
  zoom = 6;

  regions = [
    1303962, // Amazonas
    1315120, // Antioquia
    1388045, // Arauca
    1315209, // Atlántico
    12893646, // Bogota, Capital District
    1316581, // Bolívar
    1390144, // Boyacá
    396705, // Caldas
    1394843, // Caquetá
    1392025, // Casanare
    1392085, // Cauca
    1317223, // Cesar
    1322131, // Chocó
    1305533, // Cundinamarca
    1321032, // Córdoba
    1385038, // Guainía
    1380540, // Guaviare
    1396291, // Huila
    1321379, // La Guajira
    1319097, // Magdalena
    1305166, // Meta
    1380130, // Nariño
    1324192, // Norte de Santander
    1375357, // Putumayo
    1331230, // Quindío
    1374221, // Risaralda
    2181889, // San Andrés and Providencia
    1372374, // Santander
    1320759, // Sucre
    1309495, // Tolima
    1322825, // Valle del Cauca
    1359366, // Vaupés
    1357098, // Vichada
  ];
}