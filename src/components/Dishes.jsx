import React from 'react'
import dish1 from '../assets/dish1.jpeg'
import { DISHES } from '../constants'

const Dishes = () => {
  return (
    <section className='container mx-auto py-16'>
        <h2 className='text-center text-3xl lg:text-4xl mb-8 tracking-tighter'>Our Dishes</h2>
        <div className='grid grid-cols-1 md:grid-cols-5 gap-8'>
            {DISHES.map((dish, index) => (
                <div>
                    <img src={dish.image} alt="" className='rounded-3xl p-2'/>
                    <div className='p-4'>
                        <h3 className='font-bold text-2xl mb-2 tracking-tighter'>{dish.title}</h3>
                        <p className='text-sm'>{dish.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Dishes
