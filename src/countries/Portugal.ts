import Country from "../Country";
import CustomIdModifier from "../modifiers/CustomIdModifier";

export default class Portugal extends Country {
  code = "PT";

  center: [number, number] = [39.47, -8.05];
  zoom = 7;

  regions = [
		new CustomIdModifier(5378337, "PT18"), // Alentejo
		new CustomIdModifier(1253665, "PT15"), // Algarve
		new CustomIdModifier(1629146, "PT20"), // Azores
		new CustomIdModifier(5400979, "PT16"), // Central Region
		new CustomIdModifier(1629145, "PT30"), // Madeira
		new CustomIdModifier(5396677, "PT11"), // North
		new CustomIdModifier(5404272, "PT17"), // Lisbon Metropolitan Area
  ];
}
