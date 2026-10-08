import styled from 'styled-components'

export const LanguageSelectStyled = styled.select`
  margin-left: auto;
  padding: 0.5rem 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.s};
  background-color: ${({ theme }) => theme.colors.primaryLight};
  font-family: inherit;
  font-size: ${({ theme }) => theme.fontSizes.s};
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
`
