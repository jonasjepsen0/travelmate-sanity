import styled from 'styled-components'

export const PageStyled = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 1.5rem 2rem;

  h1 {
    margin: 0 0 1rem;
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1rem;
  }
`
