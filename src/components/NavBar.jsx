import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { FaTimes } from 'react-icons/fa'
import { FaBars } from 'react-icons/fa6'
import { LINKS } from '../constants'

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className='w-full fixed top-4 z-50 flex flex-col'>
      <div className='flex w-full lg:w-[50rem] lg:rounded-full lg:shadow-lg mx-auto justify-between items-center backdrop-blur-lg p-4 '>
        <img src={logo} alt="" width={80} height={22}/>
        {/* <img src={logo} alt="" className='w-24'/> */}
        {/* Nav Links */}
        <div className='hidden lg:flex space-x-6'>
            <a href="" className='white text-white text-sm hover:opacity-50'>Dishes</a>
            <a href="" className='white text-white text-sm hover:opacity-50 border-l-2 border-neutral-300/20 pl-2'>About</a>
            <a href="" className='white text-white text-sm hover:opacity-50 border-l-2 border-neutral-300/20 pl-2'>Mission</a>
            <a href="" className='white text-white text-sm hover:opacity-50 border-l-2 border-neutral-300/20 pl-2'>Expertise</a>
            <a href="" className='white text-white text-sm hover:opacity-50 border-l-2 border-neutral-300/20 pl-2'>Review</a>
            <a href="" className='white text-white text-sm hover:opacity-50 border-l-2 border-neutral-300/20 pl-2'>Contact</a>
        </div>
        {/* Hamburger */}
        <div className='lg:hidden'>
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className='w-full backdrop-blur-lg lg:hidden'>
          {LINKS.map((link, index) => (
            <a href="" className='block p-4 uppercase tracking-tighter'>{link.text}</a>
          ))}
      </div>
    )}
    </nav>
  )
}

export default NavBar
