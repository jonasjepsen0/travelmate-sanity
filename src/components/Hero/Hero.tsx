import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LanguageContext } from '../../contexts/LanguageContext'
import type { LanguageContextProps } from '../../contexts/LanguageContext'
import { HeroStyled } from './Hero.styled'

export const Hero = () => {
  const { text } = useContext<LanguageContextProps>(LanguageContext)
  const [keyword, setKeyword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    navigate(`/search?keyword=${encodeURIComponent(keyword.trim())}`)
  }

  return (
    <HeroStyled>
      <div className="inner">
        <h1>{text.heroTitle}</h1>
        <p>{text.heroText}</p>

        <form className="search" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder={text.searchPlaceholder}
            value={keyword}
            onChange={(event) => setKeyword(event.target.value)}
          />
          <button type="submit">{text.search}</button>
        </form>
      </div>
    </HeroStyled>
  )
}
