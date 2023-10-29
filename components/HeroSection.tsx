"use client"
import React from 'react'
import Image from 'next/image'
import { Link } from 'react-scroll'

const HeroSection = () => {
  return (
    <section id="home">
        <div className='flex flex-col text-center items-center justify-center mr-4 my-10 py-16 md:flex-row md:space-x-4 md:text-left md:py-52 sm:py-32'>
            <div className='md:mt-2 md:w-4/5'>
                <h1 className='font-bold text-4xl mt-6 md:text-7xl md:mt-0 '>Hi, I'm Gabriel!</h1>
                <p className='text-lg mt-4 mb-6 md:text-2xl'>
                    I would love to take a footstep into programming industry be it web development or data science
                </p>
                <div className='flex flex-row  space-x-4 mx-4 mt-12 justify-center md:justify-start'>
                    <Link
                     to="about"
                     className='w-1/2 md:w-32 text-neutral-100 text-center font-semibold px-2 py-3 bg-teal-600 rounded shadow border-2 border-teal-600 hover:animate-pulse hover:cursor-pointer'
                     activeClass='active'
                     spy={true}
                     smooth={true}
                     offset={-100}
                     duration={500}
                    >
                    Learn More
                    </Link>
                    <Link
                     to="projects"
                     className='w-1/2 md:w-32 text-neutral-100 text-center font-semibold px-2 py-3 bg-teal-600 rounded shadow border-2 border-teal-600 hover:animate-pulse hover:cursor-pointer'
                     activeClass='active'
                     spy={true}
                     smooth={true}
                     offset={-100}
                     duration={500}
                    >
                    Projects
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection