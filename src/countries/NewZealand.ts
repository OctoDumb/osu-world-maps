import Country from "../Country";
import FlipModifier from "../modifiers/FlipModifier";

export default class NewZealand extends Country {
  code = "NZ";

  center: [number, number] = [-41, 171.6];
  zoom = 6;

  regions = [
    2094141, // Auckland
    1790755, // Bay of Plenty
    1640137, // Canterbury
    new FlipModifier(2647558), // Chatham Islands
    2643819, // Gisborne
    1643811, // Hawke's Bay
    1638992, // Manawatū-Whanganui
    4266977, // Marlborough
    4266962, // Nelson
    2133870, // Northland
    1640138, // Otago
    1640159, // Southland
    1643812, // Taranaki
    4266979, // Tasman
    2094142, // Waikato
    1638991, // Wellington
    1640136, // West Coast
  ];
}