export type Feature = {
  type: "Feature",
  geometry: any,
  properties: {
    name: string,
    nominatim: number,
    id: string,
    users: number,
  },
};

export default class Nominatim {
  constructor(private id: number, private data: any) {}

  public toFeature(): Feature {
    return {
      type: "Feature",
      geometry: this.data.geometry,
      properties: {
        name: this.data.names['name:en'] ?? this.data.names['name'] ?? this.data.official_name ?? this.data.localname,
        // IDs are required for mapshaper
        // Can be handled better
        nominatim: this.id,
        id: this.data.names["ISO3166-2"] ?? "id",
        users: 0,
      },
    };
  }
}
