// src/components/Stories.jsx
import React, { useState, useEffect } from 'react'

const Stories = () => {
  const [currentStory, setCurrentStory] = useState(0)
  
  const stories = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Community Leader, Mumbai",
      content: "NOTF helped us transform our local park into a community hub that now hosts workshops, farmers markets, and cultural events.",
      image: "priya.jpg",
      project: "Green Spaces Initiative"
    },
    {
      id: 2,
      name: "Arun Kumar",
      role: "Youth Coordinator, Bengaluru",
      content: "Through the NOTF platform, we connected with tech mentors who helped our youth develop digital literacy programs.",
      image: "arun.jpg",
      project: "Digital Literacy Drive"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStory((prev) => (prev + 1) % stories.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="stories">
      <div className="container">
        <h2 className="section-title">Community Impact Stories</h2>
        <div className="story-carousel">
          <div className="story-content">
            <blockquote>"{stories[currentStory].content}"</blockquote>
            <div className="story-author">
              <strong>{stories[currentStory].name}</strong>
              <span>{stories[currentStory].role}</span>
              <em>{stories[currentStory].project}</em>
            </div>
          </div>
          <div className="story-indicators">
            {stories.map((_, index) => (
              <button
                key={index}
                className={index === currentStory ? 'active' : ''}
                onClick={() => setCurrentStory(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


export default Stories