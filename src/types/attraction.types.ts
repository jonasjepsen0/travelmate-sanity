export type AttractionInfo = {
  navn: string
  beskrivelse: string
}

export type Attraction = {
  _id: string
  adresse: string
  slug: {
    current: string
  }
  billede: string
  info: AttractionInfo
}
