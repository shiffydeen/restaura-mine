import React from 'react'
import { SOCIAL_MEDIA_LINKS } from '../constants'


const Footer = () => {
  return (
    <section className='container mx-auto mt-8 mb-5'>
        <div className='flex gap-8 justify-center mb-5'>
            {SOCIAL_MEDIA_LINKS.map((links) => (
                <a href="">
                    {links.icon}
                </a>
            ))}
      </div>
      <p className='mt-8 text-center text-neutral-500'>©compileTab. All rights reserved</p>
    </section>
  )
}

export default Footer
