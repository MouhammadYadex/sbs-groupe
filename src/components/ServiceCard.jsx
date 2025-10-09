import { motion } from 'framer-motion'

/**
 * ServiceCard Component - Carte de service réutilisable
 * Affiche un service avec icône, titre, description et animation au hover
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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="service-card card group"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      {/* Icône avec fond coloré */}
      <div className="mb-6">
        <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-600 transition-colors duration-300">
          <Icon size={32} className="text-primary-600 group-hover:text-white transition-colors duration-300" />
        </div>
      </div>

      {/* Titre */}
      <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary-600 transition-colors">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>

      {/* Indicateur hover */}
      <div className="mt-6 flex items-center text-primary-600 font-semibold group-hover:translate-x-2 transition-transform">
        En savoir plus
        <svg 
          className="w-5 h-5 ml-2" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M9 5l7 7-7 7" 
          />
        </svg>
      </div>
    </motion.div>
  )
}

export default ServiceCard
