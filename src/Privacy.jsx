import React from 'react'

export default function Privacy() {
  return (
    <div className="app-container privacy-container">
      {/* Back Link */}
      <nav className="privacy-nav">
        <a href="/" className="back-link">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back to Curious Me Support
        </a>
      </nav>

      {/* Header */}
      <header className="header privacy-header">
        <div className="logo-wrapper">
          <img src="/app_logo.png" alt="Curious Me App Icon" className="app-logo" />
        </div>
        <h1 className="app-title">Privacy Policy</h1>
        <p className="app-subtitle">Curious Me</p>
        <span className="privacy-badge">Last updated: August 2026</span>
      </header>

      {/* Privacy Content Card */}
      <main className="card privacy-card">
        <section className="privacy-section">
          <h2 className="privacy-section-title">1. Introduction</h2>
          <p className="privacy-text">
            Curious Me is a medication organisation and tracking application designed to help you stay organized and manage your medication routines with clarity and ease.
          </p>
          <p className="privacy-text">
            This Privacy Policy explains what information we may collect, how that information is used, and how you can contact us with any privacy-related questions or requests.
          </p>
          <div className="privacy-callout">
            <strong>Important Medical Notice:</strong> Curious Me is designed solely as an organisational tool. It does not provide medical advice, clinical diagnoses, or treatment recommendations.
          </div>
        </section>

        <section className="privacy-section">
          <h2 className="privacy-section-title">2. Information We Collect</h2>
          <p className="privacy-text">
            Curious Me may collect information that you provide directly when creating and using your account, which may include:
          </p>
          <ul className="privacy-list">
            <li><strong>Account Information:</strong> Name, email address, username, or profile details.</li>
            <li><strong>Medication Details:</strong> Medication names, dosage details, schedules, frequencies, and any optional instructions or notes you choose to enter.</li>
            <li><strong>Tracking Information:</strong> Records of your medication tracking activity, such as marking medications as taken, skipped, or snoozed.</li>
            <li><strong>User Uploads:</strong> Profile images or other photos you voluntarily choose to upload within the app.</li>
            <li><strong>Voluntary Submissions:</strong> Any other information you voluntarily enter into the application or communicate to support.</li>
          </ul>
          <p className="privacy-text">
            We only collect the data necessary to provide and operate the core features of Curious Me. We do not collect information that the application does not actively require.
          </p>
        </section>

        <section className="privacy-section">
          <h2 className="privacy-section-title">3. Camera and Photo Library Access</h2>
          <p className="privacy-text">
            Curious Me may request access to your device's camera or photo library only when you explicitly choose to take a photo or select an image to upload within the app (such as setting an avatar or medication photo).
          </p>
          <p className="privacy-text">
            Camera and photo library access is never activated without your explicit permission. Any images captured or selected are used solely for the specific feature for which you selected them.
          </p>
        </section>

        <section className="privacy-section">
          <h2 className="privacy-section-title">4. Location Data</h2>
          <p className="privacy-text">
            Curious Me does not continuously track or monitor your precise location. Furthermore, Curious Me does not intentionally collect or process precise location data as part of its core functionality.
          </p>
        </section>

        <section className="privacy-section">
          <h2 className="privacy-section-title">5. How Information Is Used</h2>
          <p className="privacy-text">
            We use the information collected strictly to provide, maintain, and support your experience with Curious Me, including to:
          </p>
          <ul className="privacy-list">
            <li>Create, authenticate, and manage your user account.</li>
            <li>Store, organize, and display your medication schedules and notes.</li>
            <li>Provide active medication tracking and reminder functionality.</li>
            <li>Maintain, troubleshoot, and improve the reliability and performance of the app.</li>
            <li>Respond to customer support requests and communicate important service updates.</li>
            <li>Detect technical issues, prevent abuse, and uphold application security.</li>
          </ul>
          <p className="privacy-text">
            Your personal data is never used for advertising, targeted marketing, or sold to third parties.
          </p>
        </section>

        <section className="privacy-section">
          <h2 className="privacy-section-title">6. Firebase and Service Providers</h2>
          <p className="privacy-text">
            Curious Me relies on trusted third-party infrastructure and service providers, including Google Firebase, to deliver core functionality such as user authentication, cloud data storage, database synchronization, and application infrastructure.
          </p>
          <p className="privacy-text">
            These service providers process data on our behalf strictly in accordance with their applicable privacy and security standards. Third-party infrastructure providers do not own your personal data.
          </p>
        </section>

        <section className="privacy-section">
          <h2 className="privacy-section-title">7. Data Sharing</h2>
          <p className="privacy-text">
            <strong>Curious Me does not sell users' personal information.</strong>
          </p>
          <p className="privacy-text">
            We do not share your personal information with third parties, except in the limited circumstances below:
          </p>
          <ul className="privacy-list">
            <li><strong>Essential Service Providers:</strong> Trusted cloud and infrastructure vendors necessary to operate and maintain the application.</li>
            <li><strong>Legal Requirements:</strong> When disclosure is required by applicable law, regulation, legal process, or governmental request.</li>
            <li><strong>Protection & Safety:</strong> When necessary to protect the rights, safety, property, or security of our users, the service, or the public.</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2 className="privacy-section-title">8. Data Retention</h2>
          <p className="privacy-text">
            We retain your information only for as long as reasonably necessary to provide the services of Curious Me and to fulfill legitimate legal or operational obligations.
          </p>
          <p className="privacy-text">
            If you delete your account, your associated account data will be permanently deleted or scheduled for secure deletion, unless retaining specific records is strictly required by law or for legitimate security and fraud prevention purposes.
          </p>
        </section>

        <section className="privacy-section">
          <h2 className="privacy-section-title">9. Account Deletion</h2>
          <p className="privacy-text">
            You can initiate or request deletion of your Curious Me account and associated data directly within the mobile application settings.
          </p>
          <p className="privacy-text">
            If you require assistance with deleting your account or want to ensure your data is completely purged, you can contact our support team at any time:
          </p>
          <div className="contact-link-wrapper" style={{ marginTop: '0.75rem' }}>
            <a href="mailto:support@curiousme.net" className="contact-email-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              support@curiousme.net
            </a>
          </div>
        </section>

        <section className="privacy-section">
          <h2 className="privacy-section-title">10. Security</h2>
          <p className="privacy-text">
            We implement appropriate technical, organizational, and administrative safeguards designed to protect your personal information against unauthorized access, loss, alteration, or misuse.
          </p>
          <p className="privacy-text">
            However, please note that no electronic transmission or cloud storage system can be guaranteed to be 100% secure.
          </p>
        </section>

        <section className="privacy-section">
          <h2 className="privacy-section-title">11. Children's Privacy</h2>
          <p className="privacy-text">
            Curious Me is not specifically directed toward children under the minimum legal age required to create an account in your jurisdiction. We do not knowingly collect personal information from individuals who do not meet the minimum age requirements to use online services independently.
          </p>
        </section>

        <section className="privacy-section">
          <h2 className="privacy-section-title">12. Medical Disclaimer</h2>
          <p className="privacy-text">
            Curious Me is strictly an organisational and medication tracking tool.
          </p>
          <p className="privacy-text">
            It does not provide medical advice, diagnosis, medical prescriptions, or treatment recommendations. The app is not a substitute for professional medical judgment. Always seek the advice of your physician or qualified healthcare provider regarding any medical condition or medication schedule.
          </p>
        </section>

        <section className="privacy-section">
          <h2 className="privacy-section-title">13. Changes to This Privacy Policy</h2>
          <p className="privacy-text">
            We may update this Privacy Policy periodically to reflect changes in our practices or applicable legal requirements. Any modifications will be posted on this page with an updated "Last updated" date.
          </p>
        </section>

        <section className="privacy-section" style={{ borderBottom: 'none', paddingBottom: 0 }}>
          <h2 className="privacy-section-title">14. Contact Us</h2>
          <p className="privacy-text">
            If you have any questions, concerns, or requests regarding this Privacy Policy or how your data is handled, please contact us:
          </p>
          <div className="contact-link-wrapper" style={{ marginTop: '0.75rem' }}>
            <a href="mailto:support@curiousme.net" className="contact-email-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              support@curiousme.net
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-links">
          <a href="/" className="footer-link">Support & FAQs</a>
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
