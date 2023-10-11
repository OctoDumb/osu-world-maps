import Country from "../Country";

export default class Brazil extends Country {
  code = "BR";

  center: [number, number] = [-14.3, -53];
  zoom = 5;

  regions = [
		326266, // Acre
		303781, // Alagoas
		331463, // Amapá
		332476, // Amazonas
		362413, // Bahia
		302635, // Ceará
		54882, // Espírito Santo
		421151, // Federal District
		334443, // Goiás
		332924, // Maranhão
		334051, // Mato Grosso do Sul
		333597, // Mato Grosso
		315173, // Minas Gerais
		297640, // Paraná
		301464, // Paraíba
		185579, // Pará
		303702, // Pernambuco
		302819, // Piauí
		57963, // Rio de Janeiro
		301079, // Rio Grande do Norte
		242620, // Rio Grande do Sul
		325866, // Rondônia
		326287, // Roraima
		296584, // Santa Catarina
		303940, // Sergipe
		298204, // São Paulo
		336819, // Tocantins
  ];
}