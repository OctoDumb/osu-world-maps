import Country from "../Country";
import JoinModifier from "../modifiers/JoinModifier";
import CustomIdModifier from "../modifiers/CustomIdModifier";
import CustomNameModifier from "../modifiers/CustomNameModifier";

export default class Uzbekistan extends Country {
  code = "UZ";

  center: [number, number] = [40.9, 65];
  zoom = 6;

  regions = [
    178016, // Andijon
    1670973, // Buxoro
    178018, // Farg‘ona 
    196254, // Jizzax
    178017, // Namangan
    196246, // Navoiy
    1670974, // Qashqadaryo
    196241, // Karakalpakstan
    196249, // Samarqand
    196253, // Sirdaryo
    196248, // Surxondaryo
    2216724, // Toshkent
	196242, // Xorazm
	
	new CustomNameModifier(
      new CustomIdModifier(
        new JoinModifier([
          196251, // Toshkent Reigon
          5745852, // Angren
        ]),
        "UZ-TOA"
      ),
      "Toshkent Reigon"
    ),
  ];
}

