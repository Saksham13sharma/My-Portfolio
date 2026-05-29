import React, { useState } from 'react'
import { FaXmark, FaBars } from 'react-icons/fa6'

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false)
    return (
        <nav className="fixed w-full z-50 bg-dark-100 backdrop-blur-sm py-4 px-8 nav">
            <div className="container  mx-auto flex justify-between items-center">
                <div>
                    <a href="#home" className="text-3xl font-bold">
                        Saksham Sharma
                        <span className='text-purple-500'> Creations</span>
                        <div className="w-4 h-4 bg-purple-500 rounded-full">
                        </div>
                    </a>
                </div>
                <div className="hidden md:flex space-x-10">
                    <a href="#home" className="relative text-white transition duration-300 hover:text-purple-500 group" >
                        <span>Home</span>
                        <span className="absolute w-0 left-0 -bottom-1 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    <a href="#about" className="relative text-white transition duration-300 hover:text-purple-500 group" >
                        <span>About</span>
                        <span className="absolute w-0 left-0 -bottom-1 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    <a href="#education" className="relative text-white transition duration-300 hover:text-purple-500 group" >
                        <span>Education</span>
                        <span className="absolute w-0 left-0 -bottom-1 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    <a href="#skills" className="relative text-white transition duration-300 hover:text-purple-500 group" >
                        <span>Skills</span>
                        <span className="absolute w-0 left-0 -bottom-1 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    <a href="#projects" className="relative text-white transition duration-300 hover:text-purple-500 group" >
                        <span>Projects</span>
                        <span className="absolute w-0 left-0 -bottom-1 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    <a href="#contact" className="relative text-white transition duration-300 hover:text-purple-500 group" >
                        <span>Contact</span>
                        <span className="absolute w-0 left-0 -bottom-1 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                </div>
                {/* mobile toggler */}
                <div className="md:hidden">
                    {
                        showMenu ? <FaXmark onClick={() => setShowMenu(!showMenu)} className='text-2xl cursor-pointer' /> : <FaBars onClick={() => setShowMenu(!showMenu)} className='text-2xl cursor-pointer' />
                    }


                </div>
            </div>

            {/* mobile menu */}
            {
                showMenu && (
                    <div className="md:hidden mt-4 bg-dark-300 rounded-lg p-4 flex flex-col space-y-4 text-center justify-center w-11/12 max-w-xs mx-auto shadow-lg">
                        <a href="#home" className="relative text-white transition duration-300 hover:text-purple-500 group" onClick={() => setShowMenu(!showMenu)} >
                            <span>Home</span>
                            <span className="absolute w-0 left-0 -bottom-1 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                        <a href="#about" className="relative text-white transition duration-300 hover:text-purple-500 group" onClick={() => setShowMenu(!showMenu)} >
                            <span>About</span>
                            <span className="absolute w-0 left-0 -bottom-1 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                        <a href="#skills" className="relative text-white transition duration-300 hover:text-purple-500 group" onClick={() => setShowMenu(!showMenu)} >
                            <span>Skills</span>
                            <span className="absolute w-0 left-0 -bottom-1 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                        <a href="#projects" className="relative text-white transition duration-300 hover:text-purple-500 group" onClick={() => setShowMenu(!showMenu)} >
                            <span>Projects</span>
                            <span className="absolute w-0 left-0 -bottom-1 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                        <a href="#contact" className="relative text-white transition duration-300 hover:text-purple-500 group" onClick={() => setShowMenu(!showMenu)} >
                            <span>Contact</span>
                            <span className="absolute w-0 left-0 -bottom-1 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    </div>

                )
            }
        </nav>
    )
}

export default Navbar
