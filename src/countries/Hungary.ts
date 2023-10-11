import Country from "../Country";

export default class Hungary extends Country {
  code = "HU";

  center: [number, number] = [47.3, 19.4];
  zoom = 8;

  regions = [
		22234, // Baranya
		22271, // Borsod-Abaúj-Zemplén
		37244, // Budapest
		22260, // Bács-Kiskun
		22266, // Békés
		22265, // Csongrád-Csanád
		22255, // Fejér
		22249, // Győr-Moson-Sopron
		22267, // Hajdú-Bihar
		22273, // Heves
		26935, // Jász-Nagykun-Szolnok
		22252, // Komárom-Esztergom
		22274, // Nógrád
		22259, // Pest
		22225, // Somogy
		22268, // Szabolcs-Szatmár-Bereg
		22239, // Tolna
		22250, // Vas
		22278, // Veszprém
		22238, // Zala
  ];
}