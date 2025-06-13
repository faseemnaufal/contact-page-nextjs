'use client';
import { useState } from 'react';
import './ContactForm.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '', lastName: '', email: '', subject: '', message: '', file: null
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      setFormData({ ...formData, file: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, lastName, email, subject, message, file } = formData;
    if (!name || !lastName || !email || !subject || !message || !file) {
      setStatus('Please fill in all required fields.');
      return;
    }

    if (file.type !== 'application/pdf') {
      setStatus('Only PDF files are allowed.');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setStatus('File must be under 5MB.');
      return;
    }

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    const res = await fetch('/api/contact', {
      method: 'POST',
      body: data
    });

    const result = await res.json();
    setStatus(result.message);
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-box">
        <h2 className="contact-title">Get in Touch with us</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="input-group">
            <label>Full Name</label>
            <input name="name" type="text" onChange={handleChange} />
          </div>
          <div className="input-group">
            <label>Last Name*</label>
            <input name="lastName" type="text" onChange={handleChange} required />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input name="email" type="email" onChange={handleChange} />
          </div>
          <div className="input-group">
            <label>Subject</label>
            <input name="subject" type="text" onChange={handleChange} />
          </div>
         <div className="input-group full-width">
          <label>Upload PDF (Max 5MB)</label>
          <input name="file" type="file" accept="application/pdf" onChange={handleChange} />
        </div>

        <div className="input-group full-width">
          <label>Message*</label>
          <textarea name="message" rows="4" onChange={handleChange} required></textarea>
        </div>
          <div className="submit-btn">
            <button type="submit">Send Now</button>
            {status && <p className="status-message">{status}</p>}
          </div>
        </form>
      </div>
    </div>
  );
}
