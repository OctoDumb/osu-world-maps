import Country from "../Country";

export default class Bulgaria extends Country {
  code = "BG";

  center: [number, number] = [42.6, 25.2];
  zoom = 8;

  regions = [
    1739521, // Blagoevgrad
    1739523, // Burgas
    1437135, // Varna
    1739524, // Veliko Tarnovo
    1739525, // Vidin
    1739526, // Vratsa
    1739527, // Gabrovo
    1739528, // Dobrich
    1739529, // Kardzhali
    1739530, // Kyustendil
    1739531, // Lovech
    1739532, // Montana
    1739533, // Pazardzhik
    1739534, // Pernik
    1739535, // Pleven
    1739536, // Plovdiv
    1739537, // Razgrad
    1739538, // Ruse
    1739539, // Silistra
    1739540, // Sliven
    1739541, // Smolyan
    1739543, // Sofia-City
    1739542, // Sofia
    1300657, // Stara Zagora
    1739544, // Targovishte
    1739545, // Haskovo
    1739546, // Shumen
1739547, // Yambol
  ];
}