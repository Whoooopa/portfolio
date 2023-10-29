"use client"
import React, { useState } from 'react'
import { SiPython, SiJavascript, SiHtml5, SiCss3, SiC, SiMysql} from "react-icons/si";
import { BiLogoJava } from "react-icons/bi";
import { GiArtificialIntelligence, GiBrain } from "react-icons/gi";
import { BsDatabaseGear } from "react-icons/bs";

const skills = [
    {
        skill:"HTML",
        logo: <SiHtml5 size={50}></SiHtml5>
    },
    {
        skill:"CSS",
        logo: <SiCss3 size={50}></SiCss3>
    },
    {
        skill:"Python",
        logo: <SiPython size={50}></SiPython>
    },
    // {
    //     skill:"Java Script",
    //     logo: <SiJavascript size={50}></SiJavascript>
    // },
    {
        skill:"Java",
        logo: <BiLogoJava size={50}></BiLogoJava>
    },
    // {
    //     skill:"C",
    //     logo: <SiC size={50}></SiC>
    // },
    {
        skill:"Machine Learning",
        logo: <GiArtificialIntelligence size={50}></GiArtificialIntelligence>
    },
    {
        skill:"Deep Learning",
        logo: <GiBrain size={50}></GiBrain>
    },
    {
        skill:"Microsoft SSMS",
        logo: <BsDatabaseGear size={50}></BsDatabaseGear>
    },
    {
        skill:"My SQL",
        logo: <SiMysql size={50}></SiMysql>
    }
    
]

const AboutSection = () => {
  return (
    <section id='about'>
        <div className='my-10 pb-12 md:pt-2 md:pb-32'>
            <h1 className='text-center font-bold text-4xl mb-4'>About Me
                <hr className='w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded' />
            </h1>
            <div className='flex flex-col space-y-10 items-stretch justify-center align-top md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10'>
                <div className='md:w-1/3 px-10 md:px-0'>
                    <h1 className='text-center font-bold text-2xl mb-6 md:text-left'>Get to know me</h1>
                    <p className='text-center md:text-start'>Hello, my name is Gabriel Yohanes. I am currently on my third year of study in Computer Science Department with a deeper focus on Intelligent Systems.</p>
                    <br />
                    <p className='text-center md:text-start'>I love trying out new things, and exploring all of the possible paths this industry has to offer. During this journey, i found one thing that i love the most, that is making sense of how and why a solution work, down to every piece of logic.</p>
                    <br />
                    <p className='text-center md:text-start'>I believe that consistency and persistence are the keys to hone one's skills. I am open to any opportunity that can strengthen my skills in any areas that requires coding such as web development or data science</p>
                </div>
                <div className='md:w-2/3'>
                    <h1 className='text-center font-bold text-2xl mb-6 md:text-left'>My Skills</h1>
                    <div className='flex flex-wrap justify-center md:justify-start'>
                        {skills.map((item, idx) =>{
                            return <div className="transition ease-in-out delay-100 w-36 rounded-md overflow-hidden shadow-lg pt-4 mx-2 mt-3 bg-neutral-50/[.02] hover:-translate-y-3 hover:shadow-[0px_20px_30px_-10px_rgba(38,57,77,0.7)]" key={idx}>
                            <div className='flex justify-center'>{item.logo}</div>
                            <div className="flex px-6 py-4 h-24 justify-center">
                              <div className="inline-block font-bold text-md mb-2 text-center">{item.skill}</div>
                            </div>
                          </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection