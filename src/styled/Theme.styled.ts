export const theme = {

  colors: {
    primary: '#1368e9',
    primaryLight: '#e6f0fc',
    text: '#0a2346',
    textMuted: '#5b6778',
    background: '#fafbfc',
    surface: '#ffffff',
    border: '#e8ebf0',
    white: '#ffffff',
    overlay: 'rgba(0, 0, 0, 0.35)'
  },

  fonts: {
    body: '"Inter", sans-serif'
  },

  fontSizes: {
    s: '0.875rem',
    m: '1rem',
    l: '1.25rem',
    xl: '1.75rem',
    xxl: '3rem'
  },

  radius: {
    s: '8px',
    m: '12px'
  },

  shadow: '0 2px 12px rgba(10, 35, 70, 0.08)',

  maxWidth: '1280px'

} as const

export type Theme = typeof theme
