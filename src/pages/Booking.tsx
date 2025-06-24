import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Layout from '../components/Layout';

export default function Booking() {
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const duration = queryParams.get('type') || 'Massage Session';

  const [massageType, setMassageType] = useState('Clinical Massage');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    date: '',
    time: '',
    parking: '',
    roomSize: '',
    floor: '',
    injury: '',
    concern: '',
    diagnosis: '',
    notes: '',
    weeksPregnant: '',
    pregnancyPainPoints: '',
    pregnancyComplications: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePillClick = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const form = document.createElement('form');
    form.action = 'https://formsubmit.co/martasholisticmassage@gmail.com';
    form.method = 'POST';

    Object.entries(formData).forEach(([key, value]: [string, any]) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = value;
      form.appendChild(input);
    });

    const bookingType = document.createElement('input');
    bookingType.type = 'hidden';
    bookingType.name = 'bookingType';
    bookingType.value = `${duration} - ${massageType}`;
    form.appendChild(bookingType);

    const redirectInput = document.createElement('input');
    redirectInput.type = 'hidden';
    redirectInput.name = '_next';
    redirectInput.value = window.location.href;
    form.appendChild(redirectInput);

    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
    setSubmitted(true);
  };

  const generateTimeSlots = (start: string, end: string): string[] => {
    const slots: string[] = [];
    let [hour, minute] = start.split(':').map(Number);
    const [endHour, endMinute] = end.split(':').map(Number);

    while (hour < endHour || (hour === endHour && minute <= endMinute)) {
      const formatted = `${String(hour).padStart(2, '0')}:${minute === 0 ? '00' : '30'}`;
      slots.push(formatted);
      minute += 30;
      if (minute === 60) {
        minute = 0;
        hour += 1;
      }
    }
    return slots;
  };

  const renderPillGroup = (name: string, label: string) => (
    <div style={styles.label}>
      {label}
      <div style={styles.pillGroup}>
        <button
          type="button"
          onClick={() => handlePillClick(name, 'Yes')}
          style={{
            ...styles.pill,
            backgroundColor: formData[name] === 'Yes' ? '#8FC769' : '#eee',
            color: formData[name] === 'Yes' ? '#000' : '#666',
          }}
        >
          Yes
        </button>
        <button
          type="button"
          onClick={() => handlePillClick(name, 'No')}
          style={{
            ...styles.pill,
            backgroundColor: formData[name] === 'No' ? '#8FC769' : '#eee',
            color: formData[name] === 'No' ? '#000' : '#666',
          }}
        >
          No
        </button>
      </div>
    </div>
  );

  return (
    <Layout>
      <div style={styles.container}>
        <button type="button" style={styles.topButton} onClick={() => navigate('/')}>Back to Home</button>
        <h2 style={styles.heading}>Request a {duration}</h2>
        {!submitted ? (
          <>
            <p style={styles.notice}>Your booking will be confirmed by email after review.</p>
            <form onSubmit={handleSubmit} style={styles.form}>
              <label style={styles.label}>Massage Type:
                <select name="massageType" value={massageType} onChange={(e) => setMassageType(e.target.value)} style={styles.input}>
                  <option value="Clinical Massage">Clinical Massage</option>
                  <option value="Relaxation Massage">Relaxation Massage</option>
                  <option value="Pregnancy Massage">Pregnancy Massage</option>
                </select>
              </label>

              <label style={styles.label}>Name:
                <input type="text" name="name" required value={formData.name} onChange={handleChange} style={styles.input} />
              </label>
              <label style={styles.label}>Email:
                <input type="email" name="email" required value={formData.email} onChange={handleChange} style={styles.input} />
              </label>
              <label style={styles.label}>Telephone:
                <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} style={styles.input} />
              </label>
              <label style={styles.label}>Address:
                <input type="text" name="address" required value={formData.address} onChange={handleChange} style={styles.input} />
              </label>
              <label style={styles.label}>Preferred Date:
                <input type="date" name="date" required value={formData.date} onChange={handleChange} style={styles.input} />
              </label>
              <label style={styles.label}>Preferred Time:
                <select name="time" required value={formData.time} onChange={handleChange} style={styles.input}>
                  <option value="">Select a time</option>
                  {generateTimeSlots("08:00", "20:00").map((time) => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
              </label>

              {renderPillGroup('parking', 'Is parking available near your address?')}
              {renderPillGroup('roomSize', 'Is the room large enough for a 2m x 1m table with 1m of space around it?')}
              {renderPillGroup('floor', 'Is the room upstairs or past obstacles like stairs?')}

              {massageType === 'Clinical Massage' && (
                <>
                  <label style={styles.label}>Injury or condition:
                    <input type="text" name="injury" value={formData.injury} onChange={handleChange} style={styles.input} />
                  </label>
                  <label style={styles.label}>Area of concern:
                    <input type="text" name="concern" value={formData.concern} onChange={handleChange} style={styles.input} />
                  </label>
                  <label style={styles.label}>Diagnosis (if any):
                    <input type="text" name="diagnosis" value={formData.diagnosis} onChange={handleChange} style={styles.input} />
                  </label>
                  <label style={styles.label}>Additional notes:
                    <textarea name="notes" value={formData.notes} onChange={handleChange} style={{ ...styles.input, height: '80px' }} />
                  </label>
                </>
              )}

              {massageType === 'Pregnancy Massage' && (
                <>
                  <label style={styles.label}>How far along are you? (weeks or trimester):
                    <input type="text" name="weeksPregnant" value={formData.weeksPregnant} onChange={handleChange} style={styles.input} />
                  </label>
                  <label style={styles.label}>Pain points:
                    <input type="text" name="pregnancyPainPoints" value={formData.pregnancyPainPoints} onChange={handleChange} style={styles.input} />
                  </label>
                  <label style={styles.label}>Any complications/medical notes:
                    <textarea name="pregnancyComplications" value={formData.pregnancyComplications} onChange={handleChange} style={{ ...styles.input, height: '80px' }} />
                  </label>
                </>
              )}

              <div style={styles.centeredButton}>
                <button type="submit" style={styles.button}>Request Booking</button>
              </div>
            </form>
          </>
        ) : (
          <div style={styles.confirmationBox}>
            <h3>Thank you!</h3>
            <p>Your booking request has been sent. You’ll receive a confirmation email shortly.</p>
            <button style={styles.button} onClick={() => navigate('/')}>Back to Home</button>
          </div>
        )}
      </div>
    </Layout>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    maxWidth: '600px',
    margin: '3rem auto',
    padding: '2rem',
    borderRadius: '12px',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  topButton: {
    backgroundColor: '#ccc',
    border: 'none',
    padding: '0.5rem 1.25rem',
    borderRadius: '999px',
    fontSize: '1rem',
    cursor: 'pointer',
    marginBottom: '1.5rem',
  },
  heading: {
    textAlign: 'center',
    fontSize: '1.8rem',
    marginBottom: '1rem',
  },
  notice: {
    textAlign: 'center',
    fontStyle: 'italic',
    marginBottom: '1rem',
    color: '#555',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    width: '100%',
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    fontWeight: 'bold',
    fontSize: '1rem',
  },
  input: {
    padding: '0.5rem',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '1rem',
    marginTop: '0.3rem',
  },
  pillGroup: {
    display: 'flex',
    gap: '1rem',
    marginTop: '0.5rem',
  },
  pill: {
    padding: '0.5rem 1rem',
    borderRadius: '999px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'background-color 0.3s',
  },
  centeredButton: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '1.5rem',
  },
  button: {
    backgroundColor: '#8FC769',
    border: 'none',
    padding: '0.75rem 1.5rem',
    borderRadius: '8px',
    fontSize: '1rem',
    cursor: 'pointer',
  },
  confirmationBox: {
    textAlign: 'center',
    padding: '2rem',
  },
};
