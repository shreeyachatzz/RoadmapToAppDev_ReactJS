import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const repo = {
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

const RepoHosting = ({open,onClose}) => {
  if(!open) return null
  return (
    <AnimatePresence>
        <motion.div class="repo" id="repo"
        variants={repo}
        initial="hidden"
        animate="visible">
  
    <div className="cross" onClick={onClose}> X </div>
            <h2>REPO HOSTING SERVICES</h2>
            <p>There are multiple platforms available to host your GitHub repositories. The most commonly used ones are: </p>
            <div className="funlist">
                <ul>
                    <li>
                        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </li>
                    <li>
                        <a href="https://about.gitlab.com/" target="_blank" rel="noopener noreferrer">GitLab</a>
                    </li>
                    <li>
                        <a href="https://bitbucket.org/product?&aceid=&adposition=&adgroup=92542405575&campaign=9128560731&creative=414608950767&device=c&keyword=bitbucket&matchtype=e&network=g&placement=&ds_kids=p51241303134&ds_e=GOOGLE&ds_eid=700000001551985&ds_e1=GOOGLE&gclid=Cj0KCQjwnP-ZBhDiARIsAH3FSRerGAvJ7V6Ei0yDdwkIi-OsFYB_W8OeCGJXV_jmV6GzZfa4CwubEZYaAgAdEALw_wcB&gclsrc=aw.ds" target="_blank" rel="noopener noreferrer">Bitbucket</a>
                    </li>
                </ul>
            </div>		
            <button type="button" onClick={onClose}>continue to roadmap</button>		
        </motion.div>
        </AnimatePresence>
  )
}

export default RepoHosting
