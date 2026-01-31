import { motion } from "motion/react"
import React from "react"
import { LeftChevron, RightChevron, Link } from "./Icons";

const contactMethods = [
  { method: "Github", detail: "Alkoun-web-design", image: "/images/github-svgrepo-com.svg", link: "https://github.com/Alkoun-web-design" },
  { method: "Linkedin", detail: "Hassam Sajid", image: "/images/linkedin-svgrepo-com.svg", link: "https://www.linkedin.com/in/hassam-sajid-26560752/" },
  { method: "Email", detail: "hassam.dvlpr@proton.me", image: "/images/mail-svgrepo-com.svg", link: "hassam.dvlpr@proton.me" },
  { method: "Signal", detail: "HassamDev.05", image: "/images/signal-svgrepo-com.svg", link: "" },
  // { method: "Facebook", detail: "HassamDev.05", image: "/images/signal-svgrepo-com.svg", link: "" },

]
export default function GetInTouch() { 

  const [index, setIndex] = React.useState(0);

    return (
        <motion.div           
            initial={{ opacity: 0, translateY: 5 }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity:0 , translateY: 5 }}
            transition={{ duration: 0.5 }}
            className="col-start-2 col-end-12 md:col-span-4 lg:col-start-2 lg:col-end-5 row-span-1 md:row-span-2 backdrop-blur-xl rounded-sm border border-gray-500 p-4 text-wrap overflow-y-scroll"
            >
            <p className="font-[Roboto]">Get in touch with me: </p>
            <div className="flex flex-row justify-between font-[Roboto] align-middle text-sm mt-2">
                <div onClick={() => {index === 0 ? setIndex(contactMethods.length-1) : setIndex(index-1)}} className='bg-gray-900 text-gray-100 hover:bg-gray-100 hover:text-black transition-all h-fit w-fit mx-1 cursor-pointer rounded-sm'>
                    <LeftChevron className='h-5 w-5' />
                </div>
                <a href={contactMethods[index].link} target="_blank" rel="noreferrer noopener" className="mx-1 rounded-sm hover:-translate-y-1 duration-300 transition-all">
                  <img src={contactMethods[index].image} className="h-5 w-5 inline-block"/>
                  {/* <p className="inline-block align-middle ml-1">{contactMethods[index].method}: </p> */}
                  <p className="inline-block align-middle ml-1">{contactMethods[index].detail}</p>
                </a>
                <div onClick={() => {index === contactMethods.length-1 ? setIndex(0) : setIndex(index+1)}} className='bg-gray-900 text-gray-100 hover:bg-gray-100 hover:text-black transition-all h-fit w-fit mx-1 cursor-pointer rounded-sm' >
                    <RightChevron className='h-5 w-5' />
                </div>
            </div>

            <div className="mx-auto text-center">
                {contactMethods.map((method, i) => (
                  <p key={i} className={`${ i - 1 < index ? 'inline mx-1 text-gray-100 select-none text-3xl' : 'inline mx-1 text-gray-600 select-none text-3xl' }`}>.</p>
                ))}
            </div>
        </motion.div>
    )
}
