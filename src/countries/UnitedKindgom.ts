import Country from "../Country";
import EraseModifier from "../modifiers/erase";
import JoinModifier from "../modifiers/join";

export default class UnitedKingdom extends Country {
  code = "UK";

  center: [number, number] = [0, 0];
  zoom = 0;

  regions = [
    new EraseModifier(
      new JoinModifier([
        88067,
        153377,
        153375,
        150994,
      ]),
      3123501
    ),
  ]
}