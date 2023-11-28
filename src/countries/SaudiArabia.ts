import Country from "../Country";

export default class SaudiArabia extends Country {
  code = "SA";

  center: [number, number] = [23.4, 44.1];
  zoom = 6;

  regions = [
    3678598, // Asīr
    3679888, // Al Bāḩah
    3673927, // Al Ḩudūd ash Shamālīyah
    3842543, // Al Jawf
    3679869, // Al Madīnah al Munawwarah
    3679872, // Al Qaşīm
    3678409, // Ar Riyāḑ
    3667294, // Ash Sharqīyah
    3676707, // Ḩā'il
    3679903, // Jāzān
    3678639, // Makkah al Mukarramah
    3667317, // Najrān
    3679867, // Tabūk
  ];
}