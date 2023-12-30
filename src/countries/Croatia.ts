import Country from "../Country";

export default class Croatia extends Country {
  code = "HR";

  center: [number, number] = [44.2, 16.3];
  zoom = 7;

  regions = [
    224165, // Bjelovar-Bilogora County
    222861, // Brod-Posavina County
    226750, // Dubrovnik-Neretva County 
    226224, // Zagreb
    226351, // Istria County
    226271, // Karlovac County
    226209, // Koprivnica-Križevci County
    226223, // Krapina-Zagorje County
    226465, // Lika-Senj County
    224183, // Međimurje County
    222646, // Osijek-Baranja County
    222870, // Požega-Slavonia County
    226452, // Primorje-Gorski Kotar County
    226741, // Šibenik-Knin County
    224139, // Sisak-Moslavina County
    226749, // Split-Dalmatia County
    226210, // Varaždin County
    222869, // Virovitica-Podravina County
    222649, // Vukovar-Srijem County
    226726, // Zadar County
    226241, // Zagreb County
  ];
}

