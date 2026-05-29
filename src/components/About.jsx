import React from 'react'
import { motion } from 'framer-motion'
import { aboutInfo, assets } from "../assets/assets"

const About = () => {
    return (
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{
            duration: 0.3, ease: 'easeOut'
        }} viewport={{ once: true }} id='about' className='py-15 bg-dark-200' >
            <div className='container mx-auto px-6'>
                {/* heading */}
                <h2 className='text-3xl font-bold mb-4 text-center'>About
                    <span className='text-purple-500'> Me</span>
                </h2>
                <p className='text-gray-300 text-center max-w-2xl mx-auto mb-14 md:mb-10'>Get to know more about my background and passion</p>
            </div>

            {/* my journey with image  */}
            <div className='container mx-auto px-6'>
              <div className="flex flex-col md:flex-row items-center justify-between md:justify-center gap-6 md:gap-6 lg:gap-10 md:space-x-6 mx-auto">
                {/* image-section */}
                <div className="rounded-2xl w-full md:w-1/2 lg:w-1/3 overflow-hidden mx-auto">
                    <motion.img
                        initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{
                            duration: 0.3, ease: 'easeOut'
                        }} viewport={{ once: false }}
                        className='w-full h-64 md:h-98 lg:h-screen object-contain'
                        src={assets.MyJourneyImg} alt="profile" />
                </div>
                {/* text-content */}
                <motion.div
                initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{
                            duration: 0.6, ease: 'easeOut'
                        }} viewport={{ once: false }}
                       className='w-full md:w-1/2 lg:w-1/2 mx-auto ' >

                        <div className='rounded-2xl p-8 '>
                            <h3 className='text-2xl mb-6 font-semibold'>My Journey</h3>
                            <p className='text-gray-300 mb-6 text-justify'>I’m a passionate frontend developer who also works on the backend, allowing me to build complete and scalable web applications. From clean UI/UX to optimized server-side logic, I enjoy working across the full stack to deliver smooth and well-structured user experiences.


</p>
                            <p className='text-gray-300 mb-12 text-justify'>Along with full-stack development, I explore AI integration, using modern AI tools and APIs to automate workflows, enhance user experiences, and create smarter applications. I love turning ideas into real, meaningful products that are modern, responsive, and user-centered.
</p>

                            {/* cards */}
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                {
                                    aboutInfo.map((data,index)=>(
                                        <div key={index} className='bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer'>
                                            <div className='text-purple text-4xl mb-4'>
                                                <data.icon/>
                                            </div>
                                            <h3 className='text-xl font-semibold mb-3'>{data.title}</h3>
                                            <p className='text-gray-300'>{data.description}</p>
                                        </div>
                                    ))
                                }
                            </div>

                        </div>

                                </motion.div>
                            </div>
                        </div>

                </motion.div>
    )
}

export default About
