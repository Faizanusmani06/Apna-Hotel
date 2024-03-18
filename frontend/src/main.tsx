import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { AppContextProvider } from './contexts/AppContext.tsx'


const queryClient = new QueryClient ({
  defaultOptions : {
    queries : {
      retry : 0, //no retry in case of error
    }
  }
})


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client = {queryClient}>
      <AppContextProvider>
        <App />
      </AppContextProvider>
      
    </QueryClientProvider>
    
  </React.StrictMode>,
)
