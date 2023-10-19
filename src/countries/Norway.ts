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
    10155507, // Troms og Finnmark
    406567, // Trøndelag
    10487008, // Vestfold og Telemark
    10155543, // Vestland
    10155539, // Viken
  ];
}