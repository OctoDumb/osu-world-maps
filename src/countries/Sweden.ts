import Country from "../Country";

export default class Sweden extends Country {
  code = "SE";

  center: [number, number] = [63, 17];
  zoom = 5;

  regions = [
		54413, // Blekinge County
		52834, // Dalarna County
		941530, // Gotland County
		52832, // Gävleborg County
		54403, // Halland County
		52826, // Jämtland County
		54374, // Jönköping County
		54417, // Kalmar County
		54412, // Kronoberg County
		52824, // Norrbotten County
		54409, // Skåne County
		54391, // Stockholm County
		54386, // Södermanland County
		54220, // Uppsala County
		54223, // Värmland County
		52825, // Västerbotten County
		52827, // Västernorrland County
		54221, // Västmanland County
		54367, // Västra Götaland County
		54222, // Örebro County
		940675, // Östergötland County
  ];
}