import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const pick = {
  hidden:{
      y: "100px",
      opacity: 0
  },
  visible:{
      y:"200px",
      opacity: 1,
      transition: {delay: 0.5}
  },
} 


const PickaLang = ({open,onClose}) => {
  if(!open) return null
  return (
    <AnimatePresence>
        <motion.div class="pick" id="pick"
        variants={pick}
        initial="hidden"
        animate="visible">
    <div className="cross" onClick={onClose}> X </div>
      <h2>PICK A LANGUAGE</h2>
            <img src="assets/images/java.png" alt=""/>
            <img src="assets/images/Kotlin.png" alt=""/>
            <p>For the languages, you can develop android apps either by using Kotlin or Java.</p>
            <p>Kotlin is the preferred choice these days for native android apps</p>
            <p>
                Although, you can use both Kotlin and Java to develop native android apps, Google announced in 2019 to make Kotlin the preferred way of developing android applications. If you were to start learning android development today, Kotlin should be your language of choice.
            </p>
            <button type="button" onClick={onClose}>continue to roadmap</button>
    </motion.div>
    </AnimatePresence>

  )
}

export default PickaLang
