import Country from "../Country";

export default class BosniaandHerzegovina extends Country {
  code = "BA"
  
  center: [number, number] = [43.9, 17.7];
  zoom = 8;

  regions = [
	2528144, // Federation of Bosnia and Herzegovina
	2528145, // Republic of Srpska
	2528143, // Brčko District
  ];
}

