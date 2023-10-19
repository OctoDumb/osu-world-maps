import Country from "../Country";

export default class Denmark extends Country {
  code = "DK";

  center: [number, number] = [56.2, 10.7];
  zoom = 8;

  regions = [
    1320608, // Capital Region of Denmark
    1319935, // Central Denmark Region
    1319936, // North Denmark Region
    1319978, // Region of Southern Denmark
    1320370, // Region Zealand
  ];
}