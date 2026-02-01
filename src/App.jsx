// import { Canvas } from "@react-three/fiber";
import { Loader } from "@react-three/drei";
import SpaceEnv from "./SpaceEnv";
// import SpaceEnv2 from "./SpaceEnv2";
import React from "react";
// import Contact from "./components/Contact";
import MusicPlayer from "./components/MusicPlayer";
// import { motion } from "motion/react"
import { AnimatePresence } from "motion/react"
import MyProjects from "./components/MyProjects";
import GetInTouch from "./components/GetInTouch";
import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
import Attributions from "./components/Attributions";
import { Earth } from "./components/Icons";

const Canvas = React.lazy(() => import('./components/CanvasComponent'))

export default function App() {
  const today = new Date;
  today.getFullYear();

  const [showSpace, setShowSpace] = React.useState(false);

  return (
    <>
    <div className="grid grid-cols-12 grid-rows-none md:grid-rows-12 gap-2 md:gap-4 lg:gap-6 font-[Syncopate] text-gray-100 h-full md:h-screen w-full overflow-auto">
      <header className="col-span-full row-span-1 font-bold justify-items-center">
        <MusicPlayer />
        <button onClick={() => setShowSpace(prev => !prev)} className="m-2 md:m-4 inline-block text-sm font-[Roboto] bg-gray-900 rounded-full px-4 py-2 w-fit hover:text-gray-900 hover:bg-gray-100 hover:cursor-pointer transition-all">
          {showSpace ? "Portfolio" : "Show Earth"}
          <Earth />
        </button>
      </header>
        <AnimatePresence>
          { !showSpace && (   
            <>     
            <Hero />
            <AboutMe />
            <GetInTouch  />
            <Attributions />
            <MyProjects />
            </>
          )}
        </AnimatePresence>
      </div>
      <div className="fixed top-0 -z-10 h-screen w-full  bg-black">
        <Canvas shadows>
          <SpaceEnv />
        </Canvas>
        <Loader />
      </div>
    </>
  );
}