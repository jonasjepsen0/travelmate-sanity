import { Link } from 'react-router-dom'
import { CityCardStyled } from './CityCard.styled'

type CityCardProps = {
  _id: string
  navn: string
  billede: string
}

export const CityCard = ({ _id, navn, billede }: CityCardProps) => {
  return (
    <CityCardStyled>
      <Link to={`/cities/${_id}`}>
        <img src={billede} alt={navn} />

        <div className="content">
          <h3>{navn}</h3>
          <span className="arrow">›</span>
        </div>
      </Link>
    </CityCardStyled>
  )
}
