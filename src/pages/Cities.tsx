import { useContext } from 'react'
import { LanguageContext } from '../contexts/LanguageContext'
import type { LanguageContextProps } from '../contexts/LanguageContext'
import { useCities } from '../hooks/useCities'
import { CityCard } from '../components/CityCard/CityCard'
import { PageStyled } from '../styled/Page.styled'

export const Cities = () => {
  const { text } = useContext<LanguageContextProps>(LanguageContext)
  const { cities } = useCities()

  return (
    <PageStyled>
      <h1>{text.cities}</h1>

      <div className="cards">
        {cities.map((city) => (
          <CityCard key={city._id} _id={city._id} navn={city.info.navn} billede={city.billede} />
        ))}
      </div>
    </PageStyled>
  )
}
