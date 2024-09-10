import React from 'react'
import profilePic from '../images/VINTECH..jpg'
import { SocialIcon } from 'react-social-icons'

const Hero = () => {
  return (
    <div id='Me' className='flex items-center justify-center gap-16'>
        <div className='flex flex-col items-start'>
            <span className='text-2xl text-purple-900 font-jersey uppercase'>hey there 👋🏾</span>
            <span className='text-4xl text-purple-500'> <strong className='font-bold text-6xl'>Vince Churchill</strong> here </span>
            <span className='text-lg mb-3'>
                I’m a software developer from Ghana with a passion for building fullstack apps (mainly web). Here’s some more about me:
            </span>
            <span className="font-light my-2">⛁ I love databases (I normalize them for fun)</span>
            <span className="font-light my-2">⚙️🛠️🧩💻 I’m a backend API guru  (I’m pretty good at building them, and building them fast)</span>
            <span className="font-light my-2">⚛️🎨🖥️ I do frontend too (No interface is too hard for me to build)</span>
            <span className="font-light my-2">👨🏿‍💻📲💻🧠 I love building apps that solve everyday problems (Some are still in development)</span>

            <div className="flex flex-row items-center justify-start gap-12 mt-5">
                <button className="rounded-3xl bg-purple-500 px-5 p-2 text-white text-2xl font-mono font-semibold">View My CV</button>
                <button className="rounded-3xl bg-transparent px-5 p-2 text-purple-500 border border-purple-500 text-2xl font-mono font-semibold">My Projects</button>
            </div>

            <div className="flex flex-row items-center justify-start gap-2 mt-4">
                <span className='rounnded bg-purple-900 text-sm text-white font-medium rounded-3xl p-2 px-4'>Frontend</span>
                <span className='rounnded bg-purple-900 text-sm text-white font-medium rounded-3xl p-2 px-4'>Backend</span>
                <span className='rounnded bg-purple-900 text-sm text-white font-medium rounded-3xl p-2 px-4'>Databases, SQL</span>
                <span className='rounnded bg-purple-900 text-sm text-white font-medium rounded-3xl p-2 px-4'>General Programming</span>
                <span className='rounnded bg-purple-900 text-sm text-white font-medium rounded-3xl p-2 px-4'>Linux Fundamentals</span>
            </div>
        </div>

        <div className="flex flex-col items-center">
            <img src={profilePic} alt="A picture of me" height={150} width={350} className='rounded-full'/>
            <div className="flex justify-center items-center mt-5 gap-6">
                <span className="rounded-full p-2 border boder-purple-500"><SocialIcon url='www.github.com/churchillv'/></span>
                <span className="rounded-full p-2 border boder-purple-500"><SocialIcon url='www.linkedin.com/in/vince-churchill'/></span>
                <span className="rounded-full p-2 border boder-purple-500"><SocialIcon url='www.twitter.com/churchillav'/></span>
                <span className="rounded-full p-2 border boder-purple-500"><SocialIcon url='www.instagram.com/_v.churchill'/></span>
            </div>
        </div>
    </div>
  )
}

export default Hero