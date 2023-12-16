import Country from "../Country";

export default class Somalia extends Country {
  code = "SO";

  center: [number, number] = [6.1, 46.8]; 
  zoom = 6;

  regions = [
    1720051, // Awdal
    1720052, // Bakool
    1720053, // Banaadir 
    1720054, // Bari
    1720055, // Bay
    1720056, // Galguduud
    1720057, // Gedo
    1720058, // Hiiraan
    1720061, // Jubbada Dhexe
	1720059, // Jubbada Hoose
	1720063, // Mudug
	1720064, // Nugaal 
	13316065, // Sahil 
	1720065, // Sanaag 
	1720062, // Shabeellaha Dhexe 
	1720060, // Shabeellaha Hoose 
	1720066, // Sool
	1720067, // Togdheer	
	1720068, // Woqooyi Galbeed
  ];
}