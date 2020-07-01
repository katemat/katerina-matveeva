import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div id="contact" className="Contact">
      <img
        className="responsive"
        src="/lauren-mancke-aOC7TSLb1o8-unsplash.jpg"
        alt="contact me"
      />
      <div className="Contact-container">
        <p className="contact-offer">
          I would be happy to meet you for coffee or tea{' '}
        </p>
        <div className="contact-offer">
          Otherwise, I'd love to hear from you via
          <a
            className="linkedin-link"
            href="https://www.linkedin.com/in/katerina-matveeva/"
            target="blank"
          >
            <p>LinkedIn</p>
          </a>
        </div>
        <div className="contact-links">
          <a
            href="https://drive.google.com/file/d/1yXSWduAKEAjkrsbcS6tTfXcmaQYeNd6I/view?usp=sharing"
            target="blank"
            title="download CV"
          >
            <i className="fas fa-file-pdf"></i>
          </a>
          <a href="https://github.com/katemat" target="blank">
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/katerina-matveeva/"
            target="blank"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;