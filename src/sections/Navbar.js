import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full top-0 flex justify-between items-center p-2 lg:px-56 py-6 md:mb-12 mb-5 shadow-md bg-purple-500'>
        <div>
            <h1 className="text-3xl font-bold font-mono text-white">ChurchillV</h1>
        </div>
        <nav className="md:block hidden">
            <ul className="flex justify-around gap-10 p-4">
                <li>
                <a href="#Me" className="text-white hover:underline hover:underline-offset-4 decoration-violet-100">About Me</a>
                </li>
                <li>
                <a href="#Skills" className="text-white hover:underline hover:underline-offset-4 decoration-violet-100">Skills</a>
                </li>
                <li>
                <a href="#Projects" className="text-white hover:underline hover:underline-offset-4 decoration-violet-100">Projects</a>
                </li>
                <li>
                <a href="#contact" className="text-white hover:underline hover:underline-offset-4 decoration-violet-100">Experience</a>
                </li>
                <li>
                <a href="#contact" className="text-white hover:underline hover:underline-offset-4 decoration-violet-100">Services</a>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar