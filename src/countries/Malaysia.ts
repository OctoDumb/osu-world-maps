import Country from "../Country";

export default class Malaysia extends Country {
  code = "MY";

  center: [number, number] = [4, 102.3];
  zoom = 7;

  regions = [
    2939653, // Johor
    4444908, // Kedah
    4443571, // Kelantan
    2939672, // Kuala Lumpur
    4521286, // Labuan
    2939673, // Malacca
    2939674, // Negeri Sembilan
    4444595, // Pahang
    4445131, // Penang
    4445076, // Perak
    4444918, // Perlis
    4443881, // Putrajaya
    3879783, // Sabah
    3879784, // Sarawak
    2932285, // Selangor
    4444411, // Terengganu
  ];
}