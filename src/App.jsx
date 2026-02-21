// import { Canvas } from "@react-three/fiber";
// import SpaceEnv2 from "./SpaceEnv2";
import {useState, lazy} from "react";
const LoaderComponent = lazy(() => import("./components/LoaderComponent"));
const SpaceEnv = lazy(() => import("./SpaceEnv"));
// import Contact from "./components/Contact";
const Canvas = lazy(() => import('./components/CanvasComponent'))
const MusicPlayer = lazy(() => import("./components/MusicPlayer"));
// import { motion } from "motion/react"
import { AnimatePresence } from "motion/react"
// import MyProjects from "./components/MyProjects";
const MyProjects = lazy(() => import("./components/MyProjects"))
// import GetInTouch from "./components/GetInTouch";
const GetInTouch = lazy(() => import("./components/GetInTouch"))
import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
// import Attributions from "./components/Attributions";
const Attributions = lazy(() => import("./components/Attributions"))
import { Earth } from "./components/Icons";
import NewCell from "./components/NewCell";

export default function App() {
  const today = new Date;
  today.getFullYear();

  const [showSpace, setShowSpace] = useState(false);

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
            <NewCell />
            <MyProjects />
            </>
          )}
        </AnimatePresence>
      </div>
      <div className="fixed top-0 -z-10 h-screen w-full  bg-black">
        <Canvas shadows>
          <SpaceEnv />
        </Canvas>
        <LoaderComponent />
      </div>
    </>
  );
}