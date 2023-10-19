import Country from "../Country";

export default class Singapore extends Country {
  code = "SG";

  center: [number, number] = [1.3, 103.8];
  zoom = 11;

  regions = [
    3831712, // Central Singapore
    3831713, // North East
    3831714, // North West
    3831715, // South East
    3831716, // South West
  ];
}