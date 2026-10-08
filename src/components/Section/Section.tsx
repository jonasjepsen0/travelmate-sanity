import { Link } from 'react-router-dom'
import { SectionStyled } from './Section.styled'

type SectionProps = {
  title: string
  linkText: string
  linkTo: string
  children: React.ReactNode
}

export const Section = ({ title, linkText, linkTo, children }: SectionProps) => {
  return (
    <SectionStyled>
      <div className="head">
        <h2>{title}</h2>
        <Link to={linkTo}>{linkText} →</Link>
      </div>

      <div className="cards">{children}</div>
    </SectionStyled>
  )
}
