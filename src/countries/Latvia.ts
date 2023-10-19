import Country from "../Country";
import CustomIdModifier from "../modifiers/CustomIdModifier";

export default class Latvia extends Country {
  code = "LV";

  center: [number, number] = [56.8, 24.5];
  zoom = 8;

  regions = [
    new CustomIdModifier(1775676, "K"), // Courland
    new CustomIdModifier(1775821, "L"), // Latgale
    new CustomIdModifier(1775823, "V"), // Vidzeme
    new CustomIdModifier(1775647, "Z"), // Zemgale
  ];
}
