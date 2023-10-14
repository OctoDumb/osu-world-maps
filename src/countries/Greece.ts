import Country from "../Country";

export default class Greece extends Country {
  code = "GR";

  center: [number, number] = [38.2, 23.9];
  zoom = 7;

  regions = [
    937937,  // Eastern Macedonia and Thrace
    937958,  // Central Macedonia
    956701,  // Western Macedonia
    554424,  // Epirus
    958236,  // Thessaly
    957830,  // Ioanian Islands
    910919,  // Western Greece
    910915,  // Central Greece
    957716,  // Attica
    957717,  // Peloponnese Region
    958517,  // Northern Aegean
    1851752, // South Aegean
    282436,  // Region of Crete
    2135921, // Autonomous Monastic State of the Holy Mountain
  ];
}