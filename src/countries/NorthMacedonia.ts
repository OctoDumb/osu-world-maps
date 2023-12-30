import Country from "../Country";
import CustomIdModifier from "../modifiers/CustomIdModifier";

export default class NorthMacedonia extends Country {
  code = "MK"
  
  center: [number, number] = [41.6, 21.5];
  zoom = 8;

  regions = [
    new CustomIdModifier(2572311, "MK-MK001"), // Vardar
    new CustomIdModifier(2572069, "MK-MK002"), // Eastern
    new CustomIdModifier(2573888, "MK-MK003"), // Southwestern
    new CustomIdModifier(2572240, "MK-MK004"), // Southeastern
    new CustomIdModifier(2572701, "MK-MK005"), // Pelagonia
    new CustomIdModifier(2573935, "MK-MK006"), // Polog
    new CustomIdModifier(2570958, "MK-MK007"), // Northeastern
    new CustomIdModifier(2460455, "MK-MK008"), // Skopje
  ];
}

