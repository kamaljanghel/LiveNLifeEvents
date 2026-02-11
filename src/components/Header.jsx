import './Header.css'

export default function Header() {
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

      </div>
    </header>
  );
}
