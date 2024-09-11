import React from 'react';

const techStack = [
  {
    "src": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    "alt": "React",
    "name": "React"
  },
  {
    "src": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg",
    "alt": "Next.js",
    "name": "Next.js"
  },
  {
    "src": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
    "alt": "Node.js",
    "name": "Node.js"
  },
  {
    "src": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg",
    "alt": "Express",
    "name": "Express"
  },
  {
    "src": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original-wordmark.svg",
    "alt": "NestJS",
    "name": "NestJS"
  }
];

const languages = [
  {
    "src": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    "alt": "JavaScript",
    "name": "JavaScript"
  },
  {
    "src": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    "alt": "TypeScript",
    "name": "TypeScript"
  },
  {
    "src": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    "alt": "Python",
    "name": "Python"
  },
  {
    "src": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
    "alt": "C",
    "name": "C"
  },
  {
    "src": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
    "alt": "C++",
    "name": "C++"
  },
  {
    "src": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    "alt": "Java",
    "name": "Java"
  }
];

const databaseTech = [
  {
    "src": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg",
    "alt": "PostgreSQL",
    "name": "PostgreSQL"
  },
  {
    "src": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg",
    "alt": "MongoDB",
    "name": "MongoDB"
  },
  {
    "src": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
    "alt": "Firebase",
    "name": "Firebase"
  },
  {
    "src": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
    "alt": "Supabase",
    "name": "Supabase"
  },
  {
    "src": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original-wordmark.svg",
    "alt": "Prisma",
    "name": "Prisma"
  }
];

const tools = [
  {
    "src": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg",
    "alt": "Git",
    "name": "Git"
  },
  {
    "src": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
    "alt": "VS Code",
    "name": "VS Code"
  },
  {
    "src": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
    "alt": "Postman",
    "name": "Postman"
  },
  {
    "src": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
    "alt": "Linux",
    "name": "Linux"
  }
];




const Skills = () => {
  return (
    <div className='flex flex-col mt-12 px-4 md:px-8 lg:px-72'>
      <h1 className="text-4xl md:text-6xl text-purple-500 font-black text-center">
        Skills
      </h1>

    <div className="flex overflow-x-scroll mt-5 gap-6 md:gap-12">
  {/* Main Tech Stack */}
  <div className="flex flex-shrink-0 md:flex-shrink-1 flex-col w-full md:w-1/3">
    <h2 className="text-2xl md:text-3xl font-medium text-center mb-2 text-white bg-purple-700 py-2">
      Main Tech Stack
    </h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-4 overflow-x-auto md:overflow-visible whitespace-nowrap md:whitespace-normal px-2">
      {/* Icons */}
        {techStack.map((item, index) => (
          <div key={index} className="flex justify-center md:block">
            <img
              src={item.src}
              alt={item.alt}
              className="w-20 h-20 md:w-24 md:h-24"
            />
          </div>
        ))}
    </div>
  </div>

  {/* Languages */}
  <div className="flex flex-shrink-0 flex-col w-full md:w-1/3">
    <h2 className="text-2xl md:text-3xl font-medium text-center mb-2 text-white bg-purple-700 py-2">
      Languages
    </h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-4 overflow-x-auto md:overflow-visible whitespace-nowrap md:whitespace-normal px-2">
      {/* Icons */}
      {languages.map((item, index) => (
          <div key={index} className="flex justify-center md:block">
            <img
              src={item.src}
              alt={item.alt}
              className="w-20 h-20 md:w-24 md:h-24"
            />
          </div>
        ))}
    </div>
  </div>

  {/* Database Tech */}
  <div className="flex flex-shrink-0 flex-col w-full md:w-1/3">
    <h2 className="text-2xl md:text-3xl font-medium text-center mb-2 text-white bg-purple-700 py-2">
      Database Tech
    </h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-4 overflow-x-auto md:overflow-visible whitespace-nowrap md:whitespace-normal px-2">
      {/* Icons */}
      {databaseTech.map((item, index) => (
          <div key={index} className="flex justify-center md:block">
            <img
              src={item.src}
              alt={item.alt}
              className="w-20 h-20 md:w-24 md:h-24"
            />
          </div>
        ))}
    </div>
  </div>

  {/* Tools */}
  <div className="flex flex-shrink-0 flex-col w-full md:w-1/3">
    <h2 className="text-2xl md:text-3xl font-medium text-center mb-2 text-white bg-purple-700 py-2">
      Tools
    </h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-4 overflow-x-auto md:overflow-visible whitespace-nowrap md:whitespace-normal px-2">
      {/* Icons */}
      {tools.map((item, index) => (
          <div key={index} className="flex justify-center md:block">
            <img
              src={item.src}
              alt={item.alt}
              className="w-20 h-20 md:w-24 md:h-24"
            />
          </div>
        ))}
    </div>
  </div>
</div>


</div>
  );
};

export default Skills;
