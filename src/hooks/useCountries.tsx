import { createContext, useContext } from 'react'
import type { Country } from '../types/country.types'
import type { SanityQueryResponse } from '../types/api.types'
import { LanguageContext } from '../contexts/LanguageContext'
import type { LanguageContextProps, ProviderProps } from '../contexts/LanguageContext'
import { useFetch } from './useFetch'
import { SANITY_URL } from '../data/api'

type CountryContextProps = {
  countries: Country[]
  error: string | null
}

const query = '*[_type == "country"]{ _id, landekode, slug, "billede": coalesce(billede.asset->url, ""), "info": coalesce(*[_type == "countryInfo" && country._ref == ^._id && language->kode == $language][0]{ navn, beskrivelse }, { "navn": "", "beskrivelse": "" }) }'

export const CountryContext = createContext<CountryContextProps | undefined>(undefined)

export const CountryContextProvider = ({ children }: ProviderProps) => {
  const { language } = useContext<LanguageContextProps>(LanguageContext)
  const url = `${SANITY_URL}?query=${encodeURIComponent(query)}&$language=${encodeURIComponent(JSON.stringify(language))}`
  const { data, error } = useFetch<SanityQueryResponse<Country>>(url)

  return (
    <CountryContext.Provider value={{ countries: data?.result ?? [], error }}>
      {children}
    </CountryContext.Provider>
  )
}

export const useCountries = () => {
  const context = useContext(CountryContext)

  if (!context) {
    throw new Error('useCountries kan kun bruges inde i en CountryContextProvider')
  }

  return context
}
