import { useContext } from 'react'
import { LanguageContext } from '../contexts/LanguageContext'
import type { LanguageContextProps } from '../contexts/LanguageContext'

export const CityDetails = () => {
  const { text } = useContext<LanguageContextProps>(LanguageContext)

  return <h1>{text.cityDetails}</h1>
}
