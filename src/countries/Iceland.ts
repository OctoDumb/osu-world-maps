import Country from "../Country";

export default class Iceland extends Country {
  code = "IS";

  center: [number, number] = [65.1, -18.3];
  zoom = 7;

  regions = [
    4001011, // Eastern Region
    3881596, // Capital Region
    4001055, // Northeastern Region 
    4001076, // Northwestern Region
    4002410, // Southern Region
    4002388, // Southern Peninsula
    4001093, // Westfjords
    4001119, // Western Region
  ];
}

