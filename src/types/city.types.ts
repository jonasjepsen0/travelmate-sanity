export type CityInfo = {
  navn: string
  beskrivelse: string
}

export type City = {
  _id: string
  slug: {
    current: string
  }
  billede: string
  info: CityInfo
}
