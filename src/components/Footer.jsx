import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark-100 border-t border-t-purple text-white py-10 px-8">
      <div className="container mx-auto grid md:grid-cols-3 ">

        {/* LEFT — Brand */}
        <div>
          <h2 className="text-2xl font-bold">
            Saksham Sharma 
            <span className="text-purple-500"> Creations</span>
          </h2>
          
          <div className="w-4 h-4 bg-purple-500 rounded-full mt-2"></div>
          <p className="text-gray-400 mt-4">
            Crafting engaging web experiences with modern UI and clean aesthetics.
            Thanks to visit my portfolio
          </p>
        </div>

        {/* CENTER — Quick Links */}
        <div className="mx-auto text-center ">
          <h3 className="text-xl items-center font-semibold mb-3">Quick Links</h3>
          <div className='flex flex-col gap-3 items-center mx-auto'>
            <a href="#home" className=' hover:text-purple-500 transition text-sm'><span>Home</span>
            </a>
            <a href="#about" className='text-sm hover:text-purple-500 transition'><span>About</span> 
            </a>
            <a href="#education" className='text-sm hover:text-purple-500 transition'><span>Education</span> 
            </a>
            <a href="#skills" className='text-sm hover:text-purple-500 transition'><span>Skills</span>
            </a>
            <a href="#projects" className=' text-sm hover:text-purple-500 transition'><span>Projects</span>
            </a>
            <a href="#contact" className=' text-sm hover:text-purple-500 transition'><span>Contact</span>
            
            </a>
          </div>
        </div>

        {/* RIGHT — Social Icons */}
        <div className="flex justify-center md:justify-end space-x-6 mt-6 md:mt-0">
          <a href="https://github.com/Saksham13sharma" className="hover:text-purple-500 transition text-2xl"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/saksham-sharma-852522354" className="hover:text-purple-500 transition text-2xl"><FaLinkedinIn /></a>
          <a href="https://www.instagram.com/saksham.sharma_13?igsh=a3psZDY2dHNyZnV2" className="hover:text-purple-500 transition text-2xl">
            <FaInstagram/>
          </a>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="text-center text-gray-500 mt-10 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} Saksham Sharma Creations. All Rights Reserved.
      </div>
    </footer>
  )
}

export default Footer