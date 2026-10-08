import styled from 'styled-components'

export const CountryCardStyled = styled.article`
  max-width: 280px;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radius.m};
  background-color: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadow};

  img {
    display: block;
    width: 100%;
    height: 160px;
    object-fit: cover;
  }

  .content {
    padding: 1rem;
  }

  h3 {
    margin: 0 0 0.25rem;
    font-size: ${({ theme }) => theme.fontSizes.m};
  }

  p {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSizes.s};
    color: ${({ theme }) => theme.colors.textMuted};
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`
