import Country from "../Country";

export default class SriLanka extends Country {
  code = "LK";

  center: [number, number] = [8, 80.7];
  zoom = 8;

  regions = [
    4630841, // Western Province
    4630835, // Central Province
    4630839, // Southern Province
    3237344, // Northern Province
    4630810, // Eastern Province
    4630837, // North Western Province
    4630836, // North Central Province
    4630840, // Uva Province
    4630838, // Sabaragamuwa Province
  ];
}

