import React from 'react'
import { REVIEW } from '../constants'
import xaviour from '../assets/xaviour.jpeg'
import customer1 from '../assets/customer1.jpeg'
import customer2 from '../assets/customer2.jpeg'
import customer3 from '../assets/customer3.jpeg'
import customer4 from '../assets/customer4.jpeg'



const Reviews = () => {
  return (
    <section className='container mx-auto mt-12 mb-8'>
      <div>
        <p className='lg:text-[3.5rem] text-3xl tracking-tighter font-light lg:mx-40 lg:mt-40 mb-10 leading-normal'>{REVIEW.content}</p>
        <div className='flex justify-center items-center gap-6'>
            <img src={xaviour} alt="" className='rounded-full border' width={80} height={80}/>
            <div>
                <h3>{REVIEW.name}</h3>
                <p>{REVIEW.profession}</p>
            </div>
        </div>
      </div>
      <div className='flex flex-col items-center md:flex-row justify-center gap-2 mt-14'>
        {[customer1, customer2, customer3, customer4].map((customer, index) => (
            <img src={customer} alt="" className='h-[300px] w-[200px] rounded-br-3xl rounded-tl-3xl object-cover'/>
        ))}
      </div>
    </section>
  )
}

export default Reviews
