import 'styled-components'
import type { theme } from './Theme.styled'

type ThemeType = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
