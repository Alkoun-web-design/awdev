import { motion } from 'motion/react';

export default function Hero() { 
    return (
        <motion.div 
          initial={{ opacity: 0, translateY: 5 }}
          animate={{ opacity: 1, translateY: 0 }}
          exit={{ opacity:0 , translateY: 5 }}
          transition={{ duration: 0.5 }}
          className="col-start-2 col-end-12 md:col-span-7 lg:col-start-2 lg:col-end-8 row-span-3 backdrop-blur-2xl rounded-xl border border-gray-500 p-4 text-gray-100 overflow-y-scroll">
          <h1 className="text-xl md:text-5xl m-2 tracking-tighter text-balance">HASSAM SAJID</h1>
          <h2 className="text-xl md:text-2xl m-2 font-[Roboto]">Frontend and Fullstack Web Developer</h2>
          <div className="flex flex-row ml-auto font-[Roboto] flex-wrap text-sm">
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
        </motion.div>
    )
}