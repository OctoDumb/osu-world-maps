import Country from "../Country";
import CustomIdModifier from "../modifiers/CustomIdModifier";

export default class Georgia extends Country {
  code = "GE";

  center: [number, number] = [42.3, 43.5];
  zoom = 8;

  regions = [
    1152720, // Abkhazia
    1995970, // Ajaria
    1996871, // Tbilisi
    1995971, // Guria
    1997289, // Imereti
    2000091, // Kakheti
    2000092, // Kvemo Kartli
    2000090, // Mtskheta-Mtianeti
    1997284, // Racha-Lechkhumi and Kvemo Svaneti
    1996076, // Samegrelo-Zemo Svaneti
    1996031, // Samtskhe-Javakheti
    2000040, // Shida Kartli
    new CustomIdModifier(1152717, "GE-SO"), // South Ossetia
  ];
}

