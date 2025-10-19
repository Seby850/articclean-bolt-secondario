import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.tsx'

const loadAppStyles = () => import('./index.css')

if (typeof window !== 'undefined') {
  const { requestIdleCallback } = window as typeof window & {
    requestIdleCallback?: (callback: () => void) => number
  }

  if (typeof requestIdleCallback === 'function') {
    requestIdleCallback(() => {
      loadAppStyles()
    })
  } else {
    setTimeout(() => {
      loadAppStyles()
    }, 0)
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <HelmetProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HelmetProvider>,
)
