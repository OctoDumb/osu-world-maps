import Country from "../Country";

export default class Myanmar extends Country {
  code = "MM";

  center: [number, number] = [19.3, 97.1];
  zoom = 5;

  regions = [
	5996473, // Ayeyarwady
	5996474, // Bago
	5996479, // Magway
	5996480, // Mandalay
	5996484, // Sagaing
	5996486, // Tanintharyi
	5996487, // Yangon
	5996475, // Chin
	5996476, // Kachin
	5996477, // Kayah
	5996478, // Kayin
	5996481, // Mon
	5996483, // Rakhine
	5996485, // Shan
	5996482, // Naypyidaw
  ];
}

