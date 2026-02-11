import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">

        <div className="footer-brand">
          <h3>LiveNLife Events</h3>
          <p>Making your moments unforgettable ✨</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="/about">About & Contact Us</a>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p>Shop XXXX, City Name</p>
          <p>Email: info@livenlife.com</p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} LiveNLife Events. All rights reserved.
      </div>
    </footer>
  );
}
