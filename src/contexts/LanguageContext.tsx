import { createContext, useState } from 'react'
import { texts } from '../data/texts'
import type { Language } from '../data/texts'

export type LanguageContextProps = {
  language: Language,
  setLanguage: (language: Language) => void,
  text: typeof texts.en
}

export type ProviderProps = {
  children: React.ReactNode
}

export const LanguageContext = createContext<LanguageContextProps>({
  language: 'en',
  setLanguage: () => {},
  text: texts.en
})

export const LanguageContextProvider = ({ children }: ProviderProps) => {
  const [language, setLanguage] = useState<Language>('en')

  return (
    <LanguageContext.Provider value={{ language, setLanguage, text: texts[language] }}>
      {children}
    </LanguageContext.Provider>
  )
}
