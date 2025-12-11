import React from 'react';
import { motion } from "motion/react"
import Footer from './Footer';
export default function Home() {

  return (
      <>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="flex flex-col self-start text">
          <h1 className="select-none text-gray-100 text-6xl md:text-8xl">AWDev</h1>
          {/* <h2 className="te7t-3xl">Ready to Dev</h2> */}
        </motion.div>
        <Footer />
      </>
    )
}