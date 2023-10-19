import Country from "../Country";

export default class Philippines extends Country {
  code = "PH";

  center: [number, number] = [13, 122.5];
  zoom = 6;

  regions = [
    3821409, // Bangsamoro
    3561455, // Bicol Region
    1552192, // Cagayan Valley
    1552120, // Calabarzon
    3870502, // Caraga
    1552195, // Central Luzon
    3625910, // Central Visayas
    1552190, // Cordillera Administrative Region
    3936842, // Davao Region
    3759193, // Eastern Visayas
    1552186, // Ilocos Region
    147488, // Metro Manila
    1552261, // Mimaropa
    3873457, // Northern Mindanao
    3851570, // Soccsksargen
    3589982, // Western Visayas
    3777290, // Zamboanga Peninsula
  ];
}