import Country from "../Country";
import JoinModifier from "../modifiers/JoinModifier";
import CustomNameModifier from "../modifiers/CustomIdModifier";
import EraseModifier from "../modifiers/EraseModifier";

export default class Panama extends Country {
  code = "PA";

  center: [number, number] = [8.2, -80.1];
  zoom = 8;

  regions = [
    3420383, // Bocas del Toro
    5740681, // Chiriquí 
    5748368, // Coclé 
    5740655, // Colón
    5740656, // Darién
    5740659, // Herrera
    5740662, // Los Santos
    5740663, // Ngäbe-Buglé
    5740665, // Panamá
    5740658, // Guna Yala 
    5740664, // Panamá Oeste
    5740657, // Emberá-Wounaan 
    13458933, // Naso Tjër Di
    5740666, // Veraguas
  ];
}

