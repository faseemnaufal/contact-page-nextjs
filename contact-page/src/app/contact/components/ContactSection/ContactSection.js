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
                    <p>Address</p>
                    <p className='contact-p-margin'><strong>Head Office (Block E)<br />
                    ESOFT Metro Campus No.03,<br />
                    De Fonseka Place, Colombo 4 Srilanka</strong>
                    </p>
                    <p>Call Us on<br /><strong className='contact-p-margin'>+94 117 572 572</strong></p>
                    <p className='contact-p-margin'>Email<br /><strong className='contact-p-margin'>info@esoft.lk</strong></p>
                </div>
                </div>
            </div>
        </div>

      <div className="contact-cards">
        <div className="card">
          <h4>Certificate and <span className="blue">Transcript</span></h4>
          <p>Address</p>
          <p className='contact-p-margin-bottom'><strong>Registrar<br />
            ESOFT Metro Campus<br />
            No.03, De Fonseka Place,<br />Colombo 4, Srilanka</strong>
          </p>
          <div className='contact-card-bottom-line'>
            <p>Email<br /><strong>verifications@esoft.lk</strong></p>
            <p>Call Us on<br /><strong>+94 117 572 572</strong></p>
          </div>
        </div>
        <div className="card">
          <h4>Complaints and <span className="blue">Student Feedback</span></h4>
          <p>Address</p>
          <p><strong>SRU Division<br />
            ESOFT Metro Campus<br />
            No.03, De Fonseka Place,<br />Colombo 4, Srilanka</strong>
          </p>
          <div className='contact-card-bottom-line'>
            <p>Call Us on<br /><strong>+94 117 677 888</strong></p>
            <p>Email<br /><strong>sru@esoft.lk</strong></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
