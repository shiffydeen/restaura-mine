import React from 'react'
import { ABOUT } from '../constants'
import about from '../assets/about.jpeg'


const About = () => {
  return (
    <section className='container mx-auto mb-8'>
        <h2 className='text-3xl mb-8 text-center'>About Us</h2>
        <div className='flex flex-wrap'>
            <img src={about} alt="" className='w-full lg:w-1/2 rounded-3xl lg:-rotate-3 p-4'/>
            <div className='w-full lg:w-1/2 px-2'>
                <h2 className='text-4xl lg:text-6xl tracking-tighter'>{ABOUT.header}</h2>
                <div className='bg-rose-300 w-36 h-2 lg:-rotate-3 mb-8 mt-1'></div>
                <p className='text-2xl m-8 leading-relaxed tracking-tighter'>{ABOUT.content}</p>
            </div>
        </div>
    </section>
  )
}

export default About
