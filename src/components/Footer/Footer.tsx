import { useContext } from 'react'
import { LanguageContext } from '../../contexts/LanguageContext'
import type { LanguageContextProps } from '../../contexts/LanguageContext'
import { FooterStyled } from './Footer.styled'

export const Footer = () => {
  const { text } = useContext<LanguageContextProps>(LanguageContext)

  return (
    <FooterStyled>
      <div className="inner">
        <p className="logo">Travel<span>Mate</span></p>
        <p>{text.tagline}</p>
      </div>
    </FooterStyled>
  )
}
