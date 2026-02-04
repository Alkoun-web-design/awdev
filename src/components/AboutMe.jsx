import { motion } from 'motion/react';

export default function AboutMe() { 
    return (
        <motion.div           
            initial={{ opacity: 0, translateY: 5 }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity:0 , translateY: 5 }}
            transition={{ duration: 0.5 }}
            className="col-start-2 col-end-12 md:col-span-5 lg:col-start-8 lg:col-end-12 row-span-2 md:row-span-5 backdrop-blur-2xl rounded-sm border border-gray-500 p-2 text-wrap overflow-auto"
            >
            <div className="grid justify-items-center text-center m-2">
                <h3 className="text-xl">About AwDev & Me</h3>
                <img src="/images/me.webp" loading='lazy' className="h-20 w-20 rounded-full m-2"/>
            </div>
            <div className="font-[Roboto] text-sm text-justify">
              <p className='m-2'>Full stack developer with a focus on frontend with JavaScript, 
              TypeScript, React, Next.js, Node.js, Express, Alpine.js, CSS, Tailwind, Bootstrap, 
              React Three Fiber, Astro.js, Solid.js and Bun.js.</p>
              <p className='m-2'>Currently working on a personal finance app, an e-commerce website.</p>
              <p className='m-2'>Learning blender, testing and Golang.</p>
            </div>
        </motion.div>
    )

}
