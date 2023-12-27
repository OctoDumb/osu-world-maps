import Country from "../Country";

export default class Algeria extends Country {
  code = "DZ";

  center: [number, number] = [27.6, 1.2];
  zoom = 5;

  regions = [
	1258650, // Adrar
	1283678, // Aïn Defla
	1259188, // Aïn Témouchent 
	157062, // Alger
	1455599, // Annaba
	1278748, // Batna
	1258647, // Béchar
	1278765, // Béjaïa
	6824843, // Béni Abbès
	1280072, // Biskra
	1283683, // Blida
	6528163, // Bordj Badji Mokhtar
	1278766, // Bordj Bou Arréridj
	1283093, // Bouira 
	1283608, // Boumerdès
	1283740, // Chlef
	1273368, // Constantine
	6825876, // Djanet
	1280073, // Djelfa
	1258649, // El Bayadh
	6825874, // El Meghaier
	6825901, // El Meniaa
	1280071, // El Oued
	1455600, // El Tarf 
	1279666, // Ghardaïa
	1273369, // Guelma
	1279816, // Illizi
	6825881, // In Guezzam
	6824900, // In Salah
	1278746, // Jijel
	1280466, // Khenchela
	1280081, // Laghouat
	1278767, // M'sila
	1259190, // Mascara
	1282111, // Médéa 
	1273544, // Mila
	1259191, // Mostaganem
	1258648, // Naama
	1259187, // Oran
	1279811, // Ouargla
	10489092, // Ouled Djellal
	1278749, // Oum el Bouaghi
	1282091, // Relizane
	1281260, // Saïda
	1278747, // Sétif 
	1259189, // Sidi Bel Abbès
	1273552, // Skikda
	1283457, // Souk Ahras
	1279667, // Tamanrasset
	1280465, // Tébessa
	1281404, // Tiaret
	6528164, // Timimoun
	1258651, // Tindouf
	1286213, // Tipaza
	1282090, // Tissemsilt
	1283601, // Tizi Ouzou 
	1280702, // Tlemcen
	6822397, // Touggourt
  ];
}

