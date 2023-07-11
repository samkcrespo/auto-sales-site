import React, {useState} from 'react';
import axios from 'axios';

const ContactForm = ({ onSubmit, formStatus }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');

  const apiUrl = process.env.REACT_APP_API_URL; // Retrieve API URL from .env


  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      contact: {
        name,
        email,
        phone,
        message
      }
    };

    try {
      await axios.post(`${apiUrl}/contacts`, formData);
      alert('Message sent successfully!');
      // Reset form fields
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      Drop us a line.
      <div className="mb-3">
        <input
          className="form-control"
          style={{
            backgroundColor: 'rgba(60, 60, 60, 0.7)',
            borderColor: 'rgba(60, 60, 60, 0.7)',
            color: 'rgba(150, 150, 150, 1)',
          }}
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <input
          className="form-control"
          style={{
            backgroundColor: 'rgba(60, 60, 60, 0.7)',
            borderColor: 'rgba(60, 60, 60, 0.7)',
            color: 'rgba(150, 150, 150, 1)',
          }}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <input
          className="form-control"
          style={{
            backgroundColor: 'rgba(60, 60, 60, 0.7)',
            borderColor: 'rgba(60, 60, 60, 0.7)',
            color: 'rgba(150, 150, 150, 1)',
          }}
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <textarea
          className="form-control"
          style={{
            backgroundColor: 'rgba(60, 60, 60, 0.7)',
            borderColor: 'rgba(60, 60, 60, 0.7)',
            color: 'rgba(150, 150, 150, 1)',
            rows: '10',
            cols: '50',
          }}
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
      <button className="btn btn-danger" type="submit">
        {formStatus}
      </button>
    </form>
  );
};

export default ContactForm;

