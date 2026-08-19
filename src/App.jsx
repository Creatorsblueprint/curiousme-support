import React from 'react'

const faqs = [
  {
    question: "How do I add a medication?",
    answer: "Open Curious Me, tap the option to add a medication, then enter the medication name, dosage, frequency and any optional instructions."
  },
  {
    question: "Can I edit my medication details?",
    answer: "Yes. Open the medication and update the information whenever needed."
  },
  {
    question: "Does Curious Me provide medical advice?",
    answer: "No. Curious Me is an organisational and medication tracking tool only. It does not provide medical advice, diagnoses or treatment recommendations."
  },
  {
    question: "What should I do if I entered the wrong medication information?",
    answer: "Open the medication and edit or remove the incorrect information."
  }
]

export default function App() {
  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <div className="logo-wrapper">
          <img src="/app_logo.png" alt="Curious Me App Icon" className="app-logo" />
        </div>
        <h1 className="app-title">Curious Me</h1>
        <p className="app-subtitle">Medication tracking made simple.</p>
      </header>

      {/* Main Need Help Section */}
      <section className="card">
        <h2 className="card-title">Need help?</h2>
        <p className="card-text">
          If you have a question, found an issue, or need help using Curious Me, we're here to help.
        </p>
        <a href="mailto:support@curiousme.net" className="btn-primary">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="16" x="2" y="4" rx="2"/>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
          </svg>
          Contact Support
        </a>
      </section>

      {/* Frequently Asked Questions */}
      <section className="card">
        <h2 className="card-title">Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <details key={index} className="faq-item" open={index === 0}>
              <summary className="faq-summary">
                <span>{faq.question}</span>
                <svg className="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </summary>
              <div className="faq-content">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="card">
        <h2 className="card-title">Contact</h2>
        <p className="card-text" style={{ marginBottom: '0.5rem' }}>
          For support or technical issues:
        </p>
        <div className="contact-link-wrapper">
          <a href="mailto:support@curiousme.net" className="contact-email-link">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
            support@curiousme.net
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-links">
          <a href="/privacy" className="footer-link">Privacy Policy</a>
          <span className="footer-separator">•</span>
          <a href="mailto:support@curiousme.net" className="footer-link">Contact Support</a>
        </div>
        <p className="footer-copyright">© 2026 Curious Me. All rights reserved.</p>
        <p className="footer-disclaimer">
          Curious Me is not a medical service and does not provide medical advice.
        </p>
      </footer>
    </div>
  )
}
