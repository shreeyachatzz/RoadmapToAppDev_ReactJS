import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const pro3 = {
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


const GSmeals = ({open,onClose}) => {
  if(!open) return null
  return (
    <AnimatePresence>
    <motion.div class="pro3" id="pro3"
    variants={pro3}
    initial="hidden"
    animate="visible">
    
    <div className="cross" onClick={onClose}> X </div>
        <h2>Resouces for help:</h2>
        <p>It is adviced that you do not blindly copy-paste from the given resources but rather take your time and understand each video before proceeding to make your own app </p>
        <div class="funlist">
            <ul>
                <li>
                    <a href="https://www.youtube.com/watch?v=GxHyNwBOBMg&ab_channel=TheTechDesigner" target="_blank" rel="noopener noreferrer">Flutter App UI | Food Recipes App UI</a>
                </li>
                <li>
                    <a href="https://www.youtube.com/watch?v=cvAw9wucmBc&ab_channel=TheFlutterWay" target="_blank" rel="noopener noreferrer">Food or Restaurant App - Main Page</a>
                </li>
                <li>
                    <a href="https://www.youtube.com/watch?v=CBiXxOQSK5o&ab_channel=FullstackSchool" target="_blank" rel="noopener noreferrer">Flutter UI Food Delivery App Tutorial </a>
                </li>
            </ul>
        </div>
        <button type="button" onClick={onClose}>continue to roadmap</button>
        </motion.div>
        </AnimatePresence>
)
}

export default GSmeals;
