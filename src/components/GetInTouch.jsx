
import { motion } from "motion/react"
export default function GetInTouch() { 
    return (
        <motion.div           
            initial={{ opacity: 0, translateY: 5 }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity:0 , translateY: 5 }}
            transition={{ duration: 0.5 }}
            className="col-start-2 col-end-8 row-span-1 backdrop-blur-xl rounded-sm border border-gray-500 p-4 text-wrap"
            >
            <div className="flex flex-row ml-auto font-[Roboto] align-middle text-sm my-auto">
              <p className="font-[Roboto]">Get in touch with me: </p>
                <a href="https://github.com/Alkoun-web-design" target="_blank" rel="noreferrer noopener" className="mx-2 rounded-sm hover:-translate-y-1 duration-300 transition-all">
                  <img src="/images/github-svgrepo-com.svg" className="h-6 w-6 inline-block"/>
                  <span className="inline-block align-middle ml-1">Github</span>
                </a>
                <a href="https://www.linkedin.com/in/hassam-sajid-26560752/" target="_blank" rel="noreferrer noopener" className="mx-2 rounded-sm hover:-translate-y-1 duration-300 transition-all">
                  <img src="/images/linkedin-svgrepo-com.svg" className="h-6 w-6 inline-block"/>
                  <span className="inline-block align-middle ml-1">LinkedIn</span>
                </a>
                <a href="https://www.linkedin.com/in/hassam-sajid-26560752/" target="_blank" rel="noreferrer noopener" className="mx-2 rounded-sm hover:-translate-y-1 duration-300 transition-all">
                  <img src="/images/mail-svgrepo-com.svg" className="h-6 w-6 inline-block"/>
                  <span className="inline-block align-middle ml-1">hassam.dvlpr@proton.me</span>
                </a>
                <a href="https://www.linkedin.com/in/hassam-sajid-26560752/" target="_blank" rel="noreferrer noopener" className="mx-2 rounded-sm hover:-translate-y-1 duration-300 transition-all">
                  <img src="/images/signal-svgrepo-com.svg" className="h-6 w-6 inline-block"/>
                  <span className="inline-block align-middle ml-1">HassamDev.05</span>
                </a>
                
            {/* <a href="" rel="noreferrer noopener" target="_blank" className="m-1 md:mx-4 h-6 w-6 hover:bg-gray-100 hover:text-gray-900 rounded-sm transition-all"><FacebookIcon /></a> */}
            </div>
        </motion.div>
    )
}
