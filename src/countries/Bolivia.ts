import Country from "../Country";

export default class Bolivia extends Country {
  code = "BO";

  center: [number, number] = [-16.4, -65.2]; 
  zoom = 6;

  regions = [
    393562, // Cochabamba
    396197, // Chuquisaca
    405935, // El Beni 
    400473, // La Paz
    395910, // Oruro
    3358584, // Pando
    4509552, // Potosí
    3360565, // Santa Cruz
    396198, // Tarija
  ];
}