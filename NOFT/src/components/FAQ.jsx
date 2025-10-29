import React, { useState } from 'react'

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const faqs = [
    {
      question: 'How can my neighborhood join NOTF?',
      answer: 'Participation is by invitation. We are currently working in pilot neighborhoods in Mumbai, Bengaluru, and Ahmedabad. If you are in one of these cities and would like to be considered, please contact us.'
    },
    {
      question: 'What is the time commitment for participants?',
      answer: 'The time commitment varies based on your role and the initiatives you are involved in. Typically, partners participate in monthly cadence calls and quarterly in-person convenings.'
    },
    {
      question: 'How does NOTF fund its initiatives?',
      answer: 'NOTF is funded through a combination of grants from foundations, corporate partnerships, and in-kind contributions from community partners.'
    },
    {
      question: 'Can organizations outside the pilot cities get involved?',
      answer: 'Yes, we are always looking to connect with organizations that share our vision. While our on-ground work is currently focused in three cities, we welcome partnerships and knowledge sharing with organizations everywhere.'
    }
  ]

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="faq" id="faq">
      <div className="container">
        <h2 className="section-title">FREQUENTLY ASKED QUESTIONS</h2>
        <div className="faq-content">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button className="faq-question" onClick={() => toggleFAQ(index)}>
                {faq.question}
                <span className="faq-toggle">{activeIndex === index ? '-' : '+'}</span>
              </button>
              {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ