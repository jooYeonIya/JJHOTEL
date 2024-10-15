import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// components
import Header from './components/Header'
import Footer from './components/Footer'

// css
import './css/App.css';

function App() {
  return (
    <StrictMode>
      <div className="wrapper">
        <div className="contentWrapper">
          <Header />
        </div>
        <Footer />
      </div>
    </StrictMode>
  )
}

createRoot(document.getElementById('root')).render(<App />)
