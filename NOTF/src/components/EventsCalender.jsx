// src/components/Events.jsx
import React, { useState } from 'react'

const EventsCalender = () => {
  const [events] = useState([
    {
      id: 1,
      title: "Monthly Cadence Call - March",
      date: "2024-03-15",
      time: "3:00 PM IST",
      type: "virtual",
      description: "Monthly community check-in and coordination call"
    },
    {
      id: 2,
      title: "Quarterly Convening - Mumbai",
      date: "2024-04-10",
      time: "10:00 AM IST",
      type: "in-person",
      description: "In-person gathering of Mumbai neighborhood partners"
    }
  ])

  return (
    <section className="events">
      <div className="container">
        <h2 className="section-title">Upcoming Events & Calls</h2>
        <div className="events-list">
          {events.map(event => (
            <div key={event.id} className="event-card">
              <div className="event-date">
                <strong>{new Date(event.date).getDate()}</strong>
                <span>{new Date(event.date).toLocaleString('default', { month: 'short' })}</span>
              </div>
              <div className="event-details">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <div className="event-meta">
                  <span className={`event-type ${event.type}`}>
                    <i className={`fas fa-${event.type === 'virtual' ? 'video' : 'users'}`}></i>
                    {event.type}
                  </span>
                  <span className="event-time">
                    <i className="fas fa-clock"></i>
                    {event.time}
                  </span>
                </div>
                <button className="event-rsvp">RSVP</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EventsCalender