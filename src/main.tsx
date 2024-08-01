import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import 'react-toastify/dist/ReactToastify.css'
import { createTheme } from '@mui/material'
import { ThemeProvider } from '@emotion/react'
import { ToastContainer } from 'react-toastify'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './query-client'

const theme = createTheme({})
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
      <ToastContainer position='top-right' closeOnClick pauseOnFocusLoss draggable theme='colored' pauseOnHover />
    </QueryClientProvider>
  </React.StrictMode>
)
