import Country from "../Country";

export default class Israel extends Country {
  code = "IL";

  center: [number, number] = [31.3, 35];
  zoom = 8;

  regions = [
    1400928, // Center District
    1400966, // Haifa District
    1384720, // Jerusalem District
    1375620, // North District
    1473952, // South District
    1400916, // Tel Aviv District
  ];
}