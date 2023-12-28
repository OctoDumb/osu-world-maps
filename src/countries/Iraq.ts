import Country from "../Country";

export default class Iraq extends Country {
  code = "IQ"
  
  center: [number, number] = [33.3, 44];
  zoom = 6;

  regions = [
	3242292, // Al Anbar Governorate
	3244379, // Al-Basra Governorate
	3244383, // Al-Muthanna Governorate
	3244377, // Al-Qadisiyah Governorate
	3244384, // Al-Najaf Governorate
	2969761, // Erbil Governorate
	2969790, // Sulaymaniyah Governorate
	3244378, // Babil Governorate
	3244381, // Karbala Governorate
	2969788, // Kirkuk Governorate
	3244382, // Maysan Governorate
	2969789, // Nineveh Governorate
	3242295, // Saladin Governorate
	3244385, // Wasit Governorate
	3242294, // Diyala Governorate
	3242293, // Baghdad Governorate
	2969732, // Duhok Governorate
	3244380, // Dhi Qar Governorate
	3826029, // Halabja Governorate
  ];
}

