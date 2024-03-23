import Country from "../Country";
import JoinModifier from "../modifiers/JoinModifier";

export default class India extends Country {
  code = "IN";

  center: [number, number] = [21.2, 78.5];
  zoom = 6;

  regions = [
    2025855,
    new JoinModifier([
      2022095,
      10088316,
    ]),
    2027346,
    2025886,
    1958982,
    1942809,
    1972004,
    1952530,
    1942586,
    11251493,
    1949080,
    364186,
    1942601,
    1960191,
    1943188,
    2019939,
    new JoinModifier([
      2018151,
      5335149, // Mahe
    ]),
    5515045,
    2027460,
    1950884,
    2027521,
    2027869,
    1950071,
    2029046,
    2027973,
    1984022,
    1942686,
    1942920,
    1791324,
    3250963,
    new JoinModifier([
      96905,
      5335580, // Puducherry
      1819590, // Karaikal
    ]),
    2026458,
    1942587,
    9987086,
    1960177,
  ];
}