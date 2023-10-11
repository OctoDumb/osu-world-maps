import Country from "../Country";

export default class UnitedStates extends Country {
  code = "US";

  center: [number, number] = [37.4, -98.9];
  zoom = 5;

  regions = [
		161950, // Alabama
		1116270, // Alaska
		162018, // Arizona
		161646, // Arkansas
		165475, // California
		161961, // Colorado
		165794, // Connecticut
		162110, // Delaware
		162050, // Florida
		161957, // Georgia
		166563, // Hawaii
		162116, // Idaho
		122586, // Illinois
		161816, // Indiana
		161650, // Iowa
		161644, // Kansas
		161655, // Kentucky
		224922, // Louisiana
		63512, // Maine
		162112, // Maryland
		61315, // Massachusetts
		165789, // Michigan
		165471, // Minnesota
		161943, // Mississippi
		161638, // Missouri
		162115, // Montana
		161648, // Nebraska
		165473, // Nevada
		67213, // New Hampshire
		224951, // New Jersey
		162014, // New Mexico
		61320, // New York
		224045, // North Carolina
		161653, // North Dakota
		162061, // Ohio
		161645, // Oklahoma
		165476, // Oregon
		162109, // Pennsylvania
		392915, // Rhode Island
		224040, // South Carolina
		161652, // South Dakota
		161838, // Tennessee
		114690, // Texas
		161993, // Utah
		60759, // Vermont
		224042, // Virginia
		5396194, // Washington
		165479, // Washington
		162068, // West Virginia
		165466, // Wisconsin
		161991, // Wyoming
  ];
}