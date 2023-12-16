import Country from "../Country";

export default class Venezuela extends Country {
  code = "VE";

  center: [number, number] = [6.7, -66.7];
  zoom = 7;

  regions = [
    2269815, // Amazonas
    2267150, // Anzoátegui
    3395162, // Apure
    272746,  // Aragua
    3763132, // Barinas
    2269155, // Bolívar
    272745,  // Carabobo
    272662,  // Cojedes
    272669,  // Delta Amacuro
    3399075, // Dependencias Federales
    2444378, // Distrito Capital
    2269792, // Falcón
    272663,  // Guárico
    2442704, // La Guaira
    272744,  // Lara
    272635,  // Mérida
    272673,  // Miranda
    272670,  // Monagas
    2269770, // Nueva Esparta
    272661,  // Portuguesa
    272671,  // Sucre
    272633,  // Táchira
    272634,  // Trujillo
    272743,  // Yaracuy
    272632,  // Zulia
  ];
}