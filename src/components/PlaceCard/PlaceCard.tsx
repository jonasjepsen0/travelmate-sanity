import { PlaceCardStyled } from './PlaceCard.styled'

type PlaceCardProps = {
  navn: string
  billede: string
}

export const PlaceCard = ({ navn, billede }: PlaceCardProps) => {
  return (
    <PlaceCardStyled>
      <div className="image">
        <img src={billede} alt={navn} />
        <span className="heart">♡</span>
      </div>

      <div className="content">
        <h3>{navn}</h3>
      </div>
    </PlaceCardStyled>
  )
}