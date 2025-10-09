import { motion } from 'framer-motion'

/**
 * PageTransition Component - Gère les transitions entre les pages
 * Applique une animation d'entrée fluide à chaque changement de page
 */
const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        duration: 0.5,
        ease: 'easeInOut'
      }}
    >
      {children}
    </motion.div>
  )
}

export default PageTransition
