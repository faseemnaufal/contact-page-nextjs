import React from 'react';
import Image from 'next/image';
import './Footer.css';
import Bestweblogo from '../../../assets/bestweblogo.png';
import ESUFooter from '../../../assets/esufooter.png';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter, FaGooglePlusG } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="ft-footer">
      <div className="ft-footer-top">
        <h2>#ESULife</h2>
        <div className="ft-social-icons">
            <span className="ft-icon first"><FaFacebookF /></span>
            <span className="ft-icon"><FaLinkedinIn /></span>
            <span className="ft-icon"><FaInstagram /></span>
            <span className="ft-icon"><FaTwitter /></span>
            <span className="ft-icon last"><FaGooglePlusG /></span>
        </div>
      </div>

      <div className="ft-footer-content">
        <div className="ft-footer-column contact">
          <h4>CONTACT DETAILS</h4>
          <p>Hotline Number<br /><strong>+94 117 572 572</strong></p>
          <p>Email<br /><a href="mailto:info@esoft.lk">info@esoft.lk</a></p>
          <p>Head Office (Block E)<br />
            <strong>ESOFT Metro Campus No.03,<br />De Fonseka Place,<br />Colombo 4, Sri Lanka.</strong>
          </p>
         <div className="ft-awards">
            <span className="ft-awards-text">AWARDS</span>
            <Image src={Bestweblogo} alt="Award Seal" className="ft-award-seal" />
         </div>

        </div>

        <div className="ft-footer-column">
          <h4>QUICK LINKS</h4>
          <ul>
            <li>Home</li>
            <li>Student Life</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Careers</li>
            <li>News & Events</li>
            <li>Blogs</li>
            <li>CSR</li>
          </ul>
        </div>

        <div className="ft-footer-column">
          <h4>IMPORTANT LINKS</h4>
          <ul>
            <li>Courses</li>
            <li>Faculties</li>
            <li>Transfer Programmes</li>
            <li>Privacy Policy</li>
            <li>Payment Policy</li>
            <li>Refund Policy</li>
            <li>Quality Policy</li>
            <li>Referrals</li>
          </ul>
        </div>

        <div className="ft-footer-logo">
          {/* <span className="ft-logo-esu">ESU</span> */}
          {/* <div className="ft-esu-footer-logo"> */}
            <Image src={ESUFooter} alt="Award Seal" className="ft-esu-footer-logo" />
          {/* </div> */}
        </div>
      </div>

      <div className="ft-footer-bottom">
        <p>Copyright © 2025 <strong>ESU METRO CAMPUS</strong> All rights reserved. Website Designed And Developed By <a href="#">Web Lankan</a></p>
      </div>
    </footer>
  );
};

export default Footer;
