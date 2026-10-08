import styled from 'styled-components'
import heroImage from '../../assets/images/hero.png'

export const HeroStyled = styled.section`
  background-image: url(${heroImage});
  background-size: cover;
  background-position: center;

  .inner {
    max-width: ${({ theme }) => theme.maxWidth};
    margin: 0 auto;
    padding: 4rem 2rem;
  }

  h1 {
    max-width: 520px;
    margin: 0 0 1rem;
    font-size: ${({ theme }) => theme.fontSizes.xxl};
    line-height: 1.1;
  }

  p {
    max-width: 420px;
    margin: 0 0 1.5rem;
  }

  .search {
    display: flex;
    max-width: 560px;
    padding: 0.4rem;
    border-radius: ${({ theme }) => theme.radius.s};
    background-color: ${({ theme }) => theme.colors.surface};
    box-shadow: ${({ theme }) => theme.shadow};
  }

  input {
    flex: 1;
    padding: 0.6rem 0.75rem;
    border: none;
    font-family: inherit;
    font-size: ${({ theme }) => theme.fontSizes.m};
  }

  button {
    padding: 0.6rem 1.5rem;
    border: none;
    border-radius: ${({ theme }) => theme.radius.s};
    background-color: ${({ theme }) => theme.colors.primary};
    font-family: inherit;
    font-size: ${({ theme }) => theme.fontSizes.m};
    font-weight: 600;
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
  }
`
