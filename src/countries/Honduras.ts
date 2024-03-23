import Country from "../Country";

export default class Honduras extends Country {
  code = "HN";

  center: [number, number] = [14.8, -86.2];
  zoom = 8;

  regions = [
    4627386, // Atlántida
    4627314, // Choluteca
    4627315, // Colón
    12113927, // Comayagua
    4627388, // Copán
    4627389, // Cortés
    4627316, // El Paraíso
    4627390, // Francisco Morazán
    3811537, // Gracias a Dios
    4627391, // Intibucá
    4625745, // Islas de la Bahía
    4627392, // La Paz
    4627393, // Lempira
    4627394, // Ocotepeque
    4627317, // Olancho
    4627395, // Santa Bárbara
    4627318, // Valle
    4627396, // Yoro
  ];
}

