import { useContext } from 'react'
import { useSearchParams } from 'react-router-dom'
import { LanguageContext } from '../contexts/LanguageContext'
import type { LanguageContextProps } from '../contexts/LanguageContext'
import { useCountries } from '../hooks/useCountries'
import { useCities } from '../hooks/useCities'
import { useAttractions } from '../hooks/useAttractions'
import { Hero } from '../components/Hero/Hero'
import { CountryCard } from '../components/CountryCard/CountryCard'
import { CityCard } from '../components/CityCard/CityCard'
import { PlaceCard } from '../components/PlaceCard/PlaceCard'
import { PageStyled } from '../styled/Page.styled'

export const Search = () => {
  const { text } = useContext<LanguageContextProps>(LanguageContext)
  const [searchParams] = useSearchParams()
  const keyword = (searchParams.get('keyword') ?? '').trim()
  const searchTerm = keyword.toLocaleLowerCase('da')

  const { countries, error: countryError } = useCountries()
  const { cities, error: cityError } = useCities()
  const { attractions, error: attractionError } = useAttractions()

  const matches = (navn: string) => searchTerm !== '' && navn.toLocaleLowerCase('da').includes(searchTerm)

  const groups = [
    {
      path: 'countries',
      title: text.countries,
      error: countryError,
      cards: countries.filter((country) => matches(country.info.navn)).map((country) => (
        <CountryCard key={country._id} navn={country.info.navn} beskrivelse={country.info.beskrivelse} billede={country.billede} />
      ))
    },
    {
      path: 'cities',
      title: text.cities,
      error: cityError,
      cards: cities.filter((city) => matches(city.info.navn)).map((city) => (
        <CityCard key={city._id} _id={city._id} navn={city.info.navn} billede={city.billede} />
      ))
    },
    {
      path: 'places',
      title: text.places,
      error: attractionError,
      cards: attractions.filter((attraction) => matches(attraction.info.navn)).map((attraction) => (
        <PlaceCard key={attraction._id} navn={attraction.info.navn} billede={attraction.billede} />
      ))
    }
  ]

  const resultCount = groups.reduce((total, group) => total + group.cards.length, 0)

  return (
    <>
      <Hero />

      <PageStyled>
        <h1>{text.searchResults}</h1>

        {!keyword ? (
          <p>{text.searchEmpty}</p>
        ) : (
          <>
            <p>{text.searchFor} <i>{keyword}</i>: {resultCount} {text.resultsFound}</p>

            {groups.map((group) => (
              <section key={group.path} aria-labelledby={`search-${group.path}`}>
                <h2 id={`search-${group.path}`}>{group.title}</h2>

                {group.error ? (
                  <p role="alert">{text.fetchError}</p>
                ) : group.cards.length === 0 ? (
                  <p>{text.noResults}</p>
                ) : (
                  <div className="cards">{group.cards}</div>
                )}
              </section>
            ))}
          </>
        )}
      </PageStyled>
    </>
  )
}
