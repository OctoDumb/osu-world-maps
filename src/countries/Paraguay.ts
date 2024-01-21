import Country from "../Country";

export default class Paraguay extends Country {
  code = "PY";

  center: [number, number] = [-23.4, -58.4];
  zoom = 7;

  regions = [
    3654543, // Asunción
    389882, // Alto Paraguay
    389891, // Alto Paraná
    389886, // Amambay
    389883, // Boquerón
    389890, // Caaguazú
    389897, // Caazapá
    389888, // Canindeyú
    389892, // Central
    389885, // Concepción
    389889, // Cordillera
    389894, // Guairá
    389898, // Itapúa
    389896, // Misiones
    389895, // Ñeembucú
    389893, // Paraguarí
    389884, // Presidente Hayes
    389887, // San Pedro
  ];
}

