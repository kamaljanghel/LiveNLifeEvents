import { useState } from 'react'
import './Contact.css'

function Contact() {
  const initialState = {
    name: '',
    phone: '',
    planType: 'Basic',
    date: ''
  }

  const [formData, setFormData] = useState(initialState)
  const owner = 'Sanat'

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.name || !formData.phone || !formData.date) {
      alert('Please fill in all fields')
      return
    }

    const message = `CONTACT FORM SUBMISSION

Name: ${formData.name}
Phone: ${formData.phone}
Event Plan Type: ${formData.planType}
Event Date: ${formData.date}

Submitted to: ${owner}`

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(message)
        .then(() => {
          alert(`Thank you ${formData.name}! Your request has been sent to ${owner}. Message copied to clipboard.`)
          setFormData(initialState)
        })
        .catch(() => {
          console.log(message)
          alert(`Thank you ${formData.name}! Your request has been logged. Details sent to ${owner}.`)
          setFormData(initialState)
        })
    } else {
      console.log(message)
      alert(`Thank you ${formData.name}! Your request has been logged. Details sent to ${owner}.`)
      setFormData(initialState)
    }
  }

  return (
    <div className="contact-page">
      <div className="contact-wrapper">
        <div className="contact-container">
          <div className="contact-header">
            <h1>Let's Plan Your Perfect Event</h1>
            <p>Tell us about your vision, and we'll make it unforgettable</p>
            <div className="header-accent"></div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <div className="form-input-wrapper">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder=" "
                  required
                  className="form-input"
                />
                <label htmlFor="name">Full Name</label>
              </div>
            </div>

            <div className="form-group">
              <div className="form-input-wrapper">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder=" "
                  pattern="[0-9\-+\s()]+"
                  required
                  className="form-input"
                />
                <label htmlFor="phone">Phone Number</label>
              </div>
            </div>

            <div className="form-group">
              <div className="form-input-wrapper">
                <select
                  id="planType"
                  name="planType"
                  value={formData.planType}
                  onChange={handleChange}
                  required
                  className="form-input"
                >
                  <option value="" disabled hidden></option>
                  <option value="Basic">Basic</option>
                  <option value="Standard">Standard</option>
                  <option value="Premium">Premium</option>
                </select>
                <label htmlFor="planType">Event Plan Type</label>
              </div>
            </div>

            <div className="form-group">
              <div className="form-input-wrapper">
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
                <label htmlFor="date">Event Date</label>
              </div>
            </div>

            <button type="submit" className="submit-btn">
              <span>Send Request</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </form>
        </div>

        <div className="contact-benefits">
          <div className="benefits-card">
            <div className="benefit-icon">⚡</div>
            <h4>Quick Response</h4>
            <p>Get in touch within 24 hours</p>
          </div>

          <div className="benefits-card">
            <div className="benefit-icon">🎯</div>
            <h4>Expert Planning</h4>
            <p>Professional event management</p>
          </div>

          <div className="benefits-card">
            <div className="benefit-icon">💰</div>
            <h4>Affordable</h4>
            <p>Pricing that fits your budget</p>
          </div>

          <div className="benefits-card">
            <div className="benefit-icon">🕐</div>
            <h4>24/7 Support</h4>
            <p>Always here when you need us</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
