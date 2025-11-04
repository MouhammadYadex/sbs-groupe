import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

/**
 * ServiceCard Component - Carte de service moderne et interactive
 * Affiche un service avec icône, titre, description et effets 3D sophistiqués
 * 
 * @param {Object} props
 * @param {React.Component} props.icon - Icône du service (composant lucide-react)
 * @param {string} props.title - Titre du service
 * @param {string} props.description - Description du service
 * @param {number} props.index - Index pour l'animation décalée
 */
const ServiceCard = ({ icon: Icon, title, description, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3 }
      }}
      className="relative group"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      {/* Carte principale avec effets */}
      <div className="relative h-full bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-500 overflow-hidden border border-gray-100">
        
        {/* Gradient background animé au hover */}
        <div className="absolute inset-0 bg-gradient-modern opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
        
        {/* Bordure gradient au hover */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary-500/20 via-transparent to-gold-500/20 -z-10"></div>

        {/* Icône avec effet 3D et glow */}
        <div className="relative mb-6 w-fit">
          <motion.div 
            className="relative w-20 h-20 bg-gradient-modern rounded-2xl flex items-center justify-center shadow-glow group-hover:shadow-glow-lg transition-all duration-500"
            whileHover={{ 
              rotate: [0, -10, 10, -10, 0],
              scale: 1.1
            }}
            transition={{ duration: 0.5 }}
          >
            <Icon size={36} className="text-white relative z-10" />
            
            {/* Glow effect animé */}
            <motion.div
              className="absolute inset-0 bg-primary-400 rounded-2xl blur-xl opacity-50"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.3, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            ></motion.div>
          </motion.div>

          {/* Badge décoratif */}
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-gold-400 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-gold-glow">
            <span className="text-white text-xs font-bold">✓</span>
          </div>
        </div>

        {/* Titre avec animation */}
        <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-primary-600 transition-colors duration-300">
          {title}
        </h3>

        {/* Barre de séparation animée */}
        <div className="w-16 h-1 bg-gradient-gold rounded-full mb-4 group-hover:w-24 transition-all duration-500"></div>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-6">
          {description}
        </p>

        {/* CTA avec flèche animée */}
        <div className="flex items-center text-primary-600 font-semibold group-hover:text-gold-600 transition-colors duration-300">
          <span className="mr-2">En savoir plus</span>
          <ArrowRight 
            size={20} 
            className="transform group-hover:translate-x-2 transition-transform duration-300" 
          />
        </div>

        {/* Particules décoratives */}
        <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-primary-100 to-gold-100 rounded-full blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
        <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-gold-100 to-primary-100 rounded-full blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
      </div>

      {/* Ombre 3D effet */}
      <div className="absolute inset-0 bg-gradient-modern opacity-0 group-hover:opacity-10 blur-2xl rounded-2xl transform translate-y-4 -z-20 transition-opacity duration-500"></div>
    </motion.div>
  )
}

export default ServiceCard
