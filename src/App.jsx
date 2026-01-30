import { Canvas } from "@react-three/fiber";
import { Html, Loader } from "@react-three/drei";
import SpaceEnv from "./SpaceEnv";
// import SpaceEnv2 from "./SpaceEnv2";
import React from "react";
// import Contact from "./components/Contact";
import MusicPlayer from "./components/MusicPlayer";
import { motion } from "motion/react"
import Footer from './components/Footer';
import { AnimatePresence } from "motion/react"
import MyProjects from "./components/MyProjects";
import GetInTouch from "./components/GetInTouch";
import AboutMe from "./components/AboutMe";

export default function App() {
  const today = new Date;
  today.getFullYear();

  // const [content, setContent] = React.useState('none');

  const [showSpace, setShowSpace] = React.useState(true);

  // function handlePageChange(page) {
  //   setContent(page);
  // };

  return (
    <>
    <div className="grid grid-cols-12 grid-rows-12 gap-6 font-[Syncopate] text-gray-100 h-screen w-full">
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
        <button onClick={() => setShowSpace(prev => !prev)} className="m-4 inline-block text-sm font-[Roboto] bg-gray-900 rounded-full px-4 py-2 w-fit hover:text-gray-900 hover:bg-gray-100 hover:cursor-pointer transition-all">
          Take Me Home <img src="/images/earth-15-svgrepo-com.svg" className="inline-block h-5 w-5 ml-1"/>
        </button>
      </header>

        <AnimatePresence>
          { showSpace && (   
            <>     
            <motion.div 
              initial={{ opacity: 0, translateY: 5 }}
              animate={{ opacity: 1, translateY: 0 }}
              exit={{ opacity:0 , translateY: 5 }}
              transition={{ duration: 0.5 }}
              className="col-start-2 col-end-8 row-span-4 backdrop-blur-2xl rounded-xl border border-gray-500 p-4 text-gray-100">
              <h1 className="text-xl md:text-5xl m-2 tracking-tighter text-balance">HASSAM SAJID</h1>
              <h2 className="text-xl md:text-2xl m-2 font-[Roboto]">Frontend and Fullstack Web Developer</h2>
              <div className="flex flex-row ml-auto my-4 font-[Roboto] flex-wrap text-sm">
                <span className="hover:-translate-y-1 duration-300 ease-out transition-all">
                  <img src="/images/js-icon.svg" className="inline w-6 h-6 ml-3 mr-1 my-1"/>
                  <span className="my-auto">JavaScript</span>
                </span>
                <span className="hover:-translate-y-1 duration-300 ease-out transition-all">
                  <img src="/images/ts-icon 1.svg" className="inline w-6 h-6 ml-3 mr-1 my-1"/>
                  <span className="my-auto">TypeScript</span>
                </span>
                <span className="hover:-translate-y-1 duration-300 ease-out transition-all">
                  <img src="/images/react-svgrepo-com.svg" className="inline w-6 h-6 ml-3 mr-1 my-1"/>
                  <span className="my-auto">React</span>
                </span>
                <span className="hover:-translate-y-1 duration-300 ease-out transition-all">
                  <img src="/images/next-icon-2.svg" className="inline w-6 h-6 ml-3 mr-1 my-1"/>
                  <span className="my-auto">Next.js</span>
                </span>
                <span className="hover:-translate-y-1 duration-300 ease-out transition-all">
                  <img src="/images/node-svgrepo-com.svg" className="inline w-6 h-6 ml-3 mr-1 my-1"/>
                  <span className="my-auto">Node.js</span>
                </span>
                <span className="hover:-translate-y-1 duration-300 ease-out transition-all">
                  <img src="/images/Group 16.svg" className="inline w-6 h-6 ml-3 mr-1 my-1"/>
                  <span className="my-auto">Express.js</span>
                </span>
                <span className="hover:-translate-y-1 duration-300 ease-out transition-all">
                  <img src="/images/alpinejs-icon-1.svg" className="inline w-6 h-6 ml-3 mr-1 my-1"/>
                  <span className="my-auto">Alpine.js</span>
                </span>
                <span className="hover:-translate-y-1 duration-300 ease-out transition-all">
                  <img src="/images/solid-icon.svg" className="inline w-6 h-6 ml-3 mr-1 my-1"/>
                  <span className="my-auto">Solid.js</span>
                </span>
                <span className="hover:-translate-y-1 duration-300 ease-out transition-all">
                  <img src="/images/tailwind-svgrepo-com.svg" className="inline w-6 h-6 ml-3 mr-1 my-1"/>
                  <span className="my-auto">Tailwind</span>
                </span>
                <span className="hover:-translate-y-1 duration-300 ease-out transition-all">
                  <img src="/images/bun-icon 1.svg" className="inline w-6 h-6 ml-3 mr-1 my-1"/>
                  <span className="my-auto">Bun.js</span>
                </span>
                <span className="hover:-translate-y-1 duration-300 ease-out transition-all">
                  <img src="/images/astro-icon-2.svg" className="inline w-6 h-6 ml-3 mr-1 my-1"/>
                  <span className="my-auto">Astro.js</span>
                </span>
                <span className="hover:-translate-y-1 duration-300 ease-out transition-all">
                  <img src="/images/css-icon.svg" className="inline w-6 h-6 ml-3 mr-1 my-1"/>
                  <span className="my-auto">CSS3</span>
                </span>
                <span className="hover:-translate-y-1 duration-300 ease-out transition-all">
                  <img src="/images/html5-svgrepo-com.svg" className="inline w-6 h-6 ml-3 mr-1 my-1"/>
                  <span className="my-auto">HTML5</span>
                </span>
              </div>
              {/* <p className="font-[Roboto] my-4">Frontend & Fullstack dev in JavaScript | TypeScript | React | Next.js | Node | Tailwind | Express. Working on an E-commerce website | learning Go. Blender and interested in XR.</p> */}
              <Footer />
            </motion.div>

            <AboutMe />

            <GetInTouch  />

            <MyProjects />
            </>
          )}
        </AnimatePresence>
      </div>
      <div className="absolute top-0 -z-10 h-screen w-full  bg-black">
      <Canvas shadows>
        
        {/* <SpaceEnv2 /> */}
        <SpaceEnv />
      </Canvas>
      <Loader />
    </div>
    </>
  );
}