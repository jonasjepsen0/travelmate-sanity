import { useContext } from 'react'
import { LanguageContext } from '../contexts/LanguageContext'
import type { LanguageContextProps } from '../contexts/LanguageContext'
import { useCountries } from '../hooks/useCountries'
import { CountryCard } from '../components/CountryCard/CountryCard'
import { PageStyled } from '../styled/Page.styled'

export const Countries = () => {
  const { text } = useContext<LanguageContextProps>(LanguageContext)
  const { countries } = useCountries()

  return (
    <PageStyled>
      <h1>{text.countries}</h1>

      <div className="cards">
        {countries.map((country) => (
          <CountryCard key={country._id} navn={country.info.navn} beskrivelse={country.info.beskrivelse} billede={country.billede} />
        ))}
      </div>
    </PageStyled>
  )
}
