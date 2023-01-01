import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const fundamental = {
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

const TheFundamentals = ({open,onClose}) => {
  if(!open) return null
  return (
    <AnimatePresence>
        <motion.div class="fundamental" id="fundamental"
        variants={fundamental}
        initial="hidden"
        animate="visible">
    <div className="cross" onClick={onClose}> X </div>
            <h2>THE FUNDAMENTALS</h2>
            <p>Install the Android Studio and learn the basics of Kotlin to get started.</p>
            <div className="funlist">
                <ul>
                    <li>
                        <a href="https://blog.teamtreehouse.com/absolute-beginners-guide-kotlin" target="_blank" rel="noopener noreferrer">Learn the basics of Kotlin</a>
                    </li>
                    <li>
                        <a href="https://kotlinlang.org/docs/reference/basic-syntax.html" target="_blank" rel="noopener noreferrer">Kotlin Docs</a> and <a href="https://kotlinlang.org/docs/tutorials/" target="_blank" rel="noopener noreferrer">Official Kotlin Tutorials</a>
                    </li>
                    <li>
                        <a href="https://www.studytonight.com/data-structures/introduction-to-data-structures" target="_blank" rel="noopener noreferrer">Data Structures and Algorithms.</a> Also <a href="https://www.tutorialspoint.com/data_structures_algorithms/index.htm" target="_blank" rel="noopener noreferrer">check this</a>
                    </li>
                    <li>
                        <a href="https://kotlinlang.org/docs/reference/collections-overview.html" target="_blank" rel="noopener noreferrer">Kotlin Data Structures</a>
                    </li>
                    <li>
                        <a href="https://github.com/bmaslakov/kotlin-algorithm-club" target="_blank" rel="noopener noreferrer">Algorithms and DataStructures in Kotlin</a>
                    </li>
                </ul>
            </div>		
            <button type="button" onClick={onClose}>continue to roadmap</button>		
        </motion.div>
        </AnimatePresence>
        )
}

export default TheFundamentals
