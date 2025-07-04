import Country from "../Country";

export default class Vietnam extends Country {
  code = "VN";

  center: [number, number] = [15.6, 106.1];
  zoom = 6;

  regions = [
    1875748, // An Giang Province
    1902690, // Bắc Ninh province
    1844412, // Cao Bằng Province
    1873490, // Cà Mau Province
    1874283, // Cần Thơ
    1884018, // Gia Lai Province
    1903516, // Hà Nội
    1898458, // Hà Tĩnh Province
    1901032, // Hưng Yên Province
    1902682, // Hải Phòng
    1973756, // Hồ Chí Minh City
    1887959, // Khánh Hòa Province
    1903322, // Lai Châu Province
    1903400, // Lào Cai Province
    1885367, // Lâm Đồng Province
    5522596, // Lạng Sơn Province
    1898509, // Nghệ An Province
    1900963, // Ninh Bình Province
    1902930, // Phú Thọ Province
    1890793, // Quảng Ngãi Province
    1902947, // Quảng Ninh Province
    1895630, // Quảng Trị Province
    1903291, // Sơn La Province
    1898590, // Thanh Hoá Province
    1902967, // Thái Nguyên Province
    1891483, // Huế
    1903418, // Tuyên Quang Province
    1898961, // Tây Ninh Province
    1875887, // Vĩnh Long Province
    1903340, // Điện Biên Province
    1891418, // Đà Nẵng
    1884034, // Đăk Lăk Province
    1904421, // Đồng Nai Province
    1875866, // Đồng Tháp Province
  ];
}