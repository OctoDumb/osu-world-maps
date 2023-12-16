import Country from "../Country";

export default class CapeVerde extends Country {
  code = "CV";

  center: [number, number] = [16.1, -24];  
  zoom = 8;

  regions = [
    1382083, // Santiago
    3830199, // São Vicente
    3408413, // Santo Antão 
    4021365, // Fogo
    3830198, // Sal
    6929737, // São Nicolau
    3830196, // Brava
    3830197, // Maio
    3830195, // Boa Vista
  ];
}


