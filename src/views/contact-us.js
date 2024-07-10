import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import ContactForm7 from '../components/contact-form7'
import Footer from '../components/footer'
import FloatingButton from '../components/floatingbutton';
import './contact-us.css'

const ContactUs = (props) => {
  return (
    <div className="contact-us-container">
      <Helmet>
        <title>ContactUs - SendIT App</title>
        <meta property="og:title" content="ContactUs - SendIT App" />
      </Helmet>
      <div className="contact-us-navbar1">
        <Navbar rootClassName="navbar-root-class-name2"></Navbar>
      </div>
      <div className="contact-us-contactform2">
        <ContactForm7></ContactForm7>
      </div>
      <Footer rootClassName="footer-root-class-name"></Footer>
      <FloatingButton/>
    </div>
  )
}

export default ContactUs
