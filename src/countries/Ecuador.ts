import Country from "../Country";

export default class Ecuador extends Country {
  code = "EC";

  center: [number, number] = [-2.1, -78.7];
  zoom = 7;

  regions = [
    107886,  // Azuay
    108899,  // Bolívar
    108720,  // Cañar
    114048,  // Carchi
    108860,  // Chimborazo
    963072,  // Cotopaxi
    958681,  // El Oro
    113237,  // Esmeraldas
    1628150, // Galápagos
    109468,  // Guayas
    113982,  // Imbabura
    108088,  // Loja
    109248,  // Los Ríos
    112910,  // Manabí
    108521,  // Morona Santiago
    114276,  // Napo
    114245,  // Orellana
    113869,  // Pastaza
    113722,  // Pichincha
    109441,  // Santa Elena
    113721,  // Santo Domingo de los Tsáchilas
    114574,  // Sucumbíos
    113442,  // Tungurahua
    108326,  // Zamora Chinchipe
  ]
}