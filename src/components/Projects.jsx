import React from 'react'
import { motion } from 'framer-motion'
import { projects } from '../assets/assets'
import ProjectCard from './ProjectCard'
import { FaArrowRight } from 'react-icons/fa'

const Projects = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }} 
    whileInView={{ opacity: 1, y: 0 }} 
    transition={{duration: 1, ease: 'easeOut'}} 
    viewport={{ once: false, }}
     id="projects" className='md:py-20 bg-dark-200'>
        <div className='container mx-auto px-6'>
            <h2 className='text-2xl text-center font-bold mb-4'>
                My <span className='text-purple'>Projects</span>
            </h2>
            <p className='text-gray-300 text-center max-w-2xl mx-auto mb-16'>Dynamic web project built for real functionality</p>

            {/* projects-cards */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
                {
                    projects.map((project,index)=>(
                        <ProjectCard key={index} {...project}/>
                    ))
                }
            </div>
            {/* <div className='text-center mt-12'>
                <Link to="" className='inline-flex items-center px-6 py-3 border border-purple font-medium rounded-lg hover:bg-purple/20 transition duration-300'>
                    <span>View More Projects</span>
                    <FaArrowRight className='ml-2'/>
                </Link>
            </div> */}
        </div>
      
    </motion.div>
  )
}

export default Projects
