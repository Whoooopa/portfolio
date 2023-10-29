import React from 'react'
import {
    AiOutlineGithub,
    AiOutlineLinkedin
} from "react-icons/ai"

const Footer = () => {

  return (
    <footer id="contacts" className='mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl'>
        <hr className='w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0' />
        <div className='mx-auto p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between dark:text-neutral-100'>
            <div>© 2023 Gabriel Yohanes</div>
            <div className='flex flex-row items-center justify-center space-x-2 mb-1'>
                <a href="https://github.com/Whoooopa" target="_blank">
                    <AiOutlineGithub 
                        size={30}
                        className='hover:-translate-y-1 transition-transform cursor-pointer'
                    />
                </a>
                <a href="https://www.linkedin.com/in/gabriel-yohanes/" target="_blank">
                    <AiOutlineLinkedin 
                        size={30}
                        className='hover:-translate-y-1 transition-transform cursor-pointer'
                    />
                </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer