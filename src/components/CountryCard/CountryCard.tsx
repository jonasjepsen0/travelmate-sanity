import { CountryCardStyled } from './CountryCard.styled'

type CountryCardProps = {
  navn: string
  beskrivelse: string
  billede: string
}

export const CountryCard = ({ navn, beskrivelse, billede }: CountryCardProps) => {
  return (
    <CountryCardStyled>
        <img src={billede} alt={navn} />

        <div className="content">
          <h3>{navn}</h3>
          <p>{beskrivelse}</p>
        </div>
    </CountryCardStyled>
  )
}
