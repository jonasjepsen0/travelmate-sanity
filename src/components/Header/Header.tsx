import { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { LanguageContext } from '../../contexts/LanguageContext'
import type { LanguageContextProps } from '../../contexts/LanguageContext'
import { LanguageSelect } from '../LanguageSelect/LanguageSelect'
import { HeaderStyled } from './Header.styled'

export const Header = () => {
  const { text } = useContext<LanguageContextProps>(LanguageContext)

  return (
    <HeaderStyled>
      <div className="inner">
        <Link to="/" className="logo">
          Travel<span>Mate</span>
        </Link>

        <nav>
          <NavLink to="/">{text.home}</NavLink>
          <NavLink to="/countries">{text.countries}</NavLink>
          <NavLink to="/cities">{text.cities}</NavLink>
          <NavLink to="/places">{text.places}</NavLink>
          <NavLink to="/about">{text.about}</NavLink>
        </nav>

        <LanguageSelect />
      </div>
    </HeaderStyled>
  )
}
