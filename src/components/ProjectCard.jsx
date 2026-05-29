import React from 'react'
import { Link } from 'react-router-dom'

const ProjectCard = ({ title, description, image, icons = [], tech = [], demo = '#', code = '#' }) => {
  return (
    <div className='bg-dark-100 rounded-2xl overflow-hidden hover:-translate-y-2 transition duration-300 cursor-pointer'>
      <img src={image} alt={title} className='w-full h-60 object-cover' />
      <div className='p-6 bg-dark-100'>
        <h3 className='text-xl font-semibold mb-2'>{title}</h3>
        <p className='text-gray-300 text-sm mb-4'>{description}</p>
        <div className='flex flex-wrap gap-3 mb-3'>
          {tech.map((item, index) => (
            <span key={index} className='py-1 px-3 bg-dark-300 rounded-full text-sm'>{item}</span>
          ))}
        </div>
        <div className='flex items-center gap-3 mb-3'>
          {icons.map((Icon, index) => (
            <Icon key={index} className='text-purple w-6 h-6' />
          ))}
        </div>
        <div className='flex gap-2'>
          <Link
            to={demo || '#'}
            target='_blank'
            rel='noreferrer'
            className='flex-1 text-center px-4 py-2 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300'
          >
            View Demo
          </Link>
          <Link
            to={code || '#'}
            target='_blank'
            rel='noreferrer'
            className='flex-1 text-center px-4 py-2 border border-purple rounded-lg font-medium hover:bg-purple transition duration-300'
          >
            Code
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
