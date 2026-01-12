import React from 'react'

const Events = () => {
  const events = [
    {
      id: 1,
      title: 'Community Convening - Mumbai',
      date: '2023-12-15',
      location: 'Mumbai, India',
      description: 'Quarterly meeting with community stakeholders to discuss progress and next steps.'
    },
    {
      id: 2,
      title: 'Workshop: Sustainable Urban Development',
      date: '2023-12-20',
      location: 'Bengaluru, India',
      description: 'Hands-on workshop on sustainable practices for urban neighborhoods.'
    },
    {
      id: 3,
      title: 'NOTF Annual Summit',
      date: '2024-01-10',
      location: 'Ahmedabad, India',
      description: 'Annual gathering of all NOTF partners and community representatives.'
    }
  ]

  return (
    <section className="events" id="events">
      <div className="container">
        <h2 className="section-title">UPCOMING EVENTS</h2>
        <div className="events-content">
          {events.map(event => (
            <div key={event.id} className="event-card">
              <div className="event-date">
                <strong>{new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</strong>
                <span>{new Date(event.date).getFullYear()}</span>
              </div>
              <div className="event-details">
                <h3>{event.title}</h3>
                <p><i className="fas fa-map-marker-alt"></i> {event.location}</p>
                <p>{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Events