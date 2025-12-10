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
export default function App() {
  const today = new Date;
  today.getFullYear();

  const [content, setContent] = React.useState('none');

  function handlePageChange(page) {
    setContent(page);
  };

  return (
    <div className="font-[Syncopate] text-gray-100 h-screen w-full bg-black">
      <Canvas shadows>
        <Html className="absolute z-20 h-screen w-screen" center>
          {/* <header className="flex flex-row h-12 mx-4 px-4 py-3 rounded-full border-b border-gray-100 font-bold bg-[#0000007f]"> */}
          <header className="flex flex-row h-12 mx-4 px-4 py-3 rounded-full font-bold bg-[#0000007f]">
            <h2 className="hidden md:inline justify-start cursor-pointer" onClick={() => handlePageChange('none')}>AWDev</h2>
            <div className="mx-auto">
              <ul className="flex jusitfy-end text-xs md:text-md">
                <li className="m-1 p-1 md:px-2 cursor-pointer hover:bg-gray-100 hover:text-gray-900 rounded-sm transition-all" onClick={() => handlePageChange('projects')}>Projects</li>
                <li className="m-1 p-1 md:px-2 cursor-pointer hover:bg-gray-100 hover:text-gray-900 rounded-sm transition-all" onClick={() => handlePageChange('about')}>About AWDev</li>
                {/* <li className="mx-4 px-4 cursor-pointer" onClick={() => setContent('contact')}>Contact</li> */}
              </ul>
            </div>
            <div className="flex flex-row ml-auto ">
              {/* <a href="https://github.com/Alkoun-web-design" target="_blank" rel="noreferrer noopener" className="my-1 mx-4 h-6 w-6"><img src="/images/github-logo-wht.svg" /></a> */}
              <a href="https://github.com/Alkoun-web-design" target="_blank" rel="noreferrer noopener" className="m-1 md:mx-4 h-6 w-6 hover:bg-gray-100 hover:text-gray-900 rounded-sm transition-all"><GithubIcon /></a>
              {/* <a href="https://www.linkedin.com/in/hassam-sajid-26560752/" target="_blank" rel="noreferrer noopener" className="my-1 mx-4 h-6 w-6"><img src="/images/linkedin-logo-wht.svg" /></a> */}
              <a href="https://www.linkedin.com/in/hassam-sajid-26560752/" target="_blank" rel="noreferrer noopener" className="m-1 md:mx-4 h-6 w-6 hover:bg-gray-100 hover:text-gray-900 rounded-sm transition-all"><LinkedIcon /></a>
              {/* <a href="" rel="noreferrer noopener" target="_blank" className="my-1 mx-4 h-6 w-6"><img src="/images/facebook-logo-wht.svg" /></a> */}
              <a href="" rel="noreferrer noopener" target="_blank" className="m-1 md:mx-4 h-6 w-6 hover:bg-gray-100 hover:text-gray-900 rounded-sm transition-all"><FacebookIcon /></a>
            </div>
          </header>
          <MusicPlayer />
          <div className="flex justify-center mt-6">
            {content === 'projects' && <Projects setContent={setContent} />}
            {content === 'about' && <About setContent={setContent} />}
            {/* {content === 'contact' && <Contact />} */}
            {content === 'none' && <Home setContent={setContent}/>}
          </div>   
        </Html>
        {/* <SpaceEnv2 /> */}
        <SpaceEnv />
      </Canvas>
      <Loader />
    </div>
  );
}