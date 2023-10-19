import Country from "../Country";

export default class Romania extends Country {
  code = "RO";

  center: [number, number] = [45.7, 24.8];
  zoom = 7;

  regions = [
    194271, // Alba
    2248721, // Arad
    2261315, // Argeș
    2248681, // Bacău
    91731, // Bihor
    55466, // Bistrița-Năsăud
    2256729, // Botoșani
    2248612, // Brașov
    2355512, // Brăila
    377733, // Bucharest
    2355511, // Buzău
    2366873, // Caraș-Severin
    91733, // Cluj
    2367022, // Constanța
    2248621, // Covasna
    2367015, // Călărași
    2366970, // Dolj
    2355471, // Dâmbovița
    2260192, // Galați
    2366987, // Giurgiu
    2261275, // Gorj
    2248660, // Harghita
    2248737, // Hunedoara
    2355517, // Ialomița
    2256747, // Iași
    2366996, // Ilfov
    72481, // Maramureș
    2366962, // Mehedinți
    2248573, // Mureș
    2248675, // Neamț
    2366978, // Olt
    2355507, // Prahova
    72482, // Satu Mare
    2248586, // Sibiu
    2077868, // Suceava
    91685, // Sălaj
    2366986, // Teleorman
    2366863, // Timiș
    2367044, // Tulcea
    2256753, // Vaslui
    2260187, // Vrancea
    2261289, // Vâlcea
  ];
}