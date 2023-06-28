import React from 'react'

const ContactForm = () => {
  const [formStatus, setFormStatus] = React.useState('Send')

  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
  }
  
  return (
    <div className="container mt-5">
      <h2 className="mb-3">CONTACT US</h2>
      <p>Are you intrigued by a specific vehicle listed on our site? Or perhaps you're on the hunt for a particular model that
        isn't currently in our inventory? At JDM Import house, we're committed to helping you navigate your Japanese Automotive
        journey. Please utilize the contact form provided below to express your interests or voice your inquiries, ensuring
        to include as many details as possible to facilitate an efficient and comprehensive response from our end.
      </p>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '20px'}}>
        <div className="content-map" style={{flex: 0.45}}>
          <p>JDM Import House</p>
          <p>15076 US-380 ste B2 Krum, TX 76249</p>
          <p>860-556-3401</p>
          <div> 
            <iframe 
              src="https://storage.googleapis.com/maps-solutions-y4s6bik4ct/locator-plus/8fqf/locator-plus.html"
              style={{width: "100%", height: '380px', loading: "lazy"}}>
            </iframe>  
          </div>
        </div>
        <div className="contact-form" style={{flex: 0.45}}>
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label className="form-label" htmlFor="name">
                Name
              </label>
              <input className="form-control" type="text" id="name" required />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input className="form-control" type="email" id="email" required />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="message">
                Message
              </label>
              <textarea className="form-control" id="message" required />
            </div>
            <button className="btn btn-danger" type="submit">
              {formStatus}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default ContactForm
