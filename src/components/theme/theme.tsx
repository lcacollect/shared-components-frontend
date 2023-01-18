import { createTheme } from '@mui/material/styles'
import '@fontsource/roboto'
declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: React.CSSProperties['color']
    }
  }

  interface Palette {
    neutral: Palette['primary']
  }
  interface PaletteOptions {
    neutral: PaletteOptions['primary']
  }

  interface PaletteColor {
    darker?: string
  }
  interface SimplePaletteColorOptions {
    darker?: string
  }
  interface BreakpointOverrides {
    xs: true
    sm: true
    md: true
    lg: true
    xl: true
    xxl: true
  }
}
export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      xxl: 1872,
    },
  },
  palette: {
    common: {
      black: '#000000',
      white: '#FFFFFF',
    },
    primary: {
      main: '#97A6B4',
      dark: '#627688',
    },
    grey: {
      50: '#F7F7F6',
      100: '#BDBDBD',
      200: '#707070',
    },
    error: {
      main: '#E06763',
    },
    warning: {
      main: '#FEA763',
    },
    success: {
      main: '#6C8E85',
    },
    background: {
      default: '#F7F7F6',
      paper: '#FFFFFF',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
  typography: {
    fontFamily: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(','),
    h1: {
      fontWeight: 'bold',
      fontSize: '2rem',
    },
    h3: {
      fontWeight: 'medium',
      fontSize: '1.3rem',
    },
  },
})
