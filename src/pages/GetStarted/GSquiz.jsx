import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const pro1 = {
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

const GSquiz = ({open,onClose}) => {
  if(!open) return null
  return (
    <AnimatePresence>
    <motion.div class="pro1" id="pro1"
    variants={pro1}
    initial="hidden"
    animate="visible">
    <div className="cross" onClick={onClose}> X </div>
        <h2>Resouces for help:</h2>
        <p>It is adviced that you do not blindly copy-paste from the given resources but rather take your time and understand each video before proceeding to make your own app </p>
        <div class="funlist">
            <ul>
                <li>
                    <a href="https://www.youtube.com/watch?v=N-Jw-Nf_gZ0" target="_blank" rel="noopener noreferrer">Making a Quiz App using Flutter</a>
                </li>
                <li>
                    <a href="https://www.youtube.com/watch?v=yHrpx4PoBzU" target="_blank" rel="noopener noreferrer">Complete Quiz App With Timer In Flutter</a>
                </li>
                <li>
                    <a href="https://www.youtube.com/watch?v=sR3dvBZJ8fg" target="_blank" rel="noopener noreferrer">Flutter: A Simple Quiz App</a>
                </li>
            </ul>
        </div>
        <button type="button" onClick={onClose}>continue to roadmap</button>
    </motion.div>
    </AnimatePresence>
  )
}

export default GSquiz;
