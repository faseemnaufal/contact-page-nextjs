'use client';
import { useState } from 'react';
import './ContactForm.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '', lastName: '', email: '', subject: '', message: '',
    nationality: '', contactNumber: '', nic: '', branch: '', programme: '',
    files: []
  });
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

    const { name, lastName, email, subject, message, files } = formData;
    if (!name || !lastName || !email || !subject || !message || files.length === 0) {
      setStatus('Please fill in all required fields.');
      return;
    }

    for (let file of files) {
      if (file.type !== 'application/pdf') {
        setStatus('Only PDF files are allowed.');
        return;
      }
    }

    if (name === 'files') {
      const selectedFiles = Array.from(files);

      // Calculate total size: current + new files
      const currentTotalSize = formData.files.reduce((total, f) => total + f.size, 0);
      const newFilesTotalSize = selectedFiles.reduce((total, f) => total + f.size, 0);
      const maxSizeInBytes = 5 * 1024 * 1024; // 5MB in bytes

      if (currentTotalSize + newFilesTotalSize > maxSizeInBytes) {
        setStatus('file size 5MB.');
        return;
      }

      setFormData({ ...formData, files: [...formData.files, ...selectedFiles] });
    } else {
      setFormData({ ...formData, [name]: value });
    }


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
            {status && <p className="status-message">{status}</p>}
          </div>

        </form>
      </div>
    </div>
  );
}
