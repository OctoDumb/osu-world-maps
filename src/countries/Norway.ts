import Country from "../Country";

export default class Norway extends Country {
  code = "NO";

  center: [number, number] = [64.4, 11.8];
  zoom = 5;

  regions = [
    10155517, // Agder
    10155527, // Innlandet
    406868, // Møre og Romsdal
    408105, // Nordland
    406091, // Oslo
    405836, // Rogaland

    // Replacing Troms og Finnmark
    407717, // Troms
    406389, // Finnmark

    406567, // Trøndelag

    // Replacing Vestfold og Telemark
    404589, // Vestfold
    405156, // Telemark

    10155543, // Vestland

    // Replacing Viken
    412297, // Buskerud
    406106, // Akershus 
    406060, // Østfold
  ];
}