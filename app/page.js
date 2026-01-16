'use client';
import React, { useState, useEffect } from 'react';
import { Mail, ExternalLink} from 'lucide-react';
import Image from 'next/image';

  export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [darkMode, setDarkMode] = useState(true);

  // define classes based on dark mode
  const bgClass = darkMode ? 'bg-gray-900' : 'bg-gray-50';
  const textClass = darkMode ? 'text-white' : 'text-gray-900';
  const secondaryTextClass = darkMode ? 'text-gray-400' : 'text-gray-600';
  const navBgClass = darkMode ? 'bg-gray-900/80' : 'bg-white/80';
  const cardBgClass = darkMode ? 'bg-gray-800' : 'bg-white';
  const sectionBgClass = darkMode ? 'bg-gray-800' : 'bg-white';
  //-------------------------------------------------------------------------------------//

// showing all the information here for easy editing
  const projects = [
    {
      id: 1,
      title: 'Travel Expert Dashboard',
      description: 'Using C# and ASP.NET, this web application provides travel experts with tools to manage bookings, customer data, and itineraries efficiently.',
      tech: ['C#', 'Azure', 'SQL Server', 'ASP.NET'],
      github: 'https://github.com/sarahhuang1030-sketch/TravelExperts-UserControl.git',
      live: null,
      year: '2025'
    },
    {
      id: 2,
      title: 'Travel Expert Web App v1.0',
      description: 'Web application that allow users to plan and book personalized travel itineraries seamlessly',
      tech: ['React', 'Node.js', 'MySQL', 'Javascript'],
      github: 'https://github.com/sarahhuang1030-sketch/ThreadProjectV3.git',
      live: 'https://travel-expert-website.onrender.com',
      year: '2025'
    },
     {
      id: 3,
      title: 'Travel Expert Web App v2.0 (Team Project)',
      description: 'Web application that allow users to plan and book personalized travel itineraries seamlessly. I worked on Login and Registration page and the logic behind them for this group project.',
      tech: ['Asp.NET', 'C#', 'PostgreSQL', 'Render'],
      github: 'https://github.com/sarahhuang1030-sketch/Thread-Project.git',
      live: 'https://thread-project-6z5z.onrender.com',
      year: '2025'
    },
     {
      id: 4,
      title: 'Health Analytics Platform',
      description: 'A full-stack analytics platform built with React and Node.js, enabling healthcare providers to visualize patient data and track health metrics seamlessly. Backend API: https://health-analytics-platform.onrender.com',
      tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Docker', 'Python', 'RestAPI'],
      github: 'https://github.com/sarahhuang1030-sketch/health-analytics-platform',
      live: 'https://health-analytics-platform-frontend.onrender.com/',
      year: '2025'
    },
    {
      id: 5,
      title: 'Paws for Hope - Animal Rescue Website',
      description: 'A responsive website for an animal rescue organization, featuring pet adoption listings, volunteer sign-ups, and donation integration to support animal welfare.',
      tech: ['WordPress', 'HTML', 'CSS', 'JavaScript'],
      github: null,
      live: 'https://www.pawsforhope.org/',
      year: 'Can\'t recall'
    },
     {
      id: 6,
      title: 'Borderless Film',
      description: 'A dynamic website for a film production company, showcasing their portfolio, team, and services with an emphasis on visual storytelling and user engagement.',
      tech: ['GoDaddy Website Builder', 'HTML', 'CSS', 'JavaScript'],
      github: null,
      live: 'https://www.borderlessfilm.com/',
      year: 'Can\'t recall'
    },

    {
      id: 7,
      title: 'AI Chatbot for Children Mobile App - Upcoming',
      description: 'Real-time AI-powered chatbot designed to chat with children and learning activities in an engaging manner.',
      tech: ['Figma', 'Icon sets', 'React', 'Next.js', 'ChatUI', 'Flutter', 'Node.js', 'LLM API', 'PostgreSQL', 'Render'],
      github: null,
      live: null,
      year: '2026'
    }
  ];

  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js',
    'Python', 'MySQL', 'PostgreSQL', 'Git', 'GitHub', 'Docker',
    'Bootstrap', 'Tailwind CSS', 'REST APIs', 'SSMS', 'C#', 'Java','Azure', 'APIs',
    'HTML', 'Adobe Illustrator', 'Adobe Photoshop', 'Figma'
  ];

  const experiences = [
    {
      role: 'Web Designer & Social Media Manager',
      company: 'Tech Company',
      period: '2022 - 2024',
      description: 'Designed digital assets and improved UI layout and engagement across web and social media platforms, enhancing brand presence and user interaction.' 
    },
    {
      role: 'Center Director/Business Owner',
      company: 'Oxford Learning Center',
      period: '2018 - 2021',
      description: 'Conducted research-driven program and marketing development, supervised and trained an eight-member team in a fast-paced environment, produced data-informed reports using Google Analytics and Meta Business Suite, led operations and cross-team coordination, improved workflows through analysis, and built strong relationships with parents and the community.'
    },
    {
      role: 'Junior Web Developer/Designer',
      company: 'Various Clients - Freelance, Practicum',
      period: '2011 - 2015',
      description: 'Designed and enhanced user-friendly web interfaces with a strong focus on clarity and structure while collaborating with cross-functional teams to deliver polished digital solutions.ilt responsive websites and web applications using modern JavaScript frameworks and best practices.'
    }
  ];

  const education = [
    {
      degree: 'Object Oriented Software Development',
      school: 'Southern Alberta Institute of Technology (SAIT)',
      period: '2025 - 2026',
      description: 'This intensive program provides hands-on experience with real-world technology tools and requires a strong commitment of time and effort.'
    },
     {
      degree: 'Interactive Arts and Technology',
      school: 'Simon Fraser University (SFU)',
      period: '2009 - 2012',
      description: 'Students develop skills in creative media and web design/development, using emerging technologies to create interactive, visually engaging experiences and prepare for advanced study or careers in entertainment, film, digital media, and software-related industries.'
    }
  ];

  const certifications = [
    'Designing User Interfaces and Experiences (UI/UX)',
    'Getting Started with Front-End and Web Development',
    'Introduction to Software Engineering',
    'IBM iOS and Android Mobile App Developer - In Progress',
    'Programming with JavaScript - In Progress',
    'Meta Front-End Developer - In Progress',
  ];
//-------------------------------------------------------------------------------------//

// handle scroll and active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects', 'skills', 'education', 'certifications', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  //-------------------------------------------------------------------------------------//


  return (

    /* Header section */
    <div className={`min-h-screen ${bgClass} ${textClass} transition-colors duration-300`}>
      <nav className={`fixed top-0 w-full ${navBgClass} backdrop-blur-md z-50 border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold">
            <span className="text-cyan-400">Sarah</span>
            <span className="text-purple-400"> Huang</span>
          </div>
          <div className="flex gap-8 items-center">
            {['About', 'Experience', 'Projects', 'Skills', 'Education', 'Certifications', 'Contact'].map(item => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-sm transition-colors hover:text-cyan-400 ${
                  activeSection === item.toLowerCase() ? 'text-cyan-400 font-medium' : secondaryTextClass
                }`}
              >
                {item}
              </button>
            ))}
            <a href="/resume.pdf"
            download
            className="px-4 py-2 border border-cyan-400 text-cyan-400 rounded hover:bg-cyan-400/10 transition-colors text-sm inline-block">
            Resume
          </a>
          </div>
        </div>
      </nav>
    
      {/* About Section */}
      <section id="about" className={`min-h-screen flex items-center px-6 pt-20 ${sectionBgClass}`}>
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
          <div>
           
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4" style={{ opacity: 1, transform: "none" }}>
              <span className="typewriter bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                <span>Full Stack Developer</span>
                <span className="typed-cursor typed-cursor--blink" >|</span>
              </span>
            </h1>
            <p className={`text-xl ${secondaryTextClass} mb-6 leading-relaxed`}>
            Hi, I&apos;m Sarah, an aspiring software developer currently studying Object-Oriented Software Development at SAIT. 
            I have hands-on experience in full-stack web development, UI/UX design, and database-driven applications, with skills in C++, 
            JavaScript, React, Next.js, and MySQL. I bring a strong foundation in problem-solving, clean code, and user-focused design, 
            along with professional experience in research, operations, and digital content. I’m actively seeking a software development 
            internship where I can contribute, learn, and grow.
             </p>
            
          </div>
          <div className="relative">
            
           <div className="relative w-[250px] h-[250px] mx-auto">
            <Image 
              src="/image/profileimg.png" 
              alt="Profile" 
              className="rounded-2xl object-cover object-top shadow-[0px_0px_50px_-12px_rgba(255,255,255,0.4)]"
              fill
            />
            </div>
            <div className="flex gap-4 justify-center mt-4">
              <a href="mailto:sarahhuang1030@gmail.com" className={`p-3 ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} rounded transition-colors`}>
                <Mail size={24} />
              </a>
              <a href="https://www.linkedin.com/in/sarah-huang-485a1a50/" className={`p-3 ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} rounded transition-colors`}>
                <Image
                    src="/image/linkedin.svg"
                    alt="LinkedIn"
                    width={24}
                    height={24}
                  />
              </a>
              <a href="https://github.com/sarahhuang1030-sketch" className={`p-3 ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} rounded transition-colors`}>
                <Image
                    src="/image/github.svg"
                    alt="GitHub"
                    width={24}
                    height={24}
                  />
              </a>
            </div>
          </div>
        </div>
      </section>

   

      {/* Experience Section */}
      <section id="experience" className="min-h-screen flex items-center px-6">
        <div className="max-w-7xl mx-auto w-full py-20">
          <h2 className="text-4xl font-bold mb-12">
            <span className="text-cyan-400">Work</span> Experience
          </h2>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`${cardBgClass} rounded-lg p-8 border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                    <div className="text-cyan-400 font-medium">{exp.company}</div>
                  </div>
                  <div className={`${secondaryTextClass} text-sm`}>{exp.period}</div>
                </div>
                <p className={`${secondaryTextClass} leading-relaxed`}>{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`min-h-screen flex items-center px-6 ${sectionBgClass}`}>
        <div className="max-w-7xl mx-auto w-full py-20">
          <h2 className="text-4xl font-bold mb-12">
            <span className="text-cyan-400">Featured</span> Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map(project => (
              <div key={project.id} className={`${darkMode ? 'bg-gray-900' : 'bg-gray-50'} rounded-lg p-8 border ${darkMode ? 'border-gray-700' : 'border-gray-200'} hover:border-cyan-400 transition-all`}>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <span className={`text-sm ${secondaryTextClass}`}>{project.year}</span>
                </div>
                <p className={`${secondaryTextClass} mb-6 leading-relaxed`}>{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-cyan-400/10 text-cyan-400 rounded text-sm border border-cyan-400/20">
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* make the github links and external links only shows up when there's an actual link */}
                <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 ${secondaryTextClass} hover:text-cyan-400 transition-colors`}
                  >
                    <Image
                      src="/image/github.svg"
                      alt="GitHub"
                      width={20}
                      height={20}
                    />
                    <span>Code</span>
                  </a>
                )}

                {project.live && project.live !== '#' && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 ${secondaryTextClass} hover:text-cyan-400 transition-colors`}
                  >
                    <ExternalLink size={20} />
                    <span>Live</span>
                  </a>
                )}
              </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center px-6">
        <div className="max-w-7xl mx-auto w-full py-20">
          <h2 className="text-4xl font-bold mb-12">
            <span className="text-cyan-400">Technical</span> Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map(skill => (
              <div key={skill} className={`${cardBgClass} rounded-lg p-6 border ${darkMode ? 'border-gray-700' : 'border-gray-200'} hover:border-cyan-400 transition-all text-center`}>
                <span className="font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className={`min-h-screen flex items-center px-6 ${sectionBgClass}`}>
        <div className="max-w-7xl mx-auto w-full py-20">
          <h2 className="text-4xl font-bold mb-12">
            <span className="text-cyan-400">Education</span>
          </h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className={`${darkMode ? 'bg-gray-900' : 'bg-gray-50'} rounded-lg p-8 border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{edu.degree}</h3>
                    <div className="text-cyan-400 font-medium">{edu.school}</div>
                  </div>
                  <div className={`${secondaryTextClass} text-sm`}>{edu.period}</div>
                </div>
                <p className={`${secondaryTextClass} leading-relaxed`}>{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="min-h-screen flex items-center px-6">
        <div className="max-w-7xl mx-auto w-full py-20">
          <h2 className="text-4xl font-bold mb-12">
            <span className="text-cyan-400">Certifications</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className={`${cardBgClass} rounded-lg p-6 border ${darkMode ? 'border-gray-700' : 'border-gray-200'} hover:border-cyan-400 transition-all`}>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="font-medium">{cert}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`min-h-screen flex items-center px-6 ${sectionBgClass}`}>
        <div className="max-w-3xl mx-auto w-full text-center py-20">
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-cyan-400">Get In</span> Touch
          </h2>
          <p className={`text-xl ${secondaryTextClass} mb-12 leading-relaxed`}>
            I&apos;m currently looking for new opportunities. Whether you have a question or just want to say hi, 
            I&apos;ll try my best to get back to you!
          </p>
          <a href="mailto:sarahhuang1030@gmail.com" className="inline-block px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded hover:bg-cyan-400/10 transition-colors text-lg font-medium">
            Say Hello
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className={`${darkMode ? 'bg-gray-800' : 'bg-white'} border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'} py-8`}>
        <div className="max-w-7xl mx-auto px-6 text-center">
         
          <p className={`mt-2 ${secondaryTextClass}`}>© 2026 Sarah Huang. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

