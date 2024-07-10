import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Hero2 from '../components/hero2'
import Stats1 from '../components/stats1'
import Testimonial16 from '../components/testimonial16'
import Features23 from '../components/features23'
import Features24 from '../components/features24'
import FloatingButton from '../components/floatingbutton'
import Footer from '../components/footer'
import './about-page.css'

const AboutPage = (props) => {
  return (
    <div className="about-page-container">
      <Helmet>
        <title>AboutPage - SendIT App</title>
        <meta property="og:title" content="AboutPage - SendIT App" />
      </Helmet>
      <div className="about-page-navbar1">
        <Navbar rootClassName="navbar-root-class-name"></Navbar>
      </div>
      <div className="about-page-hero2">
        <Hero2></Hero2>
      </div>
      <div className="about-page-stats3">
        <Stats1 rootClassName="stats1-root-class-name"></Stats1>
      </div>
      <div className="about-page-testimonial4">
        <Testimonial16></Testimonial16>
      </div>
      <div className="about-page-features5">
        <Features23></Features23>
      </div>
      <div className="about-page-features51">
        <Features24 rootClassName="features24-root-class-name"></Features24>
      </div>
      <div className="about-page-footer7">
        <Footer rootClassName="footer-root-class-name"></Footer>
        <FloatingButton/>
      </div>
    </div>
  )
}

export default AboutPage
