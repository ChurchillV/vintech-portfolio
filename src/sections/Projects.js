import React, { useState } from 'react';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

// Sample projects data
const projects = [
  {
    name: 'BookIt!',
    status: 'MVP',
    techStack: ['React', 'Node.js', 'PostgreSQL'],
    description: 'A full-stack web app for publishing, managing, booking and reviewing events.',
    githubLink: 'https://github.com/project1',
    demoLink: 'https://project1.demo.com',
    imageUrl: '../images/VINTECH.jpg',
  },
  {
    name: 'Project 2',
    status: 'Complete',
    techStack: ['Next.js', 'Firebase'],
    description: 'A real-time chat application.',
    githubLink: 'https://github.com/project2',
    demoLink: '',
    imageUrl: '../images/VINTECH.jpg',
  },
  {
    name: 'WordWave',
    status: 'Complete',
    techStack: ['HTML', 'CSS', 'Javascript'],
    description: 'A Wordle-style multiplayer word guessing game',
    githubLink: 'https://github.com/project2',
    demoLink: '',
    imageUrl: '../images/VINTECH.jpg',
  },
  {
    name: 'Project 4',
    status: 'Under Construction',
    techStack: ['Next.js', 'Firebase'],
    description: 'A real-time chat application.',
    githubLink: 'https://github.com/project2',
    demoLink: '',
    imageUrl: '../images/VINTECH.jpg',
  },
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(projects[0]);

  return (
    <div className="w-full px-4 md:px-8 lg:px-72 mt-20" id='Projects'>
        <h1 className='text-4xl md:text-6xl text-purple-500 font-black text-center mb-4'>Projects</h1>
      {/* Spotlight section for larger screens */}
      <div className="hidden lg:block relative w-full h-96 mb-8 mt-12">
        <div
          className="absolute inset-0 bg-cover bg-center z-10"
          style={{ backgroundImage: `url(${activeProject.imageUrl})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50 z-20"></div>
          <div className="relative z-30 p-8 text-white h-full flex flex-col justify-end items-start space-y-4">
            <div className="flex gap-3">
              {activeProject.techStack.map((tech, idx) => (
                <span key={idx} className="bg-purple-600 px-3 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex space-x-4 mt-4">
                {activeProject.githubLink && (
                    <a
                        href={activeProject.githubLink}
                        className="text-purple-300 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                        alt="Github"
                        className="w-16 h-16 md:w-16 md:h-16"
                    />
                    </a>
                )}
                {activeProject.demoLink && (
                    <a
                    href={activeProject.demoLink}
                    className="text-purple-300 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <OpenInNewIcon 
                        className="w-16 h-16 md:w-16 md:h-16 text-3xl"
                    />
                    </a>
                )}
            </div>
            <span className="text-3xl font-bold flex items-center justify-center">{activeProject.name} 
                <span className='text-sm px-3 py-1 rounded-full bg-purple-600 text-white ml-3'>
                    {activeProject.status}
                </span>
            </span>
            <p className="text-lg">{activeProject.description}</p>
          </div>
        </div>
      </div>

      {/* Horizontal slider for mobile screens */}
      <div className="lg:hidden overflow-x-scroll py-4 space-x-4 flex">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="w-80 min-w-[240px] bg-white shadow-lg rounded-lg flex-shrink-0"
            onClick={() => setActiveProject(project)}
          >
            <img src={project.imageUrl} alt={project.name} className="rounded-lg w-full h-40 object-cover mb-4" />
            <span className="text-xl font-semibold md:text-center text-left ps-4 flex items-center">
                {project.name}
                <span className='text-xs px-2 rounded-full bg-purple-600 text-white ml-3'>
                    {project.status}
                </span>
            </span>
            <p className="text-sm text-left font-medium text-slate-700 ps-4">{project.description}</p>
            <div className="flex flex-wrap mt-2 gap-2 p-4">
              {project.techStack.map((tech, idx) => (
                <span key={idx} className="bg-purple-600 px-3 py-1 rounded-full text-sm text-white">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Project Cards for larger screens */}
      <div className="hidden lg:grid grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-white shadow-lg rounded-lg cursor-pointer"
            onClick={() => setActiveProject(project)}
          >
            <img src={project.imageUrl} alt={project.name} className="rounded-lg w-full h-40 object-cover mb-4" />
            <span className="text-2xl font-bold ps-6 flex items-center">{project.name}
                <span className='text-sm px-3 py-1 rounded-full bg-purple-600 text-white ml-3'>
                    {project.status}
                </span>
            </span>
            <div className="flex flex-wrap mt-4 p-6 gap-2">
              {project.techStack.map((tech, idx) => (
                <span key={idx} className="bg-purple-600 px-3 py-1 rounded-full text-sm text-white">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
