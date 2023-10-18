import Country from "../Country";
import JoinModifier from "../modifiers/JoinModifier";

export default class Belarus extends Country {
  code = "BY";

  center: [number, number] = [0, 0];
  zoom = 6;

  regions = [
    59189, // Brest Region
    59161, // Homyel Region
    59275, // Hrodna Region
    59162, // Mahilyow Region
    new JoinModifier([59752, 59195]), // Minsk Region
    59506, // Vitebsk Region
  ];
}
