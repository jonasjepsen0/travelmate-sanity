import { createContext, useContext } from 'react'
import type { Attraction } from '../types/attraction.types'
import type { SanityQueryResponse } from '../types/api.types'
import { LanguageContext } from '../contexts/LanguageContext'
import type { LanguageContextProps, ProviderProps } from '../contexts/LanguageContext'
import { useFetch } from './useFetch'
import { SANITY_URL } from '../data/api'

type AttractionContextProps = {
  attractions: Attraction[]
  error: string | null
}

const query = '*[_type == "attraction"]{ _id, adresse, slug, "billede": coalesce(billede.asset->url, ""), "info": coalesce(*[_type == "attractionInfo" && attraction._ref == ^._id && language->kode == $language][0]{ navn, beskrivelse }, { "navn": "", "beskrivelse": "" }) }'

export const AttractionContext = createContext<AttractionContextProps | undefined>(undefined)

export const AttractionContextProvider = ({ children }: ProviderProps) => {
  const { language } = useContext<LanguageContextProps>(LanguageContext)
  const url = `${SANITY_URL}?query=${encodeURIComponent(query)}&$language=${encodeURIComponent(JSON.stringify(language))}`
  const { data, error } = useFetch<SanityQueryResponse<Attraction>>(url)

  return (
    <AttractionContext.Provider value={{ attractions: data?.result ?? [], error }}>
      {children}
    </AttractionContext.Provider>
  )
}

export const useAttractions = () => {
  const context = useContext(AttractionContext)

  if (!context) {
    throw new Error('useAttractions kan kun bruges inde i en AttractionContextProvider')
  }

  return context
}
