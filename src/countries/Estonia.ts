import Country from "../Country";

export default class Estonia extends Country {
  code = "EE";

  center: [number, number] = [58.7, 24.8];
  zoom = 8;

  regions = [
    350585, // Harju County
    350340, // Hiiu County
    350459, // Ida-Viru County
    354089, // Jõgeva County
    353776, // Järva County
    350424, // Lääne County
    351063, // Lääne-Viru County
    352454, // Põlva County
    350303, // Pärnu County
    353779, // Rapla County
    350144, // Saare County
    351246, // Tartu County
    351379, // Valga County
    352449, // Viljandi County
    353812, // Võru County
  ];
}