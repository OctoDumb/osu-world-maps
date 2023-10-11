import Country from "../Country";
import EraseModifier from "../modifiers/erase";
import JoinModifier from "../modifiers/join";

export default class UnitedKingdom extends Country {
  code = "UK";

  center: [number, number] = [0, 0];
  zoom = 0;

  regions = [
    88082, // Bedfordshire
    88070, // Berkshire
    5746665, // Bristol
    87460, // Buckinghamshire
    87521, // Cambridgeshire
    57512, // Cheshire
    57537, // Cornwall
    88065, // Cumbria
    88077, // Derbyshire
    57538, // Devon
    2698375, // Dorset
    new EraseModifier(
      new JoinModifier([
        88067,
        153377,
        153375,
        150994,
      ]),
      3123501
    ), // Durham
    new JoinModifier([88083, 60148]), // East Riding of Yorkshire
    2126747, // East Sussex
    62162, // Essex
    new JoinModifier([85103, 82631]), // Gloucestershire
    175342, // Greater London
    88084, // Greater Manchester
    2698314, // Hampshire
    10187, // Herefordshire
    57032, // Hertfordshire
    154350, // Isle of Wight
    88071, // Kent
    118082, // Lancashire
    78309, // Leicestershire
    1916530, // Lincolnshire
    147564, // Merseyside
    57397, // Norfolk
    3123501, // North Yorkshire
    63375, // Northamptonshire
    88066, // Northumberland
    77268, // Nottinghamshire
    76155, // Oxfordshire
    57398, // Rutland
    57511, // Shropshire
    3125930, // Somerset
    88078, // South Yorkshire
    57515, // Staffordshire
    28595, // Suffolk
    57582, // Surrey
    154376, // Tyne and Wear
    57516, // Warwickshire
    57517, // West Midlands
    113757, // West Sussex
    88079, // West Yorkshire
    new JoinModifier([57533, 110212]), // Wiltshire
    57581, // Worcestershire
  ]
}