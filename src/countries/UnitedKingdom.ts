import Country from "../Country";
import CustomIdModifier from "../modifiers/CustomIdModifier";
import CustomNameModifier from "../modifiers/CustomNameModifier";
import EraseModifier from "../modifiers/EraseModifier";
import JoinModifier from "../modifiers/JoinModifier";

export default class UnitedKingdom extends Country {
  code = "GB";

  center: [number, number] = [55.4, -3.9];
  zoom = 6;

  regions = [
    /* England */

    new CustomIdModifier(88082, "GB-BDF"), // Bedfordshire
    new CustomIdModifier(88070, "GB-BRK"), // Berkshire
    new CustomIdModifier(5746665, "GB-BST"), // Bristol
    new CustomIdModifier(87460, "GB-BKM"), // Buckinghamshire
    new CustomIdModifier(87521, "GB-CAM"), // Cambridgeshire
    new CustomIdModifier(57512, "GB-CHS"), // Cheshire
    57537, // Cornwall
    88065, // Cumbria
    new CustomIdModifier(88077, "GB-DBY"), // Derbyshire
    new CustomIdModifier(57538, "GB-DEV"), // Devon
    new CustomIdModifier(2698375, "GB-DOR"), // Dorset
    new CustomNameModifier(
      new EraseModifier(
        new JoinModifier([
          88067,
          153377,
          153375,
          150994,
        ]),
        3123501
      ),
      "Durham"
    ),
    new JoinModifier([88083, 60148]), // East Riding of Yorkshire
    new CustomIdModifier(2126747, "GB-ESX"), // East Sussex
    new CustomIdModifier(62162, "GB-ESS"), // Essex
    new JoinModifier([85103, 82631]), // Gloucestershire
    new CustomIdModifier(175342, "GB-LND"), // Greater London
    new CustomIdModifier(88084, "GB-MAN"), // Greater Manchester
    new CustomIdModifier(2698314, "GB-HAM"), // Hampshire
    10187, // Herefordshire
    57032, // Hertfordshire
    154350, // Isle of Wight
    new CustomIdModifier(88071, "GB-KEN"), // Kent
    new CustomIdModifier(118082, "GB-LAN"), // Lancashire
    new CustomIdModifier(78309, "GB-LEC"), // Leicestershire
    new CustomIdModifier(1916530, "GB-LIN"), // Lincolnshire
    new CustomIdModifier(147564, "GB-MRS"), // Merseyside
    57397, // Norfolk
    new CustomIdModifier(3123501, "GB-NYK"), // North Yorkshire
    63375, // Northamptonshire
    88066, // Northumberland
    new CustomIdModifier(77268, "GB-NTT"), // Nottinghamshire
    76155, // Oxfordshire
    57398, // Rutland
    new CustomNameModifier(
      new CustomIdModifier(57511, "GB-SHR"),
      "Shropshire"
    ),
    new CustomIdModifier(3125930, "GB-SOM"), // Somerset
    new CustomIdModifier(88078, "GB-SYK"), // South Yorkshire
    new CustomIdModifier(57515, "GB-STS"), // Staffordshire
    28595, // Suffolk
    57582, // Surrey
    new CustomIdModifier(154376, "GB-TYW"), // Tyne and Wear
    57516, // Warwickshire
    new CustomIdModifier(57517, "GB-WML"), // West Midlands
    113757, // West Sussex
    new CustomIdModifier(88079, "GB-WYS"), // West Yorkshire
    new JoinModifier([57533, 110212]), // Wiltshire
    57581, // Worcestershire

    /* Scotland */

    new CustomNameModifier(
      new CustomIdModifier(
        new JoinModifier([
          1433249, // Highland
          1959008, // Western Isles
          1775685, // Argyll and Bute
          1905258, // Stirling
        ]),
        "GB-SCNW"
      ),
      "North West of Scotland"
    ),

    new CustomNameModifier(
      new CustomIdModifier(
        new JoinModifier([
          1905841, // Fife
          1921173, // Dundee City
          1921172, // Angus
          1900655, // Aberdeenshire
          1900654, // Aberdeen City
          1775792, // Moray
          1915429, // Perth and Kinross
          375982, // Orkney Islands
          2235077, // Shetland
        ]),
        "GB-SCNE"
      ),
      "North East of Scotland"
    ),

    new CustomNameModifier(
      new CustomIdModifier(
        new JoinModifier([
          1921239, // Inverclyde
          1921240, // Renfrewshire
          1920242, // West Dunbartonshire
          1920660, // East Dunbartonshire
          1906767, // Glasgow City
          1921238, // East Renfrewshire
          1920584, // North Lanarkshire
          1910014, // North Ayrshire
          1920348, // East Ayrshire
          1920349, // South Ayrshire
          1877232, // Dumfries and Galloway
        ]),
        "GB-SCSW"
      ),
      "South West of Scotland"
    ),

    new CustomNameModifier(
      new CustomIdModifier(
        new JoinModifier([
          1920842, // Falkirk
          1910704, // West Lothian
          1920901, // City of Edinburgh
          1920903, // Midlothian
          1920902, // East Lothian
          1920841, // Clackmannanshire
          1921241, // South Lanarkshire
          1919950, // Scottish Borders
        ]),
        "GB-SCSE"
      ),
      "South East of Scotland"
    ),

    /* Wales */

    new CustomNameModifier(
      new CustomIdModifier(
        new JoinModifier([
          358021, // Monmouthshire
          2750598, // Blaenau Gwent
          2750677, // Caerphilly
          335184, // Newport
          2750460, // Torfaen
        ]),
        "GB-GWN"
      ),
      "Gwent"
    ),

    new CustomNameModifier(
      new CustomIdModifier(
        new JoinModifier([
          1625787, // Cardiff
          103776, // Vale of Glamorgan
        ]),
        "GB-SGL"
      ),
      "South Glamorgan"
    ),

    new CustomNameModifier(
      new CustomIdModifier(
        new JoinModifier([
          99774, // Bridgend
          2751428, // Rhondda Cynon Taff
          2750939, // Merthyr Tydfil
        ]),
        "GB-MGL"
      ),
      "Mid Glamorgan"
    ),

    new CustomNameModifier(
      new CustomIdModifier(
        new JoinModifier([
          89846, // Neath Port Talbot
          87944, // Swansea
        ]),
        "GB-WGL"
      ),
      "West Glamorgan"
    ),

    new CustomNameModifier(
      new CustomIdModifier(
        new JoinModifier([
          77904, // Ceredigion
          57534, // Carmarthenshire
          57535, // Pembrokeshire
        ]),
        "GB-DYF"
      ),
      "Dyfed"
    ),

    134324, // 6. Powys

    new CustomNameModifier(
      new CustomIdModifier(
        new JoinModifier([
          297286, // Gwynedd
          298793, // Isle of Anglesey
        ]),
        "GB-GWY"
      ),
      "Gwynedd"
    ),

    new CustomNameModifier(
      new CustomIdModifier(
        new JoinModifier([
          297287, // Conwy
          192442, // Denbighshire
          198566, // Flintshire
          137981, // Wrexham
        ]),
        "GB-CLW"
      ),
      "Clwyd"
    ),

    /* Northern Ireland */

    156393,
  ]
}
