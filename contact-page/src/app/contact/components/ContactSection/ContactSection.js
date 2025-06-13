import React from 'react';
import Image from 'next/image';
import './ContactSection.css';
import studentsImg from '../../../assets/students.png';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <div className="contact-section">
        <div className="contact-header">
            <div className="title-block">
            <h1>
                <span className="builds">BUILDS</span><br />
                <span className="career-text">Your Career With <span className="us">US</span></span>
            </h1>
            </div>
            <div className="social-icons">
            <FaFacebookF />
            <FaInstagram />
            <FaYoutube />
            </div>
        </div>

        <div className="contact-blue-strip">
            <div className="contact-blue-strip-height">
                <div className="contact-main">
                <div className="contact-image">
                    <Image src={studentsImg} alt="Students" />
                </div>
                <div className="contact-info">
                    <h3>Head <span className="blue">Office</span></h3>
                    <p><strong>Head Office (Block E)</strong><br />
                    ESOFT Metro Campus No.03,<br />
                    De Fonseka Place, Colombo 4 Srilanka
                    </p>
                    <p><strong>Call Us on</strong><br />+94 117 572 572</p>
                    <p><strong>Email</strong><br />info@esoft.lk</p>
                </div>
                </div>
            </div>
        </div>

      <div className="contact-cards">
        <div className="card">
          <h4>Certificate and <span className="blue">Transcript</span></h4>
          <p><strong>Registrar</strong><br />
            ESOFT Metro Campus<br />
            No.03, De Fonseka Place,<br />Colombo 4, Srilanka
          </p>
          <p><strong>Email</strong><br />verifications@esoft.lk</p>
          <p><strong>Call Us on</strong><br />+94 117 572 572</p>
        </div>
        <div className="card">
          <h4>Complaints and <span className="blue">Student Feedback</span></h4>
          <p><strong>SRU Division</strong><br />
            ESOFT Metro Campus<br />
            No.03, De Fonseka Place,<br />Colombo 4, Srilanka
          </p>
          <p><strong>Call Us on</strong><br />+94 117 677 888</p>
          <p><strong>Email</strong><br />sru@esoft.lk</p>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
