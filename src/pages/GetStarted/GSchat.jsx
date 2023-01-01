import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const pro5 = {
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

const GSchat = ({open,onClose}) => {
  if(!open) return null
  return (
    <AnimatePresence>
        <motion.div class="pro5" id="pro5"
        variants={pro5}
        initial="hidden"
        animate="visible">
        <div className="cross" onClick={onClose}> X </div>
                <h2>Resouces for help:</h2>
                <p>It is advised that you do not blindly copy-paste from the given resources but rather take your time and understand each video before proceeding to make your own app </p>
                <div class="funlist">
                    <ul>
                        <li>
                            <a href="https://www.youtube.com/watch?v=h-qmhdATO3U&list=PLzc1k4Riyr4JTrMTlOe1bJby1REquygyc&ab_channel=STARTECH" target="_blank" rel="noopener noreferrer">Flutter Chat App</a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/watch?v=7844jKWKIe0&ab_channel=Codepur" target="_blank" rel="noopener noreferrer">Flutter Chat App Tutorial With Localization</a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/watch?v=lsF2Ig6cyP8&list=PLgvaMOCkUA6zqL46Yze3JrRjsFXUiV-2v&ab_channel=AdityaChaudhary" target="_blank" rel="noopener noreferrer">Chat App Flutter- with Flutter and Firebase</a>
                        </li>
                    </ul>
                </div>
                <button type="button"  onClick={onClose}>continue to roadmap</button>
        </motion.div>
    </AnimatePresence>
  )
}

export default GSchat;
