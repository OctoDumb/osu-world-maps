import Country from "../Country";

export default class Taiwan extends Country {
  code = "TW";

  center: [number, number] = [23.5, 120.8];
  zoom = 8;

  regions = [
		2917549, // Changhua County
		2908173, // Chiayi County
		2790418, // Chiayi
		2912613, // Hsinchu County
		2849488, // Hsinchu
		2921156, // Hualien County
		2127079, // Kaohsiung
		1296154, // Keelung
		3339695, // Kinmen
		3777249, // Lienchiang County
		2915592, // Miaoli County
		2497975, // Nantou County
		1527220, // New Taipei
		3339738, // Penghu
		2775815, // Pingtung County
		2921154, // Taichung
		2418506, // Tainan
		1293250, // Taipei
		2921155, // Taitung County
		2770986, // Taoyuan City
		2912630, // Yilan County
		2915930, // Yunlin County
  ];
}