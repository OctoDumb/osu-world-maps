import Country from "../Country";

export default class Australia extends Country {
  code = "AU";

  center: [number, number] = [-27.6, 132.3];
  zoom = 5;

  regions = [
		2354197, // Australian Capital Territory
		2316593, // New South Wales
		2316594, // Northern Territory
		2316595, // Queensland
		2316596, // South Australia
		2369652, // Tasmania
		2316741, // Victoria
		2316598, // Western Australia
  ];
}