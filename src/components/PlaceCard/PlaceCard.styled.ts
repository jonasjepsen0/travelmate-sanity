import styled from 'styled-components'

export const PlaceCardStyled = styled.article`
  max-width: 280px;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radius.m};
  background-color: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadow};

  .image {
    position: relative;
  }

  img {
    display: block;
    width: 100%;
    height: 160px;
    object-fit: cover;
  }

  .heart {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    padding: 0.25rem 0.5rem;
    border-radius: ${({ theme }) => theme.radius.s};
    background-color: ${({ theme }) => theme.colors.overlay};
    font-size: ${({ theme }) => theme.fontSizes.l};
    line-height: 1;
    color: ${({ theme }) => theme.colors.white};
  }

  .content {
    padding: 1rem;
  }

  h3 {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSizes.m};
  }
`
