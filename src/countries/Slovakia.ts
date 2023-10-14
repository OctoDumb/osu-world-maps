import Country from "../Country";

export default class Slovakia extends Country {
  code = "SK";

  center: [number, number] = [48.6, 19.8];
  zoom = 8;

  regions = [
    388270, // Region of Banská Bystrica
    388265, // Region of Bratislava
    388272, // Region of Košice
    388268, // Region of Nitra
    388271, // Region of Prešov
    388267, // Region of Trenčín
    388266, // Region of Trnava
    388269, // Region of Žilina
  ];
}