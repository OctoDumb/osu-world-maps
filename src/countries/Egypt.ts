import Country from "../Country";

export default class Egypt extends Country {
  code = "EG";

  center: [number, number] = [26.4, 29.7];
  zoom = 6;

  regions = [
    4103403, // Dakahlia
    3061758, // Red Sea
    3824513, // Beheira 
    3726124, // Faiyum
    3584607, // Gharbia
    3061846, // Alexandria
    3062184, // Ismailia
    3824206, // Giza
    3824207, // Monufia
    3726175, // Minya
    4103336, // Cairo
    4103337, // Qalyubiyya
    3726211, // Luxor
    3061827, // New Valley
    3062185, // Suez 
    4103407, // Sharqia
    3061757, // Aswan
    3726184, // Asyut
    3726170, // Beni Suef
    4103406, // Port Said
    4103404, // Damietta
    3060793, // South Sinai
    4103405, // Kafr El Sheikh
    3061826, // Matrouh
    3726189, // Qena
    3060792, // North Sinai
    3726186, // Sohag
  ];
}
