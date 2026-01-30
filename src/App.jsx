import { Canvas } from "@react-three/fiber";
import { Html, Loader } from "@react-three/drei";
import SpaceEnv from "./SpaceEnv";
// import SpaceEnv2 from "./SpaceEnv2";
import React from "react";
import Projects from "./components/Projects";
import About from "./components/About";
import Home from "./components/Home";
// import Contact from "./components/Contact";
import { LinkedIcon, GithubIcon, FacebookIcon}  from "./components/Icons";
import MusicPlayer from "./components/MusicPlayer";
import { motion } from "motion/react"
import Footer from './components/Footer';
import { Close } from './components/Icons'

export default function App() {
  const today = new Date;
  today.getFullYear();

  // const [content, setContent] = React.useState('none');

  const [showSpace, setShowSpace] = React.useState(false);

  // function handlePageChange(page) {
  //   setContent(page);
  // };

  return (
    <div className="font-[Syncopate] text-gray-100 h-screen w-full bg-black">
      <Canvas shadows>
        {/* <Html className="absolute z-20 h-screen w-screen" center> */}
        <Html className="grid grid-cols-12 grid-rows-12 gap-6 h-screen w-screen" center>
          <header className="col-span-full row-span-1 font-bold justify-items-center">
            {/* <div className="flex flex-row mx-4 px-4 py-3 justify-content-center"> */}
              {/* <h2 className="hidden md:inline justify-start cursor-pointer" onClick={() => handlePageChange('none')}>AWDev</h2>
              <div className="place-items-center">
                <nav className="flex jusitfy-end text-xs md:text-md">
                  <ul>
                    <li className="m-1 p-1 md:px-2 cursor-pointer hover:bg-gray-100 hover:text-gray-900 rounded-sm transition-all" onClick={() => handlePageChange('projects')}>Projects</li>
                    <li className="m-1 p-1 md:px-2 cursor-pointer text-nowrap hover:bg-gray-100 hover:text-gray-900 rounded-sm transition-all" onClick={() => handlePageChange('about')}>About AWDev</li>
                  </ul>
                </nav>
              </div> */}
            {/* </div> */}
            <MusicPlayer />
            <button className="m-4 inline-block text-sm font-[Roboto] bg-gray-900 rounded-full px-4 py-2 w-fit hover:text-gray-900 hover:bg-gray-100 hover:cursor-pointer transition-all">Show Me Home</button>
          </header>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="col-start-2 col-end-8 row-span-4 backdrop-blur-2xl rounded-xl border border-gray-500 p-4 text-gray-100">
            <h1 className="text-xl md:text-6xl my-2">HASSAM SAJID</h1>
            <h2 className="text-xl md:text-2xl my-2 font-[Roboto]">Frontend and Fullstack Web Developer</h2>
            <div className="flex flex-row ml-auto my-4 font-[Roboto] flex-wrap">
                <img src="/images/js-icon.svg" className="w-6 h-6 ml-3 mr-1 my-1"/>
                <span className="my-auto">JavaScript</span>
                <img src="/images/ts-icon 1.svg" className="w-6 h-6 ml-3 mr-1 my-1"/>
                <span className="my-auto">TypeScript</span>
                <img src="/images/react-svgrepo-com.svg" className="w-6 h-6 ml-3 mr-1 my-1"/>
                <span className="my-auto">React</span>
                <img src="/images/next-icon-2.svg" className="w-6 h-6 ml-3 mr-1 my-1"/>
                <span className="my-auto">Next.js</span>
                <img src="/images/node-svgrepo-com.svg" className="w-6 h-6 ml-3 mr-1 my-1"/>
                <span className="my-auto">Node.js</span>
                <img src="/images/Group 16.svg" className="w-6 h-6 ml-3 mr-1 my-1"/>
                <span className="my-auto">Express.js</span>
                <img src="/images/alpinejs-icon-1.svg" className="w-6 h-6 ml-3 mr-1 my-1"/>
                <span className="my-auto">Alpine.js</span>
                <img src="/images/solid-icon.svg" className="w-6 h-6 ml-3 mr-1 my-1"/>
                <span className="my-auto">Solid.js</span>
                <img src="/images/tailwind-svgrepo-com.svg" className="w-6 h-6 ml-3 mr-1 my-1"/>
                <span className="my-auto">Tailwind CSS</span>
                <img src="/images/bun-icon 1.svg" className="w-6 h-6 ml-3 mr-1 my-1"/>
                <span className="my-auto">Bun.js</span>
                <img src="/images/astro-icon-2.svg" className="w-6 h-6 ml-3 mr-1 my-1"/>
                <span className="my-auto">Astro.js</span>
                <img src="/images/css-icon.svg" className="w-6 h-6 ml-3 mr-1 my-1"/>
                <span className="my-auto">CSS3</span>
                <img src="/images/html5-svgrepo-com.svg" className="w-6 h-6 ml-3 mr-1 my-1"/>
                <span className="my-auto">HTML5</span>
            </div>
            {/* <p className="font-[Roboto] my-4">Frontend & Fullstack dev in JavaScript | TypeScript | React | Next.js | Node | Tailwind | Express. Working on an E-commerce website | learning Go. Blender and interested in XR.</p> */}
            <Footer />
          </motion.div>
            
          {/* <motion.div           
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="col-start-2 col-end-8 row-span-1 backdrop-blur-xl rounded-sm border border-gray-500 p-4 text-wrap"
            >
            <div className="flex flex-row ml-auto my-4 font-[Roboto]">
              <div className="justify-content-center border border-gray-500 rounded-md">
                <a href="https://github.com/Alkoun-web-design" target="_blank" rel="noreferrer noopener" className="m-1 md:mx-4 h-6 w-6 hover:bg-gray-100 hover:text-gray-900 rounded-sm transition-all"><GithubIcon /></a>
                <span>Github</span>
              </div>
              <div className="justify-content-center border border-gray-500 rounded-md">
                <a href="https://www.linkedin.com/in/hassam-sajid-26560752/" target="_blank" rel="noreferrer noopener" className="m-1 md:mx-4 h-6 w-6 hover:bg-gray-100 hover:text-gray-900 rounded-sm transition-all"><LinkedIcon /></a>
                <span>LinkedIn</span>
              </div>
            <a href="" rel="noreferrer noopener" target="_blank" className="m-1 md:mx-4 h-6 w-6 hover:bg-gray-100 hover:text-gray-900 rounded-sm transition-all"><FacebookIcon /></a>
            </div>
          </motion.div> */}

          <motion.div           
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            // className="pb-10 px-1 pt-4 text-wrap"
            className="col-start-8 col-end-12 row-span-5 backdrop-blur-xl rounded-sm border border-gray-500 p-4 text-wrap"
            >
            {/* <div className='rounded-sm text-xs text-center w-fit h-fit ml-4 cursor-pointer bg-gray-900 hover:text-black hover:bg-gray-100 transition-all duration-300' onClick={() => setContent('none')}> */}
                {/* <Close className='p-1' /> */}
            {/* </div> */}
            <div className="mx-auto justify-center text-center m-4">
                <h3 className="text-xl">About AwDev & Me</h3>
            </div>
            <div className="font-[Roboto]">
              {/* <p className='my-2'>About</p> */}
              <p className='m-2'>Full stack developer with a focus on frontend with JavaScript, 
              TypeScript, React, Next.js, Node.js, Express, Alpine.js, CSS, Tailwind, Bootstrap, 
              React Three Fiber, Astro.js, Solid.js and Bun.js.</p>
              <p className='m-2'>Currently working on a personal finance app, an e-commerce website.</p>
              <p className='m-2'>Learning blender, testing and Golang.</p>
            </div>
          </motion.div>

          <motion.div           
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="col-start-2 col-end-8 row-span-1 backdrop-blur-xl rounded-sm border border-gray-500 p-4 text-wrap"
            >
            <div className="flex flex-row ml-auto my-4 font-[Roboto]">
                <a href="https://github.com/Alkoun-web-design" target="_blank" rel="noreferrer noopener" className="m-1 md:mx-4 h-6 w-6 hover:bg-gray-100 hover:text-gray-900 rounded-sm transition-all"><GithubIcon /></a>
                <span>Github</span>
                <a href="https://www.linkedin.com/in/hassam-sajid-26560752/" target="_blank" rel="noreferrer noopener" className="m-1 md:mx-4 h-6 w-6 hover:bg-gray-100 hover:text-gray-900 rounded-sm transition-all"><LinkedIcon /></a>
                <span>LinkedIn</span>
            <a href="" rel="noreferrer noopener" target="_blank" className="m-1 md:mx-4 h-6 w-6 hover:bg-gray-100 hover:text-gray-900 rounded-sm transition-all"><FacebookIcon /></a>
            </div>
          </motion.div>

          <motion.div           
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            // className="pb-10 px-1 pt-4 text-wrap"
            className="grid-cols-subgrid col-start-2 col-end-12 row-span-5 backdrop-blur-3xl rounded-sm border border-gray-500 p-4"
            >
            {/* <div className='rounded-sm text-xs text-center w-fit h-fit ml-4 cursor-pointer bg-gray-900 hover:text-black hover:bg-gray-100 transition-all duration-300' onClick={() => setContent('none')}> */}
                {/* <Close className='p-1' /> */}
            {/* </div> */}
            <div className="col-span-full justify-center my-4">
                <h3 className="text-xl">My Projects</h3>
            </div>
            <div className="col-span-3 font-[Roboto]">
              <p className='m-2'>Full stack developer with a focus on frontend with JavaScript, 
              TypeScript, React, Next.js, Node.js, Express, Alpine.js, CSS, Tailwind, Bootstrap, 
              React Three Fiber, Astro.js, Solid.js and Bun.js.</p>
            </div>
          </motion.div>

          {/* <div className="flex justify-center mt-6"> */}
            {/* {content === 'projects' && <Projects setContent={setContent} />} */}
            {/* {content === 'about' && <About setContent={setContent} />} */}
            {/* {content === 'contact' && <Contact />} */}
            {/* {content === 'none' && <Home setContent={setContent}/>} */}
          {/* </div>    */}
        </Html>
        {/* <SpaceEnv2 /> */}
        <SpaceEnv />
      </Canvas>
      <Loader />
    </div>
  );
}