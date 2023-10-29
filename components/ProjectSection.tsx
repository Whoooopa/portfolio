import React from 'react'
import Image from "next/image"
import Link from "next/link"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";
import { SiIeee } from "react-icons/si";
import SlideUp from './SlideUp';

const projects = [
  {
    name: "Chess Piece Image Recognition", 
    description: "I have created a basic Convolutional Neural Network model to classify chess pieces, My group's paper has been accepted and published by AiDAS Conference 2023",
    image: "/chessfinal6.jpg",
    links: [
       {text: "GitHub", url:"https://github.com/Whoooopa/Chess-Piece-Recognition-Convolutional-Neural-Network"},
       {text: "Paper", url:"https://ieeexplore.ieee.org/document/10284718"},

    ],
    tags: ["Deep Learning", "Image Recognition", "Python"],

  },
  {
    name: "Cicada subspecies Recognition", 
    description: "I have created GraphMix, a graph neural network model to identify cicada subspecies using Acoustic Signals on node level graph",
    image: "/cicada7.jpeg",
    links: [
      {text: "GitHub", url:"https://github.com/Whoooopa/Cicada-Species-Classification-Based-on-Acoustic-Signals-Graph-Neural-Network"},
   ],
   tags: ["Deep Learning", "Audio", "PyTorch Geometric", "Python"],

  },
  {
    name: "M&T Clothing Store", 
    description: "My first web project during the first year",
    image: "/mt_web3.png",
    links: [
      {text: "GitHub", url:"https://github.com/Whoooopa/HCI"},
   ],
   tags: ["Web", "Html", "CSS"],
  },
  

]

const ProjectSection = () => {
  return (
    <section id="projects">
      <div className='my-10 pb-12 md:pt-2 md:pb-48'>
      <h1 className='text-center font-bold text-4xl mb-10'>Projects
                <hr className='w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded' />
            </h1>
      <div className='flex flex-col space-y-28'>
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset='-300px 0px -300px 0px'>
                <div className='flex flex-col animate-slideUpCubiBezier animation-delay-2  md:flex-row md:space-x-12'>
                  <div className='pb-3 md:pb-0 md:w-2/5'>
                    <Link href={project.links[0].url} target="_blank"
                    className='flex justify-center items-center'>
                      <Image 
                        src={project.image}
                        alt=""
                        width={275}
                        height={275}
                        className="md:object-cover rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className='md:w-3/5 flex flex-col space-y-5 px-5 md:px-0'>
                      <h1 className='text-4xl font-bold text-center md:text-start'>{project.name}</h1>
                      <p className='text-center md:text-start'>{project.description}</p>
                      <div className='flex flex-row justify-center md:justify-start align-bottom space-x-4'>
                    {project.links.map((link, linkIdx) =>(
                      <Link key={linkIdx} href={link.url} target="_blank">{link.text === "GitHub" ? (
                              <BsGithub
                                size={30}
                                className='hover:-translate-y-1 hover:scale-125 transition-transform'
                              />
                            ) : link.text === "Paper" ? (
                              <SiIeee 
                                size={30}
                                className='hover:-translate-y-1 hover:scale-125 transition-transform'
                              />
                            ) : (
                              link.text
                            )}
                      </Link>
                    ))}
                      </div>
                      <ul className='flex flex-row flex-wrap align-center justify-center md:justify-start space-x-4'>
                        {project.tags.map((tag, tagIdx)=>(
                          <li className='py-1 px-3 rounded-xl my-2 bg-teal-400 text-md text-center' key={tagIdx}>
                            {tag}
                          </li>
                        )
                        )}
                      </ul>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}

      </div>
      </div>
    </section>
  )
}

export default ProjectSection