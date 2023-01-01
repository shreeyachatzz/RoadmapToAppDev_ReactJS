import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const pro2 = {
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


const GSexpense = ({open,onClose}) => {
  if(!open) return null
  return (
    <AnimatePresence>
        <motion.div class="pro2" id="pro2"
        variants={pro2}
        initial="hidden"
        animate="visible">
        <div className="cross" onClick={onClose}> X </div>
    <h2>Resouces for help:</h2>
    <p>It is adviced that you do not blindly copy-paste from the given resources but rather take your time and understand each video before proceeding to make your own app </p>
    <div class="funlist">
        <ul>
            <li>
                <a href="https://www.youtube.com/watch?v=UeZ1bcEqEQE&t=32s" target="_blank" rel="noopener noreferrer">EXPENSE TRACKER • Flutter × Google Sheets</a>
            </li>
            <li>
                <a href="https://www.youtube.com/watch?v=VOWy5-zTeWk&ab_channel=DesiProgrammer" target="_blank" rel="noopener noreferrer">Money Manager app in flutter with Charts , Hive DB</a>
            </li>
            <li>
                <a href="https://www.youtube.com/watch?v=wRHa9O685Rg&ab_channel=AmitavRoy" target="_blank" rel="noopener noreferrer">Creating my expense tracker app</a>
            </li>
        </ul>
    </div>
    <button type="button" onClick={onClose}>continue to roadmap</button>
    </motion.div>
    </AnimatePresence>
  )
}

export default GSexpense
