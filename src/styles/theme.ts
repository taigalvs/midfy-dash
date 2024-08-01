import { createTheme } from '@mui/material'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#8b5cf6'
    },
    secondary: {
      main: '#c2b5f0'
    },
    error: {
      main: '#f44336'
    }
  },
  typography: {
    fontFamily: '"Roboto", sans-serif',
    h6: {
      color: '#3d3d3d'
    },
    body2: {
      color: '#3d3d3d'
    },
    body1: {
      color: '#3d3d3d'
    }
  }
})
