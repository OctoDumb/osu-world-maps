import Country from "../Country";

export default class Angola extends Country {
  code = "AO";

  center: [number, number] = [-12.2, 17.1];
  zoom = 6;

  regions = [
    1802539, // Bengo
    1802540, // Benguela
    1802541, // Bié 
    422607, // Cabinda
    568485, // Cuando Cubango
    1802542, // Cuanza-Norte
    1802543, // Cuanza-Sul
    422606, // Cunene
    1802544, // Huambo
    1802545, // Huíla
    1802546, // Luanda
    1802547, // Lunda-Norte
    1802548, // Lunda-Sul 
    422660, // Malange
    1802549, // Moxico
    1802550, // Namibe
    422659, // Uíge 
    422608, // Zaire
  ];
}

