import styled from 'styled-components'

export const HeaderStyled = styled.header`
  background-color: ${({ theme }) => theme.colors.surface};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  .inner {
    display: flex;
    align-items: center;
    gap: 2rem;
    max-width: ${({ theme }) => theme.maxWidth};
    margin: 0 auto;
    padding: 1rem 2rem;
  }

  .logo {
    font-size: ${({ theme }) => theme.fontSizes.l};
    font-weight: 700;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
  }

  .logo span {
    color: ${({ theme }) => theme.colors.primary};
  }

  nav {
    display: flex;
    gap: 1.5rem;
  }

  nav a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
  }

  nav a.active {
    color: ${({ theme }) => theme.colors.primary};
  }
`
