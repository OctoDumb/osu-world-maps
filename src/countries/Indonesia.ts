import Country from "../Country";
import CustomIdModifier from "../modifiers/CustomIdModifier";

export default class Indonesia extends Country {
  code = "ID";

  center: [number, number] = [-3.2, 118.7];
  zoom = 5;

  regions = [
		2390836, // Aceh
		1615621, // Bali
		3797243, // Bangka-Belitung Islands
		2388356, // Banten
		2390837, // Bengkulu
		2388357, // Central Java
		2388613, // Central Kalimantan
		14309178, // Central Papua
		2388664, // Central Sulawesi
		3438227, // East Java
		5449459, // East Kalimantan
		2396778, // East Nusa Tenggara
		2388665, // Gorontalo
		14309176, // Highland Papua
		2390838, // Jambi
		2390839, // Lampung
		2396795, // Moluccas
		5449460, // North Kalimantan
		2396796, // North Maluku
		2388666, // North Sulawesi
		2390843, // North Sumatra
		4521144, // Papua
		3797244, // Riau Islands
		2390840, // Riau
		2388615, // South Kalimantan
		14309177, // South Papua
		2388667, // South Sulawesi
		2390842, // South Sumatra
		2388668, // Southeast Sulawesi
		new CustomIdModifier(14905625, "ID-PSW"), // Southwest Papua
		6362934, // Special Capital Region of Jakarta
		5616105, // Special Region of Yogyakarta
		2388361, // West Java
		2388616, // West Kalimantan
		1615622, // West Nusa Tenggara
		4521145, // West Papua
		2388669, // West Sulawesi
		2390841, // West Sumatra
  ];
}
