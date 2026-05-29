import React from 'react'
import { motion } from 'framer-motion'
import { skills } from '../assets/assets'
import { div } from 'framer-motion/m'
import { span } from 'framer-motion/client'

const Skills = () => {
    return (
        <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{duration: 1, ease: 'easeOut'}} viewport={{ once: false}} id='skills' className='py-20 bg-dark-100'>
            <div className="container mx-auto px-6">
                <h2 className='text-3xl text-center mb-4 font-bold'>My
                    <span className='text-purple'> Skills</span>
                </h2>
                <p className='text-gray-300 text-center max-w-2xl mx-auto mb-16'>The technologies I use to design, build, and optimize modern web projects.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {
                        skills.map((skill,index)=>(
                            <div key={index} className='bg-dark-300 rounded-2xl p-6 hover:translate-y-2 transition duration-300 cursor-pointer '>
                                <div className='items-center mb-4'>
                                    <skill.icon className='text-purple w-12 h-12 mr-6 mb-3'/>
                                    <h3 className='text-xl font-semibold mb-3'>{skill.title}</h3>
                                    <p className='text-gray-300 mb-4'>{skill.description}</p>
                                    <div className='flex flex-wrap gap-2'>
                                        {skill.tags.map((tech)=>(
                                            <span key={tech} className='px-3 py-1 rounded-full bg-dark-400 text-sm'>{tech}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </motion.div>
    )
}

export default Skills
