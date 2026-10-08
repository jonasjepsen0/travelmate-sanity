import { useContext } from 'react'
import type { ChangeEvent } from 'react'
import { LanguageContext } from '../../contexts/LanguageContext'
import type { LanguageContextProps } from '../../contexts/LanguageContext'
import type { Language } from '../../data/texts'
import { LanguageSelectStyled } from './LanguageSelect.styled'

export const LanguageSelect = () => {
  const { language, setLanguage } = useContext<LanguageContextProps>(LanguageContext)

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value as Language)
  }

  return (
    <LanguageSelectStyled value={language} onChange={handleChange}>
      <option value="da">DA</option>
      <option value="en">EN</option>
    </LanguageSelectStyled>
  )
}
