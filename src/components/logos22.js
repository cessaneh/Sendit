import React from 'react'

import PropTypes from 'prop-types'

import './logos22.css'

const Logos22 = (props) => {
  return (
    <div className="logos22-container thq-section-padding">
      <div className="logos22-max-width thq-section-max-width">
        <h2 className="logos22-text thq-heading-2">{props.heading1}</h2>
        <span className="logos22-text1">{props.text}</span>
      </div>
    </div>
  )
}

Logos22.defaultProps = {
  logo4Alt: 'Logo4',
  logo2Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
  logo4Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
  logo3Alt: 'Logo3',
  logo2Alt: 'Logo2',
  logo5Alt: 'Logo5',
  heading1: 'Why Choose SendIT',
  logo3Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
  logo1Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
  logo5Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
  logo1Alt: 'Logo1',
  text: 'Reliable Courier Services Tailored for You',
  text1: 'Text',
}

Logos22.propTypes = {
  logo4Alt: PropTypes.string,
  logo2Src: PropTypes.string,
  logo4Src: PropTypes.string,
  logo3Alt: PropTypes.string,
  logo2Alt: PropTypes.string,
  logo5Alt: PropTypes.string,
  heading1: PropTypes.string,
  logo3Src: PropTypes.string,
  logo1Src: PropTypes.string,
  logo5Src: PropTypes.string,
  logo1Alt: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
}

export default Logos22
