import Country from "../Country";

export default class Tunisia extends Country {
  code = "TN";

  center: [number, number] = [34.2, 9.5];
  zoom = 7;

  regions = [
    1435833, // Béja
    1435836, // Ben Arous
    1435827, // Bizerte 
    1434956, // Gabès
    1434951, // Gafsa
    1435834, // Jendouba
    1435832, // Kairouan
    1434949, // Kasserine
    1434950, // Kébili
    1435830, // Ariana
    1435828, // La Manouba
    1435838, // Le Kef
    1434955, // Mahdia
    1434952, // Médenine 
    1434954, // Monastir
    1435825, // Nabeul
    1434957, // Sfax
    1435831, // Sidi Bouzid
    1435829, // Siliana
    3152094, // Sousse
    1434953, // Tataouine
    1435826, // Tozeur
    1435835, // Tunis
    1435837, // Zaghouan
  ];
}

