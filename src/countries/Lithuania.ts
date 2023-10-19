import Country from "../Country";

export default class Lithuania extends Country {
  code = "LT";

  center: [number, number] = [55, 24];
  zoom = 8;

  regions = [
    1076930, // Alytus County
    1069509, // Kaunas County
    1189583, // Klaipeda County
    974211, // Marijampole County
    1028503, // Panevezys County
    1256237, // Siauliai County
    1307305, // Taurage County
    1211025, // Telsiai County
    966958, // Utena County
    977317, // Vilnius County
  ];
}