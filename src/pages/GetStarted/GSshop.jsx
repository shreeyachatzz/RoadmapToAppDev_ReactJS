import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const pro4 = {
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

const GSshop = ({open,onClose}) => {
  if(!open) return null
  return (
    <AnimatePresence>
        <motion.div class="pro4" id="pro4"
        variants={pro4}
        initial="hidden"
        animate="visible">
        <div className="cross" onClick={onClose}> X </div>
            <h2>Resouces for help:</h2>
            <p>It is advised that you do not blindly copy-paste from the given resources but rather take your time and understand each video before proceeding to make your own app </p>
            <div class="funlist">
                <ul>
                    <li>
                        <a href="https://www.youtube.com/watch?v=XBKzpTz65Io&ab_channel=TheFlutterWay" target="_blank" rel="noopener noreferrer">Online Shop App - Flutter UI </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/watch?v=5TN48ecBhDQ&ab_channel=AkshayJhajhra" target="_blank" rel="noopener noreferrer">Building an E-Commerce App</a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/watch?v=5Cq92yQa3Mo&ab_channel=RajaYogan" target="_blank" rel="noopener noreferrer">Flutter UI - Cookie Store</a>
                    </li>
                </ul>
            </div>
            <button type="button" onClick={onClose}>continue to roadmap</button>
        </motion.div>
    </AnimatePresence>
  )
}

export default GSshop;
