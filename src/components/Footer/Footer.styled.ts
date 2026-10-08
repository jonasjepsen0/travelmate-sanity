import styled from 'styled-components'

export const FooterStyled = styled.footer`
  background-color: ${({ theme }) => theme.colors.surface};
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  .inner {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    max-width: ${({ theme }) => theme.maxWidth};
    margin: 0 auto;
    padding: 1.5rem 2rem;
  }

  .logo {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSizes.l};
    font-weight: 700;
  }

  .logo span {
    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSizes.s};
    color: ${({ theme }) => theme.colors.textMuted};
  }
`
