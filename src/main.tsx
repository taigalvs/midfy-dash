import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/index.css'
import 'react-toastify/dist/ReactToastify.css'
import { ThemeProvider } from '@emotion/react'
import { ToastContainer } from 'react-toastify'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './query-client'
import { theme } from './styles/theme.ts'

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
