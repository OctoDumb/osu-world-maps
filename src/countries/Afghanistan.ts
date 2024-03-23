import Country from "../Country";

export default class Afghanistan extends Country {
  code = "AF";

  center: [number, number] = [34, 67.1];
  zoom = 7;

  regions = [
    1674535, // Badakhshan Province
    1674811, // Badghis Province
    1674785, // Baghlan Province 
    1674795, // Balkh Province
    1674849, // Bamyan Province
    1674833, // Daykundi Province
    1674802, // Farah Province
    1674814, // Faryab Province
    1675048, // Ghazni Province
    1674816, // Ghor Province
    1674573, // Helmand Province
    1674803, // Herat Province
    1674800, // Jowzjan Province 
    1674876, // Kabul Province
    1674567, // Kandahar Province
    1674767, // Kapisa Province
    1674878, // Khost Province
    1674607, // Kunar Province
    1674564, // Kunduz Province
    1674766, // Laghman Province
    1674874, // Logar Province
    1674770, // Nangarhar Province
    1674664, // Nimruz Province 
    1674544, // Nuristan Province
    1674882, // Paktia Province
    1675047, // Paktika Province
    1675032, // Panjshir Province
    1674782, // Parwan Province
    1674791, // Samangan Province
    1674994, // Sar-e Pol Province
    1674541, // Takhar Province
    1674993, // Uruzgan Province
    1759757, // Maidan Wardak Province
    1674841, // Zabul Province
  ];
}

