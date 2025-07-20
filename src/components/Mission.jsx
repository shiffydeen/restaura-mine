import React from 'react'
import mission from '../assets/mission.mp4'
import { MISSION } from '../constants'
import { section } from 'framer-motion/client'


const Mission = () => {
  return (
    <section className='container mx-auto py-6'>
        <h2 className='text-3xl lg:text-4xl mb-8 text-center'>Our Mission</h2>
        <div className='relative flex justify-center items-center'>
            <div className='bg-black/40 absolute inset-0 w-full h-full rounded-3xl'/>
            <video src={mission} className='w-full rounded-3xl' autoPlay playsInline loop/>
            <p className='absolute max-w-lg lg:text-3xl tracking-tighter z-50'>{MISSION}</p>
        </div>
    </section>
  )
}

export default Mission
