import React from 'react';

const Skills = () => {
  return (
    <div className='flex flex-col mt-12 px-4 md:px-8 lg:px-72'>
      <h1 className="text-4xl md:text-6xl text-purple-500 font-black text-center">
        Skills
      </h1>

    <div className="flex overflow-x-scroll md:flex-row mt-5 gap-6 md:gap-12">
  {/* Main Tech Stack */}
  <div className="flex flex-shrink-0 flex-col w-full md:w-1/3">
    <h2 className="text-2xl md:text-3xl font-medium text-center mb-2 text-white bg-purple-700 py-2">
      Main Tech Stack
    </h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-4 overflow-x-auto md:overflow-visible whitespace-nowrap md:whitespace-normal px-2">
      {/* Icons */}
      <div className="flex justify-center md:block">
      <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
          alt="React"
          className="w-20 h-20 md:w-24 md:h-24"
        />
      </div>
      <div className="flex justify-center md:block">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg"
          alt="Next.js"
          className="w-20 h-20 md:w-24 md:h-24"
        />
      </div>
      <div className="flex justify-center md:block">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
          alt="Node.js"
          className="w-20 h-20 md:w-24 md:h-24"
        />
      </div>
      <div className="flex justify-center md:block">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg"
          alt="Express"
          className="w-20 h-20 md:w-24 md:h-24"
        />
      </div>
      <div className="flex justify-center md:block">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original-wordmark.svg"
          alt="NestJS"
          className="w-20 h-20 md:w-24 md:h-24"
        />
      </div>
    </div>
  </div>

  {/* Languages */}
  <div className="flex flex-shrink-0 flex-col w-full md:w-1/3">
    <h2 className="text-2xl md:text-3xl font-medium text-center mb-2 text-white bg-purple-700 py-2">
      Languages
    </h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-4 overflow-x-auto md:overflow-visible whitespace-nowrap md:whitespace-normal px-2">
      {/* Icons */}
      <div className="flex justify-center md:block">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
          alt="JavaScript"
          className="w-20 h-20 md:w-24 md:h-24"
        />
      </div>
      <div className="flex justify-center md:block">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
          alt="TypeScript"
          className="w-20 h-20 md:w-24 md:h-24"
        />
      </div>
      <div className="flex justify-center md:block">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
          alt="Python"
          className="w-20 h-20 md:w-24 md:h-24"
        />
      </div>
      <div className="flex justify-center md:block">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg"
          alt="C"
          className="w-20 h-20 md:w-24 md:h-24"
        />
      </div>
      <div className="flex justify-center md:block">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
          alt="C++"
          className="w-20 h-20 md:w-24 md:h-24"
        />
      </div>
      <div className="flex justify-center md:block">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
          alt="Java"
          className="w-20 h-20 md:w-24 md:h-24"
        />
      </div>
    </div>
  </div>

  {/* Database Tech */}
  <div className="flex flex-shrink-0 flex-col w-full md:w-1/3">
    <h2 className="text-2xl md:text-3xl font-medium text-center mb-2 text-white bg-purple-700 py-2">
      Database Tech
    </h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-4 overflow-x-auto md:overflow-visible whitespace-nowrap md:whitespace-normal px-2">
      {/* Icons */}
      <div className="flex justify-center md:block">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg"
          alt="PostgreSQL"
          className="w-20 h-20 md:w-24 md:h-24"
        />
      </div>
      <div className="flex justify-center md:block">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg"
          alt="MongoDB"
          className="w-20 h-20 md:w-24 md:h-24"
        />
      </div>
      <div className="flex justify-center md:block">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg"
          alt="Firebase"
          className="w-20 h-20 md:w-24 md:h-24"
        />
      </div>
      <div className="flex justify-center md:block">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg"
          alt="Supabase"
          className="w-20 h-20 md:w-24 md:h-24"
        />
      </div>
      <div className="flex justify-center md:block">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original-wordmark.svg"
          alt="Prisma"
          className="w-20 h-20 md:w-24 md:h-24"
        />
      </div>
    </div>
  </div>

  {/* Tools */}
  <div className="flex flex-shrink-0 flex-col w-full md:w-1/3">
    <h2 className="text-2xl md:text-3xl font-medium text-center mb-2 text-white bg-purple-700 py-2">
      Tools
    </h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-4 overflow-x-auto md:overflow-visible whitespace-nowrap md:whitespace-normal px-2">
      {/* Icons */}
      <div className="flex justify-center md:block">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg"
          alt="Git"
          className="w-20 h-20 md:w-24 md:h-24"
        />
      </div>
      <div className="flex justify-center md:block">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg"
          alt="VS Code"
          className="w-20 h-20 md:w-24 md:h-24"
        />
      </div>
      <div className="flex justify-center md:block">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg"
          alt="Postman"
          className="w-20 h-20 md:w-24 md:h-24"
        />
      </div>
      <div className="flex justify-center md:block">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg"
          alt="Linux"
          className="w-20 h-20 md:w-24 md:h-24"
        />
      </div>
    </div>
  </div>
</div>


</div>
  );
};

export default Skills;
