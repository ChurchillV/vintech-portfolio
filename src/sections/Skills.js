import React from 'react'

const Skills = () => {
  return (
    <div className='flex flex-col mt-12'>
        <h1 className="text-6xl text-purple-500 font-black text-center">
            Skills
        </h1>

        <div className="flex justify-center items-start mt-5 gap-12">
            <div className="flex flex-col mr-2">
                <h2 className="text-3xl font-medium text-center mb-2">
                    Main Tech Stack
                </h2>

                <div className="grid grid-cols-3 gap-4">
                    <div>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
                    </div>
                    <div>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg" />
                    </div>
                    <div>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" />
                    </div>
                    <div>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg" />
                    </div>
                    <div>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original-wordmark.svg" />
                    </div>
                </div>
            </div>
            <div className="flex flex-col mr-2">
                <h2 className="text-3xl font-medium text-center mb-2">
                    Languages
                </h2>

                <div className="grid grid-cols-3 gap-4">
                    <div>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
                    </div>
                    <div>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
                    </div>
                    <div>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
                    </div>
                    <div>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" />
                    </div>
                    <div>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" />
                    </div>
                    <div>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" />
                    </div>
                </div>
            </div>
            <div className="flex flex-col mr-2">
                <h2 className="text-3xl font-medium text-center">
                    Database Tech
                </h2>

                <div className="grid grid-cols-3 gap-4">
                    <div>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg" />
                    </div>
                    <div>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg" />
                    </div>
                    <div>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" />
                    </div>
                    <div>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" />
                    </div>
                    <div>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original-wordmark.svg" />
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <h2 className="text-3xl font-medium text-center px-12">
                    Tools
                </h2>
                <div className="grid grid-cols-3 gap-4">
                    <div>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg" />
                    </div>
                    <div>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" />
                    </div>
                    <div>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" />
                    </div>
                    <div>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills