import Country from "../Country";
import JoinModifier from "../modifiers/join";
import CustomIdModifier from "../modifiers/customId";

export default class Turkey extends Country {
  code = "TR";

  center: [number, number] = [39, 35.5];
  zoom = 7;

  regions = [
		new CustomIdModifier(
			new JoinModifier([
        167216,
        223132,
        2319368,
        223122,
        223134,
        223138,
        223131,
        167232,
      ]),
			"TR-AKD"
		), // Mediterranean Region
		new CustomIdModifier(
			new JoinModifier([
        186433,
        1251450,
        223444,
        223441,
        223443,
        223445,
        186432,
        174742,
        186434,
        186431,
        223426,
        223440,
        223537,
        223442,
      ]),
			"TR-DOA"
		), // Eastern Anatolia Region
		new CustomIdModifier(
      new JoinModifier([
        223171,
        223166,
        223169,
        223167,
        223172,
        223168,
        223136,
        223170,
      ]),
			"TR-EGE"
		), // Aegean Region
		new CustomIdModifier(
			new JoinModifier([
        223141,
        223437,
        223435,
        223139,
        223140,
        223436,
        223434,
        223543,
        223438,
      ]),
			"TR-GUA"
		), // Southeastern Anatolia Region
		new CustomIdModifier(
			new JoinModifier([
        154454,
        223422,
        223454,
        223421,
        223137,
        154451,
        223423,
        154452,
        223133,
        154449,
        154456,
        223425,
        154450,
      ]),
			"TR-ICA"
		), // Central Anatolia Region
		new CustomIdModifier(
			new JoinModifier([
        223464,
        223420,
        223463,
        223471,
        223465,
        223474,
        223469,
        223473,
        223462,
        223470,
        223472,
      ]),
			"TR-MRM"
		), // Marmara Region
		new CustomIdModifier(
			new JoinModifier([
        223452,
        223448,
        223458,
        223446,
        223461,
        223453,
        223460,
        223449,
        223541,
        223455,
        223456,
        223450,
        223542,
        223451,
        223457,
        223424,
        223447,
        223459,
      ]),
			"TR-KAR"
		), // Black Sea Region
  ];
}