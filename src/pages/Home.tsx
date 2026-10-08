import { useContext } from 'react'
import { LanguageContext } from '../contexts/LanguageContext'
import type { LanguageContextProps } from '../contexts/LanguageContext'
import { Hero } from '../components/Hero/Hero'
import { Section } from '../components/Section/Section'
import { CountryCard } from '../components/CountryCard/CountryCard'
import { CityCard } from '../components/CityCard/CityCard'
import { PlaceCard } from '../components/PlaceCard/PlaceCard'
import { useCountries } from '../hooks/useCountries'
import { useCities } from '../hooks/useCities'
import { useAttractions } from '../hooks/useAttractions'

export const Home = () => {
  const { text } = useContext<LanguageContextProps>(LanguageContext)

  const { countries } = useCountries()
  const { cities } = useCities()
  const { attractions } = useAttractions()

  return (
    <div>
      <Hero />

      <Section title={text.popularCountries} linkText={text.viewAllCountries} linkTo="/countries">
        {countries.slice(0, 5).map((country) => (
          <CountryCard key={country._id} navn={country.info.navn} beskrivelse={country.info.beskrivelse} billede={country.billede} />
        ))}
      </Section>

      <Section title={text.popularCities} linkText={text.viewAllCities} linkTo="/cities">
        {cities.slice(0, 5).map((city) => (
          <CityCard key={city._id} _id={city._id} navn={city.info.navn} billede={city.billede} />
        ))}
      </Section>

      <Section title={text.featuredPlaces} linkText={text.viewAllPlaces} linkTo="/places">
        {attractions.slice(0, 5).map((attraction) => (
          <PlaceCard key={attraction._id} navn={attraction.info.navn} billede={attraction.billede} />
        ))}
      </Section>
    </div>
  )
}
