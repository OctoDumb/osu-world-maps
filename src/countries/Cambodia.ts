import Country from "../Country";

export default class Cambodia extends Country {
  code = "KH";

  center: [number, number] = [12.1, 104.8];
  zoom = 8;

  regions = [
    2199033, // Phnom Penh
    6608542, // Battambang 
    2200390, // Banteay Meanchey 
    2200024, // Kep
    2200442, // Kampong Cham
    2200303, // Kampong Chhnang
    2215016, // Kampong Speu
    2198944, // Kampong Thom
    2200183, // Kampot
    2200251, // Kandal
    2199066, // Koh Kong
    2200456, // Kratié
    2200450, // Mondulkiri
    2200402, // Oddar Meanchey 
    2200322, // Pailin
    2200278, // Pursat
    3279394, // Preah Sihanouk
    2198922, // Preah Vihear
    2200477, // Prey Veng
    2200301, // Ratanakiri
    2200393, // Siem Reap
    2198916, // Stung Treng
    2301441, // Svay Rieng
    2200220, // Takéo
    3714841, // Tboung Khmum
  ];
}

