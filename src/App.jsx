import './App.css'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Contact from './pages/Contact'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  useEffect(() => {
    const handleNavigation = (e) => {
      const href = e.target.getAttribute('href')
      if (href && !href.startsWith('#')) {
        e.preventDefault()
        if (href === '/') setCurrentPage('home')
        else if (href === '/plans') setCurrentPage('plans')
        else if (href === '/contact') setCurrentPage('contact')
        window.scrollTo(0, 0)
      } else if (href && href.startsWith('#')) {
        // Allow hash navigation for smooth scroll
        e.preventDefault()
        const sectionId = href.substring(1)
        
        // If not on home page, navigate to home first
        if (currentPage !== 'home') {
          setCurrentPage('home')
          // Wait for home page to render, then scroll
          setTimeout(() => {
            const element = document.getElementById(sectionId)
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' })
            }
          }, 100)
        } else {
          // Already on home, just scroll
          setTimeout(() => {
            const element = document.getElementById(sectionId)
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' })
            }
          }, 0)
        }
      }
    }

    document.addEventListener('click', handleNavigation)
    return () => document.removeEventListener('click', handleNavigation)
  }, [currentPage])

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />
      case 'contact':
        return <Contact />
      case 'plans':
        return <div style={{ padding: '40px', minHeight: '80vh' }}><h2>Plans Page - Coming Soon</h2></div>
      default:
        return <Home />
    }
  }

  return (
    <ThemeProvider>
      <Header />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </ThemeProvider>
  )
}

export default App
