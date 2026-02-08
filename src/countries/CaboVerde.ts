import Country from "../Country";
import JoinModifier from "../modifiers/JoinModifier";
import CustomNameModifier from "../modifiers/CustomNameModifier";
import CustomIdModifier from "../modifiers/CustomIdModifier";

export default class CaboVerde extends Country {
  code = "CV";

  center: [number, number] = [16.1, -24];  
  zoom = 8;

  regions = [
    new CustomIdModifier(1382083, "CV-SA"), // Santiago
    new CustomIdModifier(3408413, "CV-ST"), // Santo Antão
    new CustomIdModifier(4021365, "CV-FO"), // Fogo	
    3830198, // Sal
    3830199, // São Vicente
    3830196, // Brava
    3830197, // Maio
    3830195, // Boa Vista
    new CustomNameModifier(
      new CustomIdModifier(
        new JoinModifier([
          6929737, // São Nicolau
          4019943, // Tarrafal de São Nicolau
        ]),
        "CV-SN"
      ),
      "São Nicolau"
    ),
  ];
}

