import { useState } from 'react'
import './App.css'

function App() {
  const [email, setEmail] = useState('')

  const handleJoin = (e) => {
    e.preventDefault()
    alert(`Thanks! We'll notify ${email} when the beta is ready.`)
    setEmail('')
  }

  return (
    <div className="container">
      {/* Hero Section */}
      <header>
        <h1>Secure Escrow for Everyone</h1>
        <p style={{ fontSize: '1.2rem', color: '#ccc' }}>
          Buy and sell with total confidence. We hold the funds until you approve the work.
        </p>
        
        {/* Waitlist Form */}
        <form onSubmit={handleJoin} style={{ marginTop: '2rem' }}>
          <input 
            type="email" 
            placeholder="Enter your email..." 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ padding: '0.6em', borderRadius: '8px', marginRight: '10px', border: 'none' }}
            required
          />
          <button type="submit">Join Early Access</button>
        </form>
      </header>

      {/* Feature Section */}
      <div className="features">
        <div className="card">
          <h3>🔒 100% Secure</h3>
          <p>Funds are held in a regulated trust account until terms are met.</p>
        </div>
        <div className="card">
          <h3>⚡ Instant Release</h3>
          <p>Once you approve the milestone, funds are released instantly.</p>
        </div>
        <div className="card">
          <h3>🤝 Milestone Based</h3>
          <p>Break large projects into small, safe payments.</p>
        </div>
      </div>
    </div>
  )
}

export default App