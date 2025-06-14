'use client';
import { useState } from 'react';
import './ContactForm.css';

const initialFormState = {
  name: '', lastName: '', email: '', message: '',
  nationality: '', contactNumber: '', nic: '', branch: '', programme: '',
  files: []
};

export default function ContactForm() {
  const [formData, setFormData] = useState(initialFormState);
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'files') {
      setFormData({ ...formData, files: [...files] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const requiredFields = [
    'name', 'lastName', 'email', 'message',
    'nationality', 'contactNumber', 'nic', 'branch', 'programme'
  ];

  for (let field of requiredFields) {
    if (!formData[field] || formData[field].trim() === '') {
      setStatus('Please fill in all required fields.');
      return;
    }
  }

  if (!/\S+@\S+\.\S+/.test(formData.email)) {
    setStatus('Please enter a valid email address.');
    return;
  }

  if (formData.files.length === 0) {
    setStatus('Please upload at least one PDF file.');
    return;
  }

  for (let file of formData.files) {
    if (file.type !== 'application/pdf') {
      setStatus('Only PDF files are allowed.');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setStatus(`Each file must be under 5MB.`);
      return;
    }
  }

  try {
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (key === 'files') {
        value.forEach(file => data.append('files', file));
      } else {
        data.append(key, value);
      }
    });

    const res = await fetch('/api/contact', {
      method: 'POST',
      body: data,
    });

    const result = await res.json();
    setStatus(result.message);
    if (result.message === 'Email sent successfully!') {
      setFormData(initialFormState);
    }
  } catch (err) {
    console.error(err);
    setStatus('An error occurred. Please try again.');
  }
};

  return (
    <div className="contact-wrapper">
      <div className="contact-box">
        <h2 className="contact-title">Get in Touch with us</h2>
        <form onSubmit={handleSubmit} className="contact-form">

          <div className="input-group">
            <input
              type="text"
              name="name"
              placeholder=" "
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label>Full Name</label>
          </div>

          <div className="input-group">
            <input
              type="text"
              name="lastName"
              placeholder=" "
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            <label>Last Name*</label>
          </div>

          <div className="input-group">
            <select name="nationality" value={formData.nationality} onChange={handleChange} required>
              <option value="">Select</option>
              <option value="Sri Lankan">Sri Lankan</option>
              <option value="Other">Other</option>
            </select>
            <label>Nationality*</label>
          </div>

          <div className="input-group">
            <input
              type="text"
              name="contactNumber"
              placeholder=" "
              value={formData.contactNumber}
              onChange={handleChange}
            />
            <label>Contact Number</label>
          </div>

          <div className="input-group">
            <input
              type="text"
              name="nic"
              placeholder=" "
              value={formData.nic}
              onChange={handleChange}
            />
            <label>NIC/Passport</label>
          </div>

          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder=" "
              value={formData.email}
              onChange={handleChange}
            />
            <label>Email</label>
          </div>

          <div className="input-group">
            <input
              type="text"
              name="branch"
              placeholder=" "
              value={formData.branch}
              onChange={handleChange}
            />
            <label>Branch</label>
          </div>

          <div className="input-group">
            <select name="programme" value={formData.programme} onChange={handleChange}>
              <option value="">Select Course</option>
              <option value="ICT">ICT</option>
              <option value="Business Management">Business Management</option>
              <option value="Engineering">Engineering</option>
              <option value="Other">Other</option>
            </select>
            <label>Academic Programme</label>
          </div>

          {/* <div className="input-group full-width">
            <input
              type="file"
              name="files"
              accept="application/pdf"
              multiple
              onChange={handleChange}
              placeholder=" "
            />
            <label>Documents (Upload Multiple PDF Files, Max 5MB each)</label>
          </div> */}

          <div className="input-group full-width">
            <input
              type="file"
              name="files"
              accept="application/pdf"
              multiple
              onChange={handleChange}
              style={{ display: 'none' }}
              id="file-upload"
            />
            <label>Documents (Can Upload Multiple Files)</label>
            <button
              type="button"
              className="attachment-button"
              onClick={() => document.getElementById('file-upload').click()}
              disabled={formData.files.length >= 5}
            >
              + Add Attachments
            </button>
            <ul className="file-list">
              {formData.files.map((file, index) => (
                <li key={index}>{file.name}</li>
              ))}
            </ul>
          </div>

          <div className="input-group full-width">
            <textarea
              name="message"
              rows="4"
              placeholder=" "
              value={formData.message}
              onChange={handleChange}
              required
            />
            <label>Message*</label>
          </div>

          <div className="submit-btn">
            <button type="submit">Send Now</button>
            {status && (
  <p
    className={
      status === 'Email sent successfully!'
        ? 'status-message success'
        : 'status-message error'
    }
  >
    {status}
  </p>
) }
          </div>

        </form>
      </div>
    </div>
  );
}
