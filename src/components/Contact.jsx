import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaFileMedicalAlt, FaGithub, FaInstagram, FaLinkedin, FaMailBulk, FaMailchimp, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault()
    const { name, email, message } = formData
    const whatsappMessage = `Hi Saksham, I'm ${name}. Email: ${email}. Message: ${message}`
    const whatsappURL = `https://wa.me/6398553009?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappURL, '_blank')
  }

  return (
    <motion.div initial={{ opacity: 0, y: 50 }} 
    whileInView={{ opacity: 1, y: 0 }} 
    transition={{duration: 0.5, ease: 'easeOut'}} 
    viewport={{ once: false}}
    id='contact' className='md:py-10 py-15 bg-dark-200'>
        <div className='container mx-auto px-6'>
            <h2 className='text-3xl text-center font-bold mb-4'>Get In 
                <span className='text-purple'> Contact</span>
            </h2>
            <p className='text-gray-300 mb-16 text-center max-w-2xl mx-auto'>Have a project in mind oe want to colaborate? Let's talk!</p>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 max-w-5xl mx-auto'>
                {/* form */}
                <div>
                    <form onSubmit={handleWhatsAppSubmit} className='space-y-6'>
                        <div>
                            <label htmlFor="name" className='block text-gray-300 mb-2'>Your Name</label>
                            <input type="text" name="name" value={formData.name} onChange={handleInputChange} required className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none'/>
                        </div>     
                        <div>
                            <label htmlFor="email" className='block text-gray-300 mb-2'>Email Address</label>
                            <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none'/>
                        </div>     
                        <div>
                            <label htmlFor="message" className='block text-gray-300 mb-2'>Message</label>
                            <textarea name="message" value={formData.message} onChange={handleInputChange} required className='w-full h-30 bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none'></textarea>
                        </div>   
                        <button type='submit' className='w-full px-6 py-3 bg-purple rounded-lg font-medium hover:bg-green-600 transition duration-300'>Send on WhatsApp</button>  
                    </form>
                </div>
                {/* content */}
                <div className='space-y-8 md:mt-4'>
                    <div className='flex-align-items-start'>
                        <div className='text-purple text-2xl mr-4'>
                            <FaMapMarkerAlt/>
                        </div>
                        <div>
                            <h3 className='text-lg font-semibold mb-2'>Location</h3>
                            <p className='text-gray-300'>Sector-22 Noida, Uttar Pradesh</p>
                        </div>
                    </div>
                    <div className='flex-align-items-start'>
                        <div className='text-purple text-2xl mr-4'>
                            <FaPhoneAlt/>
                        </div>
                        <div>
                            <h3 className='text-lg font-semibold mb-2'>Phone No.</h3>
                            <p className='text-gray-300'>+91 6398553009</p>
                        </div>
                    </div>
                    <div className='flex-align-items-start'>
                        <div className='text-purple text-2xl mr-4'>
                            <FaEnvelope/>
                        </div>
                        <div>
                            <h3 className='text-lg font-semibold mb-2'>Email</h3>
                            <p className='text-gray-300'>samuk0398@gmail.com</p>
                        </div>
                    </div>

                    <div className='pt-4'>
                        <h3 className='text-lg font-semibold mb-4'>Follow Me</h3>
                        <div className='flex space-x-4'>
                            <Link to="https://github.com/Saksham13sharma" className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple  hover:border hover:border-purple hover:text-white hover:bg-dark-100 transition duration-300'>
                                <FaGithub/>
                            </Link>
                            <Link to="https://www.linkedin.com/in/saksham-sharma-852522354" className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple  hover:border hover:border-purple hover:text-white hover:bg-dark-100 transition duration-300'>
                                <FaLinkedin/>
                            </Link>
                            <Link to="https://www.instagram.com/saksham.sharma_13?igsh=a3psZDY2dHNyZnV2" className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple  hover:border hover:border-purple hover:text-white hover:bg-dark-100 transition duration-300'>
                                <FaInstagram/>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>

        </div>
      
    </motion.div>
  )
}

export default Contact
