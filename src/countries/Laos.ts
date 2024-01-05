import Country from "../Country";

export default class Laos extends Country {
  code = "LA";

  center: [number, number] = [17.8, 104.1];
  zoom = 7;

  regions = [
    5831653, // Attapeu
    5831654, // Bokèo
    5831655, // Bolikhamsai
    5831656, // Champasak
    5831657, // Houaphanh
    5831658, // Khammouane
    5831659, // Luang Namtha
    5831660, // Luang Prabang
    5831661, // Oudomxay
    5831662, // Phongsaly
    5831664, // Salavan
    5831665, // Savannakhet
    5831667, // Vientiane Province
    5831666, // Vientiane Prefecture
    5831663, // Sainyabuli
    5831669, // Sekong
    5831670, // Xiangkhouang
    5831668, // Xaisomboun
  ];
}

