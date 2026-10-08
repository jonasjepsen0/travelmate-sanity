import { createContext, useContext } from 'react'
import type { City } from '../types/city.types'
import type { SanityQueryResponse } from '../types/api.types'
import { LanguageContext } from '../contexts/LanguageContext'
import type { LanguageContextProps, ProviderProps } from '../contexts/LanguageContext'
import { useFetch } from './useFetch'
import { SANITY_URL } from '../data/api'

type CityContextProps = {
  cities: City[]
  error: string | null
}

const query = '*[_type == "city"]{ _id, slug, "billede": coalesce(billede.asset->url, ""), "info": coalesce(*[_type == "cityInfo" && city._ref == ^._id && language->kode == $language][0]{ navn, beskrivelse }, { "navn": "", "beskrivelse": "" }) }'

export const CityContext = createContext<CityContextProps | undefined>(undefined)

export const CityContextProvider = ({ children }: ProviderProps) => {
  const { language } = useContext<LanguageContextProps>(LanguageContext)
  const url = `${SANITY_URL}?query=${encodeURIComponent(query)}&$language=${encodeURIComponent(JSON.stringify(language))}`
  const { data, error } = useFetch<SanityQueryResponse<City>>(url)

  return (
    <CityContext.Provider value={{ cities: data?.result ?? [], error }}>
      {children}
    </CityContext.Provider>
  )
}

export const useCities = () => {
  const context = useContext(CityContext)

  if (!context) {
    throw new Error('useCities kan kun bruges inde i en CityContextProvider')
  }

  return context
}
