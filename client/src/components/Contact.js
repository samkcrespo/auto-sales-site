import React from 'react';
import { BiItalic } from 'react-icons/bi';
import ContactForm from './ContactForm';

const Contact = () => {
  const [formStatus, setFormStatus] = React.useState('Send Message');

  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Submitting...');
    const {name, email, phone, message } = e.target.elements;
    let conFom = {
      name: name.value,
      email: email.value,
      phone: phone.value,
      message: message.value,
    };
    console.log(conFom);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-3" id="archivo">
        Contact Us
      </h2>
      <div style={{ backgroundColor: 'rgba(40, 40, 40, 0.7)', padding: '15px', borderRadius: '10px' }}>
        <p>
          Are you intrigued by a specific vehicle we have listed online? Or perhaps you're on the hunt for a particular model that
          isn't currently in our inventory? At JDM Import house, we're committed to helping you navigate your Japanese Automotive
          journey. Please utilize the contact form provided below to express your interests or voice your inquiries, ensuring
          to include as many details as possible to facilitate an efficient and comprehensive response from our end.
        </p>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: '20px',
        }}
      >
        <div
          className="content-map"
          style={{
            flex: 0.45,
            backgroundColor: 'rgba(40, 40, 40, 0.7)',
            padding: '15px',
            borderRadius: '10px',
          }}
        >
          <div className="im-details"></div>
          <div>
            <iframe
              src="https://storage.googleapis.com/maps-solutions-y4s6bik4ct/locator-plus/7nli/locator-plus.html"
              style={{ width: '100%', height: '380px', loading: 'lazy' }}
            ></iframe>
          </div>
          <p style={{ fontStyle: 'italic' }}>Phone: 860-556-3401</p>
        </div>
        <div
          className="contact-form"
          id="archivo"
          style={{
            flex: 0.45,
            backgroundColor: 'rgba(40, 40, 40, 0.7)',
            padding: '15px',
            borderRadius: '10px',
            minHeight: '200px',
            maxHeight: 'auto',
          }}
        >
          <ContactForm onSubmit={onSubmit} formStatus={formStatus} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
