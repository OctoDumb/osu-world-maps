import Country from "../Country";

export default class Jamaica extends Country {
  code = "JM";

  center: [number, number] = [17.9, -77.4];  
  zoom = 9;

  regions = [
    6577227, // Kingston Parish
    6577862, // Saint Andrew Parish
    319362, // Saint Thomas Parish 
    319344, // Portland Parish
    319343, // Saint Mary Parish
    319340, // Saint Ann Parish
    319341, // Trelawny Parish
    319345, // Saint James Parish
    319347, // Hanover Parish
    319351, // Westmoreland Parish
    319352, // Saint Elizabeth Parish
    1637038, // Manchester Parish
    1637035, // Clarendon Parish
    1637037, // Saint Catherine Parish
  ];
}