import React from 'react'
import { CONTACT } from '../constants'


const Contact = () => {
  return (
    <section className='container mx-auto py-16'>
      <h3 className='text-3xl text-center mb-8'>Contact Us</h3>
      <div>
        {CONTACT.map((contact, index) => (
            <p className='text-center text-2xl lg:text-3xl border-b-2 border-dotted py-12 border-neutral-700 tracking-tighter text-neutral-400'>{contact.value}</p>
        ))}
      </div>
    </section>
  )
}

export default Contact
