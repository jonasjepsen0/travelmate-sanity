import styled from 'styled-components'

export const SectionStyled = styled.section`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 1.5rem 2rem;

  .head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
  }

  h2 {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }

  a {
    font-weight: 600;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1rem;
  }
`
