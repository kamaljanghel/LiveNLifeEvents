import './Header.css'
import { useTheme } from '../context/ThemeContext'

export default function Header() {
  const { isDark, toggleTheme } = useTheme()
  return (
    <header className="site-header">
      <div className="container">

        {/* Logo (click reload) */}
        <a href="/" className="logo">
          LiveNLife Events
        </a>

        {/* Navigation */}
        <nav className="nav-menu">
          <a href="/">Home</a>
          <a href="#features">Event Plans</a>
          <a href="#mission">Our Mission</a>
          <a href="/contact">Contact Us</a>
        </nav>

        {/* Dark Mode Toggle */}
        <button 
          className="theme-toggle" 
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
          title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {isDark ? '☀️' : '🌙'}
        </button>

      </div>
    </header>
  );
}
