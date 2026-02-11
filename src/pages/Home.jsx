import './Home.css'
import { useState } from 'react'
import event1 from '../assets/events/event1.jpg'
import event2 from '../assets/events/event2.png'
import ownerImg from '../assets/events/event1.jpg'

function Home() {
  const [showForm, setShowForm] = useState(false)
  const [date, setDate] = useState('')
  const [eventType, setEventType] = useState('Conference')
  const [planType, setPlanType] = useState('Basic')
  const [activeTab, setActiveTab] = useState('mission')
  const owner = 'Sanat'

  const openForm = () => setShowForm(true)
  const closeForm = () => setShowForm(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const message = `Owner: ${owner}\nEvent Date: ${date}\nEvent Type: ${eventType}\nPlan Type: ${planType}`
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(message)
        .then(() => alert(`Message copied to clipboard and sent to ${owner}`))
        .catch(() => {
          console.log(message)
          alert(`Unable to copy. Message logged to console. Sent to ${owner}`)
        })
    } else {
      console.log(message)
      alert(`Message logged to console. Sent to ${owner}`)
    }
    closeForm()
  }

  return (
    <div className="home">
      <header className="home-header">
        <h1>LiveNLife Events</h1>
        <p className="subtitle">Your Premier Event Management Platform</p>
      </header>

      {/* SLIDER */}
      <section className="slider-section">
        <div className="slider-track">
          <img src={event1} alt="event" />
          <img src={event2} alt="event" />
          <img src={event1} alt="event" />
          <img src={event2} alt="event" />
          <img src={event1} alt="event" />
          <img src={event2} alt="event" />

          {/* Duplicate for smooth infinite scroll */}
          <img src={event1} alt="event" />
          <img src={event2} alt="event" />
          <img src={event1} alt="event" />
          <img src={event2} alt="event" />
          <img src={event1} alt="event" />
          <img src={event2} alt="event" />
        </div>
      </section>

      <section className="hero">
        <div className="hero-content">
          <h2>Welcome to LiveNLife Events</h2>
          <p>Create, manage, and host unforgettable events with ease</p>
          <a href="/contact" className="cta-button">Get Started</a>
        </div>
      </section>

      <section className="features" id="features">
        <h2>Event Plan Types</h2>
        <p className="features-subtitle">Choose the perfect plan for your special occasion</p>
        <div className="features-grid">
          <div className="feature-card">
            <div className="card-image">
              <img src={event1} alt="Birthday" />
              <div className="card-overlay">🎂</div>
            </div>
            <h3>Birthday</h3>
            <p>Celebrate another year of joy with a memorable birthday bash. From intimate gatherings to grand parties, we create moments filled with laughter, cake, and unforgettable memories.</p>
          </div>
          <div className="feature-card">
            <div className="card-image">
              <img src={event2} alt="Anniversary" />
              <div className="card-overlay">💕</div>
            </div>
            <h3>Anniversary</h3>
            <p>Commemorate your love story with elegance and romance. Whether celebrating years together or a special milestone, we craft intimate experiences that honor your beautiful journey.</p>
          </div>
          <div className="feature-card">
            <div className="card-image">
              <img src={event1} alt="Baby Showers" />
              <div className="card-overlay">👶</div>
            </div>
            <h3>Baby Showers</h3>
            <p>Welcome new life with warmth and joy. Our baby shower events blend playful themes with elegant touches, creating cherished moments for parents-to-be and their loved ones.</p>
          </div>
          <div className="feature-card">
            <div className="card-image">
              <img src={event2} alt="Couple Date" />
              <div className="card-overlay">💑</div>
            </div>
            <h3>Couple Date</h3>
            <p>Create magic for two with personalized romantic experiences. Candlelit dinners, adventure dates, or cozy getaways—we orchestrate moments that strengthen your bond.</p>
          </div>
          <div className="feature-card">
            <div className="card-image">
              <img src={event1} alt="Special Day" />
              <div className="card-overlay">✨</div>
            </div>
            <h3>Special Day</h3>
            <p>Turn any occasion into something extraordinary. Graduation, promotion, or milestone celebration—we transform your special moments into experiences worth treasuring forever.</p>
          </div>
          <div className="feature-card">
            <div className="card-image">
              <img src={event2} alt="Wedding Day" />
              <div className="card-overlay">💍</div>
            </div>
            <h3>Wedding Day</h3>
            <p>Your dream wedding deserves flawless execution. From intimate ceremonies to grand celebrations, we handle every detail to make your love story's biggest chapter absolutely perfect.</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to Create Your Next Event?</h2>
        <a href="/contact" className="cta-button">Start Planning Today</a>
      </section>

      {/* MISSION SECTION */}
      <section className="mission-section" id="mission">
        <div className="mission-header">
          <h2>About LiveNLife Events</h2>
        </div>

        <div className="tabs-container">
          <div className="tabs-nav">
            <button
              className={`tab-btn ${activeTab === 'mission' ? 'active' : ''}`}
              onClick={() => setActiveTab('mission')}
            >
              Our Mission
            </button>
            <button
              className={`tab-btn ${activeTab === 'whatwedo' ? 'active' : ''}`}
              onClick={() => setActiveTab('whatwedo')}
            >
              What We Do
            </button>
          </div>

          <div className="tabs-content">
            {activeTab === 'mission' && (
              <div className="tab-pane">
                <h3>Our Mission</h3>
                <p>
                  At LiveNLife Events, we believe every celebration deserves elegance,
                  creativity, and perfection. Our mission is to empower organizers with
                  tools and support that turn visions into unforgettable experiences.
                </p>
              </div>
            )}

            {activeTab === 'whatwedo' && (
              <div className="tab-pane">
                <h3>What We Do</h3>
                <p>
                  We simplify event management — from planning and guest coordination
                  to analytics and secure payments. Whether it's a wedding, corporate
                  event, or concert, we deliver seamless execution.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* WHY CHOOSE US SECTION */}
        <div className="why-choose-section">
          <h2>Why Choose Us?</h2>
          <div className="features-grid">
            <div className="feature-box">
              <span>✨</span>
              <p>Elegant and easy-to-use platform</p>
            </div>
            <div className="feature-box">
              <span>🛠️</span>
              <p>End-to-end event planning tools</p>
            </div>
            <div className="feature-box">
              <span>📊</span>
              <p>Real-time analytics & insights</p>
            </div>
            <div className="feature-box">
              <span>🔒</span>
              <p>Secure payment integrations</p>
            </div>
            <div className="feature-box">
              <span>💬</span>
              <p>Dedicated 24/7 support</p>
            </div>
            <div className="feature-box">
              <span>🌟</span>
              <p>Trusted by growing communities</p>
            </div>
          </div>
        </div>

        {/* FOUNDER SECTION */}
        <div className="about-owner">
          <img src={ownerImg} alt="Founder" />
          <div>
            <h2>Our Founder</h2>
            <p>
              Built with passion and industry experience, LiveNLife Events is led
              by a visionary who believes in delivering joy through flawless
              planning. Every event is treated like a personal celebration.
            </p>
          </div>
        </div>
      </section>`n      `n      {showForm && (
        <div className="modal-overlay" onClick={closeForm}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeForm} aria-label="Close">×</button>
            <h3>Request Event Planning</h3>
            <p>Owner: {owner}</p>
            <form onSubmit={handleSubmit} className="modal-form">
              <label>
                Event Date
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
              </label>

              <label>
                Event Type
                <select value={eventType} onChange={(e) => setEventType(e.target.value)}>
                  <option>Conference</option>
                  <option>Wedding</option>
                  <option>Concert</option>
                  <option>Meetup</option>
                  <option>Other</option>
                </select>
              </label>

              <label>
                Plan Type
                <select value={planType} onChange={(e) => setPlanType(e.target.value)}>
                  <option>Basic</option>
                  <option>Standard</option>
                  <option>Premium</option>
                </select>
              </label>

              <div className="modal-actions">
                <button type="submit" className="cta-button">Submit</button>
                <button type="button" className="secondary" onClick={closeForm}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default Home

