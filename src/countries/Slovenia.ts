import Country from "../Country";
import CustomIdModifier from "../modifiers/CustomIdModifier";

export default class Slovenia extends Country {
  code = "SI";

  center: [number, number] = [46.1, 14.8];
  zoom = 9;

  regions = [
    new CustomIdModifier(1703918, "SI-SI022"), // Upper Carniola
    new CustomIdModifier(1703668, "SI-SI017"), // Southeast Slovenia
    new CustomIdModifier(1703687, "SI-SI014"), // Savinja 
    new CustomIdModifier(1703400, "SI-SI011"), // Mura
    new CustomIdModifier(1703402, "SI-SI016"), // Lower Sava
    new CustomIdModifier(1703401, "SI-SI018"), // Littoral–Inner Carniola
    new CustomIdModifier(541729, "SI-SI023"), // Gorizia
    new CustomIdModifier(541718, "SI-SI012"), // Drava
    new CustomIdModifier(1703387, "SI-SI024"), // Coastal–Karst
    new CustomIdModifier(1699230, "SI-SI021"), // Central Slovenia
    new CustomIdModifier(1699148, "SI-SI015"), // Central Sava
    new CustomIdModifier(541722, "SI-SI013"), // Carinthia
  ];
}
