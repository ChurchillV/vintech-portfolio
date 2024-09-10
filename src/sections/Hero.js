import React from 'react';
import profilePic from '../images/VINTECH..jpg';
import { SocialIcon } from 'react-social-icons';

const Hero = () => {
  return (
    <div id="Me" className="flex flex-col md:flex-row items-center justify-center md:gap-16 p-6">
      {/* Right side profile image and social icons */}
      <div className="flex flex-col items-center mt-2 md:mt-0 order-1 md:order-2">
        <img src={profilePic} alt="A picture of me" className="rounded-full w-40 h-40 md:w-56 md:h-56 object-cover" />
        <div className="flex flex-wrap justify-center gap-4 mt-5">
          <SocialIcon url="https://github.com/churchillv" className="rounded-full border border-purple-500" />
          <SocialIcon url="https://linkedin.com/in/vince-churchill" className="rounded-full border border-purple-500" />
          <SocialIcon url="https://twitter.com/churchillav" className="rounded-full border border-purple-500" />
          <SocialIcon url="https://instagram.com/_v.churchill" className="rounded-full border border-purple-500" />
        </div>
      </div>

      {/* Left side content */}
      <div className="flex flex-col items-start text-center md:text-left order-2 md:order-1 mt-10 md:mt-0">
        <span className="text-xl md:text-2xl text-purple-900 font-jersey uppercase">hey there 👋🏾</span>
        <span className="text-3xl md:text-4xl text-center md:text-left text-purple-500">
          <strong className="font-bold text-4xl md:text-6xl">Vince Churchill</strong> here
        </span>
        <span className="text-base md:text-lg mb-3 mt-2 md:mt-0">
          I’m a software developer from Ghana with a passion for building fullstack apps (mainly web). Here’s some more about me:
        </span>
        <span className="font-light my-2">⛁ I love databases (I normalize them for fun)</span>
        <span className="font-light my-2">⚙️🛠️🧩💻 I’m a backend API guru (I’m pretty good at building them, and building them fast)</span>
        <span className="font-light my-2">⚛️🎨🖥️ I do frontend too (No interface is too hard for me to build)</span>
        <span className="font-light my-2">👨🏿‍💻📲💻🧠 I love building apps that solve everyday problems (Some are still in development)</span>

        <div className="flex md:flex-row items-center justify-center md:justify-start md:gap-12 ms-2 md:ms-0 gap-3 mt-5">
          <button className="rounded-3xl bg-purple-500 px-5 py-2 text-white text-lg md:text-2xl font-mono font-semibold">View My CV</button>
          <button className="rounded-3xl bg-transparent px-5 py-2 text-purple-500 border border-purple-500 text-lg md:text-2xl font-mono font-semibold">My Projects</button>
        </div>

        <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mt-4">
          <span className="bg-purple-900 text-sm text-white font-medium rounded-3xl p-2 px-4">Frontend</span>
          <span className="bg-purple-900 text-sm text-white font-medium rounded-3xl p-2 px-4">Backend</span>
          <span className="bg-purple-900 text-sm text-white font-medium rounded-3xl p-2 px-4">Databases, SQL</span>
          <span className="bg-purple-900 text-sm text-white font-medium rounded-3xl p-2 px-4">General Programming</span>
          <span className="bg-purple-900 text-sm text-white font-medium rounded-3xl p-2 px-4">Linux Fundamentals</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
