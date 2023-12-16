import Country from "../Country";

export default class Serbia extends Country {
  code = "RS";

  center: [number, number] = [44.2, 20.7];
  zoom = 8;

  regions = [
    1677007, // Beograd
    1708277, // Borski okrug
    2109236, // Braničevski okrug
    2117027, // Jablanički okrug
    1649671, // Južnobački okrug
    1639496, // Južnobanatski okrug
    2107511, // Kolubarski okrug
    1765275, // Mačvanski okrug
    2114082, // Moravički okrug
    2117179, // Nišavski okrug
    2015385, // Pčinjski okrug
    2117003, // Pirotski okrug
    2107619, // Podunavski okrug
    2109306, // Pomoravski okrug
    2117182, // Rasinski okrug
    2116926, // Raški okrug
    1639630, // Severnobački okrug
    1639617, // Severnobanatski okrug
    1639821, // Srednjebanatski okrug
    1639341, // Sremski okrug
    2109264, // Šumadijski okrug
    2117109, // Toplički okrug
    2114083, // Zaječarski okrug
    1639908, // Zapadnobački okrug
    2114084, // Zlatiborski okrug
  ];
}