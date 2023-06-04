import React from 'react'
import CopyRight from './CopyRight';
import About from './About';

const Footer = () => {
  return (
    <div className='absolute bottom-0 left-0 right-0 '>
        <About />
        <CopyRight />
    </div>
  )
}

export default Footer;