import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import type { CSSProperties } from 'react';
import Booking from './pages/Booking';
import Client from './pages/Client';
import Layout from './components/Layout';

export default function App() {
  return (
    <Router basename="/Martasholisticmassage-site">
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HomeContent />
            </Layout>
          }
        />
        <Route path="/booking" element={<Booking />} />
        <Route path="/client" element={<Client />} />
      </Routes>
    </Router>
  );
}

function HomeContent() {
  const navigate = useNavigate();

const handleBookingClick = (label: string) => {
  navigate(`/booking?type=${encodeURIComponent(label)}&massage=Clinical%20Massage`);
};


  return (
    <div style={styles.centeredContainer}>
      {/* Navigation Links */}
      <nav style={styles.navLinks}>
        <button onClick={() => scrollToSection('booking')} style={styles.navButton}>Book a Massage</button>
        <button onClick={() => scrollToSection('jing')} style={styles.navButton}>The Jing Method™</button>
        <button onClick={() => scrollToSection('about')} style={styles.navButton}>About Marta</button>
        <button onClick={() => scrollToSection('contact')} style={styles.navButton}>Contact</button>
      </nav>

      <h1 id="booking" style={styles.title}>Marta’s Holistic Massage</h1>
      <p style={styles.subtitle}>
        Mobile massage therapy in the comfort of your home — serving Weymouth and surrounding areas (within 10 miles).
      </p>

      <div style={styles.infoBox}>
        <h3 style={{ marginBottom: '0.5rem' }}>Choose the Right Massage for You</h3>
        <p><strong>Clinical Massage:</strong> Targeted for pain relief, whether acute (after injury or illness) or chronic (lasting more than 3 months).</p>
        <p><strong>Relaxation Massage:</strong> Ideal for stress-related tension, promoting general wellbeing and preventing future discomfort.</p>
        <p><strong>Pregnancy Massage:</strong> Gentle and safe care designed for pain relief and support during pregnancy.</p>
      </div>

      {/* Booking Buttons */}
      <div style={styles.buttonGroup}>
        <button onClick={() => handleBookingClick('60-minute Massage')} style={styles.button}>
  60-minute Massage (£60)
</button>
<button onClick={() => handleBookingClick('90-minute Massage')} style={styles.button}>
  90-minute Massage (£80)
</button>
<button onClick={() => handleBookingClick('6-Treatment Package')} style={styles.button}>
  6-Treatment Package (£310)
</button>

        <Link to="/client" style={styles.linkButton}>
          <button style={styles.button}>Returning Client Booking</button>
        </Link>
      </div>
      {/* Jing Method Section */}
      <section id="jing" style={styles.aboutSection}>
        <h2 style={styles.sectionTitle}>The Jing Method™</h2>

        <img
          src="/Martasholisticmassage-site/Jing-Method-Therapist.png"
          alt="Jing Method Certified Therapist"
          style={{ ...styles.image, maxWidth: '300px', display: 'block', margin: '0 auto 2rem' }}
        />

        <p style={styles.paragraph}>
          The Jing Method™ is an outcome-based, advanced clinical massage system designed to address chronic musculoskeletal pain. It blends trigger point work, fascial techniques, acupressure, stretching, and both Eastern & Western bodywork principles — all rooted in a holistic, neuroscience-based approach.
        </p>
        <p style={styles.paragraph}>
          This method is typically delivered through a structured 6-session treatment plan. Clients benefit from measurable improvements in pain levels, posture, and mobility. Conditions treated include sciatica, migraines, frozen shoulder, fibromyalgia, and more.
        </p>
        <p style={styles.paragraph}>
          Each session includes a consultation, 45 minutes of focused hands-on therapy, and guided aftercare. The Jing Method™ was developed by industry leaders Rachel Fairweather and Meghan Mari, and is practiced by massage therapists, midwives, osteopaths and other professionals trained in the Jing approach.
        </p>

        <img
          src="The-Jing-Method-Experience.png"
          alt="The Jing Method Experience"
          style={{ ...styles.image, maxWidth: '600px', display: 'block', margin: '2rem auto' }}
        />
      </section>

      {/* About Section */}
      <section id="about" style={styles.aboutSection}>
        <h2 style={styles.sectionTitle}>About Marta</h2>
        <p style={styles.paragraph}>
          Hi, I’m Marta — a qualified massage therapist based in Weymouth. After many years working in education, I chose to dedicate myself to health and wellbeing following the COVID pandemic. Massage therapy has become my hobby first and then my part-time job. I feel that my experience and knowledge of wellbeing needs to be offered to all those people who live with daily pain. My objective is not only to reduce or eliminate your pain but also to get you more in control of your health.
        </p>
        <img src="weymouth1.jpg" alt="Beach Relaxation" style={styles.image} />
        <p style={styles.paragraph}>
          I hold the ACMT qualification — Advanced Clinical Massage Therapist — and I practise the Jing Method™, a highly respected approach to soft tissue therapy in the UK. My qualification is fully accredited by EdExcel, the Sports Massage Association (SMA), and the Complementary Health Professionals (CHP), and is recognised as a professional standard in both advanced clinical massage and sports massage.
        </p>
        <p style={styles.paragraph}>
          I specialise in chronic pain relief — especially for those dealing with long-term discomfort. My holistic approach to massage doesn’t just mean giving a massage and sending someone on their way. It means listening, teaching and empowering. I work best with clients who understand that healing doesn’t always happen from massage alone. Pain doesn’t just go away with weekly sessions and no other changes — it requires lifestyle adjustments, commitment and personal effort. I’m here to guide and empower, but real change happens when the client takes ownership of their healing.
        </p>
        <img src="weymouth2.png" alt="Weymouth Coastline" style={styles.image} />
        <p style={styles.paragraph}>
          My goal is to make myself unnecessary. I want you to walk away from our time together not just feeling better, but knowing how to stay better — and only needing the occasional massage as a form of self-care, not crisis management.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" style={styles.aboutSection}>
        <h2 style={styles.sectionTitle}>Contact</h2>
        <p style={styles.paragraph}>
          Outside service area or prefer to visit Marta’s space? Email{' '}
          <a href="mailto:martaholisticmassage@gmail.com">martaholisticmassage@gmail.com</a> to discuss options.
        </p>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>
          Marta’s Holistic Massage © 2025 &nbsp;|&nbsp;
          <a href="/privacy.html" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
        </p>
      </footer>
    </div>
  );
}

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

const styles: { [key: string]: CSSProperties } = {
  centeredContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '2rem',
  },
  navLinks: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
    justifyContent: 'center',
    marginBottom: '2rem',
  },
  navButton: {
    background: '#E3D756',
    color: '#000',
    padding: '0.5rem 1.25rem',
    borderRadius: '999px',
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: 'bold',
    transition: 'all 0.2s ease-in-out',
    cursor: 'pointer',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '0.5rem',
  },
  subtitle: {
    fontSize: '1.1rem',
    color: '#555',
    marginBottom: '2rem',
  },
  infoBox: {
    backgroundColor: '#eef7e5',
    padding: '1rem 1.5rem',
    borderRadius: '10px',
    marginBottom: '2rem',
    textAlign: 'left',
    maxWidth: '600px',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    flexWrap: 'wrap',
    marginBottom: '3rem',
  },
  button: {
    background: '#8FC769',
    border: 'none',
    padding: '0.75rem 1.5rem',
    borderRadius: '10px',
    fontSize: '1rem',
    color: '#000',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  linkButton: {
    textDecoration: 'none',
  },
  aboutSection: {
    maxWidth: '900px',
    textAlign: 'left',
    marginTop: '2rem',
  },
  sectionTitle: {
    fontSize: '2rem',
    marginBottom: '1rem',
    textAlign: 'center',
  },
  paragraph: {
    fontSize: '1rem',
    lineHeight: '1.6',
    marginBottom: '1.5rem',
    color: '#333',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
    marginBottom: '2rem',
  },
  footer: {
    marginTop: '4rem',
    textAlign: 'center',
    fontSize: '0.9rem',
    color: '#777',
  },
};
