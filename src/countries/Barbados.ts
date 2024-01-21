import Country from "../Country";

export default class Barbados extends Country {
  code = "BB";

  center: [number, number] = [13.2, -59.6];
  zoom = 11;

  regions = [
    3961378, // Christ Church
    3961379, // Saint Andrew
    3961988, // Saint George 
    3961380, // Saint James
    3961381, // Saint John
    3961382, // Saint Joseph
    3961383, // Saint Lucy
    3961384, // Saint Michael
    3961385, // Saint Peter
    3961386, // Saint Philip
    3961387, // Saint Thomas
  ];
}

