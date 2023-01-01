import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
const backdrop ={
    visible:{opacity: 1},
    hidden:{opacity: 0}
}


const GSback = ({open,onClose}) => {
  if(!open) return null
  return (
    <AnimatePresence exitBeforeEnter>
    <motion.div className='backdrop'
        variants={backdrop}
        initial="hidden"
        animate="visible"
        onClick={(e)=> e.stopPropagation()}
        >
        </motion.div>
    </AnimatePresence>
  )
}

export default GSback;
