import Country from "../Country";

export default class SouthAfrica extends Country {
  code = "ZA";

  center: [number, number] = [-29, 24];
  zoom = 6;

  regions = [
      88574, // Eastern Cape
      92417, // Free State
      349344, // Gauteng
      349390, // KwaZulu Natal
      349547, // Limpopo
      349556, // Mpumalanga
      349519, // North West
      86720, // Northern Cape
      80501, // Western Cape
  ];
}