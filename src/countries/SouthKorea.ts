import Country from "../Country";

export default class SouthKorea extends Country {
  code = "KR";

  center: [number, number] = [36.3, 127.5];
  zoom = 8;

  regions = [
    2396450, // Busan
    2395674, // Daegu
    2349984, // Daejeon
    2308426, // Gangwon State
    2399220, // Gwangju
    2306392, // Gyeonggi
    2297419, // Incheon
    2398560, // Jeju
    2327258, // North Chungcheong
    2304454, // North Gyeongsang
    2355168, // North Jeolla
    2349795, // Sejong
    2297418, // Seoul
    2327259, // South Chungcheong
    2393403, // South Gyeongsang
    2398104, // South Jeolla
    2395867, // Ulsan
  ];
}