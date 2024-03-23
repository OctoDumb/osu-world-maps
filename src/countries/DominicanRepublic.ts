import Country from "../Country";

export default class DominicanRepublic extends Country {
  code = "DO";

  center: [number, number] = [18.8, -70.3];
  zoom = 9;

  regions = [
    53161, // Distrito Nacional
    3421245, // Azua
    3420663, // Baoruco 
    14761637, // Barahona
    3412367, // Dajabón
    3420664, // Duarte
    3422238, // El Seibo
    3412918, // Espaillat
    3422239, // Hato Mayor
    14761638, // Independencia
    3422240, // La Altagracia
    3420312, // Elías Piña
    3422258, // La Romana
    3420314, // La Vega
    3422241, // María Trinidad Sánchez 
    3420315, // Monseñor Nouel
    3411021, // Monte Cristi
    3420529, // Monte Plata
    3421242, // Pedernales
    3421246, // Peravia
    3412919, // Puerto Plata
    3420313, // Hermanas Mirabal
    3422242, // Samaná
    3422564, // San Cristóbal
    3421243, // San José de Ocoa
    3420316, // San Juan
    3422259, // San Pedro de Macorís
    3420666, // Sánchez Ramírez
    3412920, // Santiago
    3412368, // Santiago Rodríguez
    3422565, // Santo Domingo
    3412369, // Valverde
  ];
}
