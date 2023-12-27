import Country from "../Country";

export default class Mongolia extends Country {
  code = "MN";

  center: [number, number] = [47, 103.9];
  zoom = 6;

  regions = [
	270090, // Ulaanbaatar
	270075, // Arkhangai
	270052, // Bayankhongor
	3382266, // Bayan-Ölgii
	270073, // Bulgan
	270091, // Darkhan-Uul
	269886, // Dornod
	270050, // Dornogovi
	270094, // Dundgobi
	4074177, // Zavkhan
	270054, // Govi-Altai
	270095, // Govisümber
	269885, // Khentii
	270055, // Khovd 
	270072, // Khövsgöl
	270051, // Ömnögovĭ
	270092, // Orkhon
	270074, // Övörkhangai
	270089, // Selenge
	269874, // Sükhbaatar
	3382267, // Töv
	270059, // Uvs
  ];
}

