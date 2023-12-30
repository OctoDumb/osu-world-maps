import Country from "../Country";

export default class Guatemala extends Country {
  code = "GT";

  center: [number, number] = [15.5, -90.3];
  zoom = 7;

  regions = [
    214704, // Guatemala Department
    214697, // El Progreso
    214703, // Sacatepéquez 
    214715, // Chimaltenango
    214714, // Escuintla
    9565597, // Santa Rosa
    214713, // Sololá
    214709, // Totonicapán
    214710, // Quetzaltenango
    214696, // Suchitepéquez
    214711, // Retalhuleu
    214707, // San Marcos
    214708, // Huehuetenango
    214700, // Quiché
    214712, // Baja Verapaz 
    214695, // Alta Verapaz
    214699, // Petén
    214705, // Izabal
    214698, // Zacapa
    214702, // Chiquimula
    214706, // Jalapa
    214716, // Jutiapa
  ];
}
