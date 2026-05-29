import React from 'react'
import { motion } from 'framer-motion'
import { assets } from "../assets/assets"   // if you keep resume here

const Education = () => {
  const resumeLink = assets.ResumePDF  // your resume file path

  const educationData = [
    {
      level: "B.Tech (Information Technology)",
      year: "2022 – 2026",
      school: "AKTU University",
      desc: "Recently completed my final-year B.Tech IT examinations and focusing on building real-world projects in frontend and modern web development.",
      precent:"Result Awaited"
    },
    {
      level: "12th (PCM)",
      year: "2022",
      school: "UK Board",
      desc: "Completed senior secondary education with Physics, Chemistry and Mathematics.",
      precent:"86%"
    },
    {
      level: "10th",
      year: "2020",
      school: "UK Board",
      desc: "Completed high school with distinction and strong academic foundation.",
      precent:"81%"
    }
  ];

  return (
    <motion.div 
      id='education'
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6 }} 
      viewport={{ once: false }}
      className='py-10 bg-dark-200'
    >
      <div className='container mx-auto px-6'>
        
        {/* Heading */}
        <h2 className='text-3xl font-bold mb-4 text-center'>
          My <span className='text-purple-500'>Education</span>
        </h2>
        <p className='text-gray-300 text-center max-w-2xl mx-auto mb-16'>
          A quick look at my academic journey and qualifications
        </p>

        {/* Education Cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {educationData.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className='bg-dark-300 p-6 rounded-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer'
            >
              <h3 className='text-xl font-semibold mb-2'>{item.level}</h3>
              <div className='flex justify-between'>
              <p className='text-purple-400 mb-1 text-sm'>{item.year}</p>
               <span className='px-3 py-1 rounded-full bg-dark-400 text-sm'>{item.precent}</span>
              </div>
              <p className='text-gray-300 font-medium'>{item.school}</p>
              <p className='text-gray-400 mt-3 text-sm'>{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Resume Button */}
     {/*    <div className='text-center mt-12'>
          <a 
            href={resumeLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            download
          >
            <button className='bg-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-purple-700 transition-all'>
              View / Download Resume
            </button>
          </a>
        </div> */}
      </div>
    </motion.div>
  )
}

export default Education