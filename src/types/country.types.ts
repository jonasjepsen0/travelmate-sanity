export type CountryInfo = {
  navn: string
  beskrivelse: string
}

export type Country = {
  _id: string
  landekode: string
  slug: {
    current: string
  }
  billede: string
  info: CountryInfo
}
