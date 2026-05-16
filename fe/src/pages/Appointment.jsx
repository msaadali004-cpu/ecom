import { useState } from 'react'

const Appointment = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [service, setService] = useState('Consultation')
  const [message, setMessage] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    setMessage(
      `Thanks ${name}, your appointment request for ${service} is booked for ${date} at ${time}. We will contact you at ${email}.`
    )
    setName('')
    setEmail('')
    setPhone('')
    setDate('')
    setTime('')
    setService('Consultation')
  }

  return (
    <main className="page-content">
      <section className="appointment-section">
        <div className="appointment-card">
          <div className="appointment-copy">
            <span className="eyebrow">Book an Appointment</span>
            <h2>Personal styling and consultation booking</h2>
            <p>
              Schedule a one-on-one appointment for wig fittings, styling guidance, or product advice. Our team is
              ready to help you find the perfect look.
            </p>
          </div>

          <form className="appointment-form" onSubmit={handleSubmit}>
            <div className="appointment-grid">
              <label>
                Name
                <input
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  required
                />
              </label>
              <label>
                Email
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
              </label>
              <label>
                Phone
                <input
                  type="tel"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                />
              </label>
              <label>
                Date
                <input
                  type="date"
                  value={date}
                  onChange={(event) => setDate(event.target.value)}
                  required
                />
              </label>
              <label>
                Time
                <input
                  type="time"
                  value={time}
                  onChange={(event) => setTime(event.target.value)}
                  required
                />
              </label>
              <label>
                Service
                <select value={service} onChange={(event) => setService(event.target.value)}>
                  <option>Consultation</option>
                  <option>Wig Fitting</option>
                  <option>Styling Session</option>
                  <option>Product Advice</option>
                </select>
              </label>
            </div>
            <button type="submit" className="primary-button appointment-submit">
              Request Appointment
            </button>
            {message && <p className="appointment-message">{message}</p>}
          </form>
        </div>
      </section>
    </main>
  )
}

export default Appointment
