import Country from "../Country";

export default class TrinidadAndTobago extends Country {
  code = "TT";

  center: [number, number] = [10.5, -61.2];
  zoom = 9;

  regions = [
	11146288, // Arima
	7363641, // Chaguanas
	7363415, // Couva-Tabaquite-Talparo
	7363636, // Diego Martin
	7361804, // Mayaro-Rio Claro
	7363419, // Penal-Debe
	7363637, // Port of Spain
	7361803, // Princes Town
	7363418, // Point Fortin
	7363416, // San Fernando
	7363640, // Sangre Grande
	7363417, // Siparia
	7363638, // San Juan-Laventille
	5176041, // Tobago
	7363639, // Tunapuna-Piarco
  ];
}

