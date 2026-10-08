import styled from 'styled-components'

export const CityCardStyled = styled.article`
  max-width: 280px;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radius.m};
  background-color: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadow};

  a {
    display: block;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
  }

  img {
    display: block;
    width: 100%;
    height: 160px;
    object-fit: cover;
  }

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
  }

  h3 {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSizes.m};
  }

  .arrow {
    font-size: ${({ theme }) => theme.fontSizes.l};
    color: ${({ theme }) => theme.colors.textMuted};
  }
`
