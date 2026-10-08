import { useContext } from 'react'
import { LanguageContext } from '../contexts/LanguageContext'
import type { LanguageContextProps } from '../contexts/LanguageContext'
import { useAttractions } from '../hooks/useAttractions'
import { PlaceCard } from '../components/PlaceCard/PlaceCard'
import { PageStyled } from '../styled/Page.styled'

export const Places = () => {
  const { text } = useContext<LanguageContextProps>(LanguageContext)
  const { attractions } = useAttractions()

  return (
    <PageStyled>
      <h1>{text.places}</h1>

      <div className="cards">
        {attractions.map((attraction) => (
          <PlaceCard key={attraction._id} navn={attraction.info.navn} billede={attraction.billede} />
        ))}
      </div>
    </PageStyled>
  )
}
