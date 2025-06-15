import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faWhatsapp, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
const Footert = () => {
  return (
  
      <footer>
        <div className="footer-content">
          <div className="footer-section footer-info">
            <h3>GroupFund</h3>
            <p>Helping friends manage finances together since 2025</p>
            <p>Established: January 15, 2025</p>
          </div>
          <div className="footer-section">
            <h3>Connect With Us</h3>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebookF} />
      </a>
      <a href="https://wa.me/yourwhatsapplink" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
            </div>
          </div>
        </div>
        <div className="copyright">
          &copy; 2023 GroupFund. All rights reserved.
        </div>
      </footer>
   )
}

export default Footert