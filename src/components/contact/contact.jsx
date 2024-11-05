
import React from "react";
import "./Contact.css";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";
import msg_icon from "../../assets/msg-icon.png";

const Contact = () => {


  return (
    <div className="contact" id="contact">
      <div className="contact-col">
        <h3>
          Send us a Message <img src={msg_icon} alt="Message Icon" />
        </h3>
        <p>
          Have questions or feedback? We're here to help! Email us at contact@cricgeek.com for general inquiries or support@cricgeek.com for technical issues. We aim to respond promptly to all messages. Your input helps make CricGeek better for cricket fans everywhere.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="Mail Icon" /> support@cricgeek.com
          </li>
          <li>
            <img src={phone_icon} alt="Phone Icon" /> +91987654321
          </li>
          <li>
            <img src={location_icon} alt="Location Icon" /> 73/c Jayalaksmi Nilaya,Bengaluru,Karnataka India
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form  action="https://formspree.io/f/mgvwvdoy" method="POST" >
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
          />

          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter Your Phone Number"
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Please Enter Your Message"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit Now <img src={white_arrow} alt="Arrow Icon" />
          </button>
        </form>
        {/* <span>{result}</span> */}
      </div>
    </div>
  );
};

export default Contact;
