import React from 'react'
import { CUSINES } from '../constants'


const Expertise = () => {
  return (
    <section className='container mx-auto px-4'>
      <h3 className='text-center text-3xl mb-8 tracking-tighter lg:text-4xl'>Our Expertise</h3>
      <div>
        {
            CUSINES.map((cusine, index) => (
                <div className='flex items-center py-4 border-b-4 border-neutral-700/40 border-dotted space-x-8'>
                    <p className='text-2xl'>{cusine.number}</p>
                    <div className='w-1/3 flex-shrink-0'>
                        <img src={cusine.image} alt="" className='h-auto rounded-3xl'/>
                    </div>
                    <div className='flex flex-col justify-center'>
                        <p className='text-rose-300 uppercase text-2xl mb-4 tracking-tighter'>{cusine.title}</p>
                        <p className='tracking-tighter text-lg'>{cusine.description}</p>
                    </div>
                </div>
            ))
        }
        
      </div>
    </section>
  )
}

export default Expertise
