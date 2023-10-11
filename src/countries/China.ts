import Country from "../Country";

export default class China extends Country {
  code = "CN";

  center: [number, number] = [37.3, 105];
  zoom = 5;

  regions = [
		913011, // Anhui
		912940, // Beijing
		913069, // Chongqing
		553303, // Fujian
		153314, // Gansu
		911844, // Guangdong Province
		286342, // Guangxi
		286937, // Guizhou
		2128285, // Hainan Province
		912998, // Hebei
		199073, // Heilongjiang
		407492, // Henan
		913106, // Hubei
		913073, // Hunan
		161349, // Inner Mongolia
		913012, // Jiangsu
		913109, // Jiangxi
		198590, // Jilin
		912942, // Liaoning
		913101, // Ningxia
		153269, // Qinghai
		913100, // Shaanxi
		913006, // Shandong
		913067, // Shanghai
		913105, // Shanxi
		913068, // Sichuan
		912999, // Tianjin
		153292, // Tibet
		153310, // Xinjiang
		913094, // Yunnan
		553302, // Zhejiang
  ];
}