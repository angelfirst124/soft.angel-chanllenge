export type ILocation = {
  id: ID
  name: string
  type: string
  dimension: string
  residents: [Character]!
  created: string
}

export type ILocationTable = {
  key: React.Key;
  name: string;
  type: string;
  dimension: string;
  created: Date;
}
