import Country from "../Country";
import CustomIdModifier from "../modifiers/CustomIdModifier";

export default class Lebanon extends Country {
  code = "LB";

  center: [number, number] = [33.8, 35.7];
  zoom = 9;

  regions = [
    7231014, // Akkar
    7231015, // Baalbek-Hermel
    316552, // Beirut 
    318174, // Beqaa
    new CustomIdModifier(12903506, "LB-KJ"), // Keserwan-Jbeil
    318194, // Mount Lebanon
    318309, // Nabatieh
    318161, // North
    318236, // South
  ];
}


