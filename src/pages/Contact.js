import React, { useState } from 'react';
import './Contact.css'; // Import your CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Assuming you want to send an email (this is not done directly via frontend JS due to security reasons)
    // Here you can use a service like EmailJS or similar to send an email from your backend
    window.location.href = `mailto:geriancayetano@gmail.com?subject=Contact Form Submission&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AMessage: ${formData.message}`;
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div id="contact" className="bg-secondary bg-black">
      <div className="container-fluid mt-3">
        <div className="cols">
        <center> <h1 className="text fw-bold text-white mt-3 pt-3">Get in touch, <span className="alex bg-violet">Let's talk!</span></h1></center>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6">
           <center><form onSubmit={handleSubmit} className="contact-form">
              <div className="mb-3">
                <label htmlFor="name" className="form-label text-white">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label text-white">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label text-white">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
              <div className="social-icons">
              <a href="https://www.facebook.com/daralfeche" target="_blank" rel="noopener noreferrer" className="btns btn-social">
                        <FontAwesomeIcon icon={faFacebook} size="2x" className="facebook" />
                      </a>
                      <a href="https://www.instagram.com/alexalfeche?igsh=Mzlhc29vYnYyaWl6" target="_blank" rel="noopener noreferrer" className="btns btn-social">
                        <FontAwesomeIcon icon={faInstagram}  size="2x" className="instagram" />
                      </a>
                     
              </div>
            </form>
            </center> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
