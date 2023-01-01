import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const version = {
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

const VersionControl = ({open,onClose}) => {
  if(!open) return null
  return (
    <AnimatePresence>
    <motion.div class="version" id="version"
    variants={version}
    initial="hidden"
    animate="visible">
    <div className="cross" onClick={onClose}> X </div>
           <h2>VERSION CONTROL SYSTEMS</h2>
            <p>Version control systems record your changes to the codebase and allow you to recall specific versions later. There are multiple Version Control Systems available but <a href="https://git-scm.com/">Git</a> is the most common one these days.</p>
            <p>Here are some of the resources to get you started. Feel free to google and find something else that you find easier:</p>
            <div className="funlist">
                <ul>
                    <li>
                        <a href="https://www.udacity.com/course/version-control-with-git--ud123" target="_blank" rel="noopener noreferrer">Udacity- Version Control with Git</a>
                    </li>
                    <li>
                        <a href="https://guides.github.com/activities/hello-world/" target="_blank" rel="noopener noreferrer">GitHub Hello World</a>
                    </li>
                </ul>
            </div>		
            <button type="button" onClick={onClose}>continue to roadmap</button>	
        </motion.div>
    </AnimatePresence>
  )
}

export default VersionControl
