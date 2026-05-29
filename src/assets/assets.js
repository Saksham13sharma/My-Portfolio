import { FaLightbulb, FaPhotoVideo, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe,FaBrain, FaCss3Alt, FaJs, FaHtml5, FaVuejs,FaGoogle, FaFire, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';
import { MdCloudDone } from "react-icons/md";
import { SiTailwindcss, SiHtml5, SiJavascript } from "react-icons/si";

import profileImg from '/profile.jpeg';
import MyJourneyImg from '/Myjourney.png'
import projectImg1 from '/projectImg1.png';
import projectImg2 from '/projectImg2.png';
import projectImg3 from '/projectImg3.png';
import projectImg4 from '/projectImg4.png';





export const assets = {
  profileImg,
  MyJourneyImg,
}



export const aboutInfo = [
  {
    icon: FaLightbulb,
    title: 'Innovative',
    description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
    color: 'text-purple'
  },
  {
    icon: FaPaintBrush,
    title: 'Design Oriented',
    description: 'Beautiful design and user experience are at the heart of everything I create.',
    color: 'text-pink'
  },
  {
    icon: FaCode,
    title: 'Clean Code',
    description: 'I write maintainable, efficient code following best practices and modern patterns.',
    color: 'text-blue'
  },
  {
    icon: FaBrain,
    title: 'AI Powered',
    description: 'I work with modern AI tools, APIs, and automation to build smarter, more dynamic, and scalable Websites.',
    color: 'text-yellow'
  }
];



export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and interactive user interfaces with modern frameworks.',
    tags: ['React', 'JavaScript', 'CSS', 'HTML', 'Bootstrap', 'Tailwind']
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Creating robust server-side applications and RESTful APIs.',
    tags: ['Node.js', 'Express']
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing and optimizing databases for performance and scalability.',
    tags: ['MongoDB']
  },
  {
    title: 'Tools & Technologies',
    icon: FaTools,
    description: 'Essential tools and technologies I use in my development workflow.',
    tags: ['VS Code', 'Git & GitHub', 'Postman', 'Thunder Client', 'MongoDB Compass']
  },
  {
    title: 'AI Tools & Chatbots',
    icon: FaRobot,
    description: 'AI tools I use for automation, creativity, coding and smart workflows.',
    tags: ['Claude', 'Gemini', 'Canva AI', 'Copilot', 'Blackbox AI', 'ChatGPT']
  },
  {
    title: 'Deployment & Hosting ',
    icon: MdCloudDone,
    description: 'Tools I use to deploy, host and optimize web applications smoothly.',
    tags: ['Netlify', 'Vercel', 'Render', 'GitHub Pages', 'GoDaddy']
  },
  {
    title: 'Video & Photo Editing',
    icon: FaPhotoVideo,
    description: 'Transforming raw media into smooth, engaging content through creative editing.',
    tags: ['Capcut', 'VN', 'Inshot', 'Pixlr', 'Canva', 'Remini']
  }
];



export const projects = [
  {
    title: "Learning Management system",
    description: "Clean and responsive LMS platform for seamless course browsing and student learning, progress viewing and and securely purchase courses.",
    image: projectImg1,
    tech: ["MongoDB", "Express.js", "Node.js", "React.js", "Tailwind", "Stripe"],
    icons: [FaDatabase, FaServer, FaNodeJs, FaReact, SiTailwindcss , FaStripe],
    demo: "https://lms-sepia-beta.vercel.app/",
    code: "https://github.com/Saksham13sharma/LMS",
  },
  {
    title: "AI Content Generator",
    description: "A responsive AI chatbot integrated with Google's Gemini 2.5 Flash model for generating fast and accurate AI responses through a clean REST API.",
    image: projectImg3,
    tech: ["React.js", "Node.js", "Google Gemini API", "Google Generative AI SDK"],
    icons: [FaReact, FaNodeJs,FaGoogle, FaRobot],
    demo: "https://my-chat-bot-gem-talk-ai.vercel.app/",
    code: "https://github.com/Saksham13sharma/MyChatBot-GemTalkAI",
  },
  {
    title: "Modern parlour website",
    description: "React-powered parlour system, parlour website where users can browse services and book appointments easily.",
    image: projectImg2,
    tech: ["React.js", "JavaScript", "Tailwind", "HTML", "CSS"],
    icons: [FaReact, FaJs, SiTailwindcss, FaHtml5, FaCss3Alt  ],
    demo: "https://makeover-project.vercel.app/",
    code: "https://github.com/Saksham13sharma/MakeoverProject",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio to showcase projects, skills, and blogs with dark/light mode support.",
    image: projectImg4,
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Markdown"],
    icons: [FaReact, FaCloud],
    demo: "#",
    code: "#",
  },
  /* {
    title: "Chat App",
    description: "A real-time chat application with group messaging, emojis, and file sharing.",
    image: projectImg5,
    tech: ["Socket.IO", "React", "Node.js", "MongoDB"],
    icons: [FaReact, FaNodeJs, FaDatabase],
    demo: "#",
    code: "#",
  }, */
 /*  {
    title: "AI Image Generator",
    description: "Generate images using AI prompts powered by OpenAI's DALL·E model and Cloudinary.",
    image: projectImg6,
    tech: ["React", "OpenAI API", "Cloudinary", "Tailwind CSS"],
    icons: [FaRobot, FaReact, FaCloud],
    demo: "#",
    code: "#",
  } */
];


export const workData = [
  {
    role: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    duration: "2020 - Present",
    description:
      "Leading frontend development for enterprise clients, implementing modern frameworks, and mentoring junior developers.",
    color: "purple"
  },
  {
    role: "Web Developer",
    company: "Digital Solutions LLC",
    duration: "2018 - 2020",
    description:
      "Developed and maintained web applications for various clients, focusing on responsive design and performance optimization.",
    color: "pink"
  },
  {
    role: "Junior Developer",
    company: "StartUp Ventures",
    duration: "2016 - 2018",
    description:
      "Started my career building basic websites and gradually took on more complex projects as I expanded my skill set.",
    color: "blue"
  }
];
