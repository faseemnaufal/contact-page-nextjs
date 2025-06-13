import React from 'react';
import './MapSection.css';

const MapSection = () => (
  <div className="map-section">
    <iframe
      title="Colombo Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.70360652889!2d79.78616469809132!3d6.927078581215585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2595ff57d731f%3A0xd02406b777103cbb!2sColombo!5e0!3m2!1sen!2slk!4v1717976554712!5m2!1sen!2slk"
      width="100%"
      height="450"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
);

export default MapSection;
