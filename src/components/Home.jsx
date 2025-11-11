import React from 'react';
import { motion } from "motion/react"
export default function Home() {

  return (
      <>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }} 
          className="flex flex-col justify-start text">
          <h1 className="text-5xl">AWDev</h1>
          {/* <h2 className="text-3xl">Ready to Dev</h2> */}
        </motion.div>
      </>
    )
}