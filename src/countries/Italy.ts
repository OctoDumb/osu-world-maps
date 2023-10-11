import Country from "../Country";

export default class Italy extends Country {
  code = "IT";

  center: [number, number] = [42, 12.6];
  zoom = 6;

  regions = [
		53937, // Abruzzo
		45155, // Aosta Valley
		40095, // Apulia
		40137, // Basilicata
		1783980, // Calabria
		40218, // Campania
		42611, // Emilia-Romagna
		179296, // Friuli-Venezia Giulia
		40784, // Lazio
		301482, // Liguria
		44879, // Lombardy
		53060, // Marche
		41256, // Molise
		44874, // Piedmont
		7361997, // Sardinia
		39152, // Sicily
		45757, // Trentino-Alto Adige/Südtirol
		41977, // Tuscany
		42004, // Umbria
		43648, // Veneto
  ];
}