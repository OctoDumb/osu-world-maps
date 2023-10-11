import Country from "../Country";
import JoinModifier from "../modifiers/join";

export default class Ukraine extends Country {
  code = "UA";

  center: [number, number] = [48, 31.5];
  zoom = 7;

  regions = [
		new JoinModifier([
			71248,
			421866,
		]), // Kyiv Oblast
		new JoinModifier([
			72639,
			1574364,
		]), // Autonomous Republic of Crimea
		91278, // Cherkasy Oblast
		71249, // Chernihiv Oblast
		72526, // Chernivtsi Oblast
		101746, // Dnipropetrovsk Oblast
		71973, // Donetsk Oblast
		72488, // Ivano-Frankivsk Oblast
		71254, // Kharkiv Oblast
		71022, // Kherson Oblast
		90742, // Khmelnytskyi Oblast
		101859, // Kirovohrad Oblast
		71971, // Luhansk Oblast
		72380, // Lviv Oblast
		72635, // Mykolaiv Oblast
		72634, // Odesa Oblast
		91294, // Poltava Oblast
		71236, // Rivne Oblast
		71250, // Sumy Oblast
		72525, // Ternopil Oblast
		90726, // Vinnytsia Oblast
		71064, // Volyn Oblast
		72489, // Zakarpattia Oblast
		71980, // Zaporizhia Oblast
		71245, // Zhytomyr Oblast
  ];
}