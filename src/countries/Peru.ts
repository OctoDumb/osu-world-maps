import Country from "../Country";

export default class Peru extends Country {
  code = "PE";

  center: [number, number] = [-9.2, -74.5];
  zoom = 6;

  regions = [
		1973462, // Amazonas
		1953170, // Ancash
		1929522, // Apurímac
		1879287, // Arequipa
		1930901, // Ayacucho
		1896111, // Cajamarca
		1944657, // Constitutional Province of Callao
		1923695, // Cusco
		1933551, // Huancavelica
		1954493, // Huánuco
		1899013, // Ica
		1948258, // Junín
		1967959, // La Libertad
		1969722, // Lambayeque
		1944659, // Lima
		1994077, // Loreto
		1891287, // Madre de Dios
		1875889, // Moquegua
		1948452, // Pasco
		1986151, // Piura
		1907899, // Puno
		1971661, // San Martín
		1874307, // Tacna
		1986974, // Tumbes
		1921996, // Ucayali
  ];
}