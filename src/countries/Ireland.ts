import Country from "../Country";

export default class Ireland extends Country {
  code = "IE";

  center: [number, number] = [53.4, -8.2];
  zoom = 7;

  regions = [
    278746, // Leinster
    278750, // Munster
    278721, // Connacht
    14419962, // Ulster
  ]
}