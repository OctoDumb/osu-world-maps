import Country from "../Country";

export default class Kazakhstan extends Country {
  code = "KZ";

  center: [number, number] = [48.7, 66.5];
  zoom = 6;

  regions = [
		14243026, // Abay Region
		215743, // Akmola Region
		215718, // Almaty Region
		2465058, // Almaty
		215683, // Aqtöbe region
		3087155, // Astana
		214834, // Atyrau Region
		215699, // East Kazakhstan Region
		215722, // Jambyl Region
		14312169, // Jetisu Region
		215776, // Karaganda Region
		1288730, // Kostanay Region
		215727, // Kyzylorda Region
		215686, // Mangystau Region
		215760, // North Kazakhstan Region
		215772, // Pavlodar Region
		3389772, // Shymkent
		215739, // Turkistan Region
		14312737, // Ulytau Region
		215441, // West Kazakhstan Region
  ];
}