import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

/**
 * HeroSection Component - Section hero avec slider d'images animé
 * Affiche un carrousel d'images avec texte superposé et appel à l'action
 */
const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Contenu des slides
  const slides = [
    {
      id: 1,
      title: 'Construisons ensemble votre avenir',
      subtitle: 'Expert en construction et BTP depuis plus de 10 ans',
      description: 'Des projets de qualité, livrés dans les délais',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80',
      cta: 'Découvrir nos services'
    },
    {
      id: 2,
      title: 'Bâtiments & Infrastructures',
      subtitle: 'De la conception à la réalisation',
      description: 'Une expertise complète pour tous vos projets',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80',
      cta: 'Voir nos réalisations'
    },
    {
      id: 3,
      title: 'Offre Diaspora',
      subtitle: 'Construisez à distance en toute sérénité',
      description: 'Nous gérons votre projet de A à Z',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80',
      cta: 'En savoir plus'
    }
  ]

  // Changement automatique de slide toutes les 5 secondes
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [slides.length])

  // Navigation manuelle
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Animated background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-primary-800/80 to-primary-950/90 z-10"></div>
      
      {/* Floating shapes decoration - OPTIMIZED FOR MOBILE */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-primary-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-5 sm:right-10 w-56 sm:w-96 h-56 sm:h-96 bg-gold-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-40 sm:w-64 h-40 sm:h-64 bg-accent-cyan/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {/* Image de fond avec parallax effect */}
          <motion.div
            animate={{ scale: 1.1 }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          >
            {/* Overlay gradient moderne */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-900/80 via-primary-800/70 to-transparent"></div>
          </motion.div>

          {/* Contenu avec animations sophistiquées */}
          <div className="relative h-full flex items-center z-20">
            <div className="container-custom">
              <div className="max-w-4xl">
                {/* Badge animé - MOBILE OPTIMIZED */}
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.6 }}
                  className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6"
                >
                  <span className="w-2 h-2 bg-gold-400 rounded-full animate-pulse"></span>
                  <span className="text-white text-xs sm:text-sm font-medium">Leader en BTP depuis 2010</span>
                </motion.div>

                <motion.h1
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight"
                >
                  {slides[currentSlide].title}
                  <motion.span 
                    className="inline-block text-gold-400"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  >
                    .
                  </motion.span>
                </motion.h1>
                
                <motion.h2
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.7 }}
                  className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 mb-3 sm:mb-4 font-light"
                >
                  {slides[currentSlide].subtitle}
                </motion.h2>
                
                <motion.p
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.7 }}
                  className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-10 max-w-2xl leading-relaxed"
                >
                  {slides[currentSlide].description}
                </motion.p>
                
                {/* CTA Buttons - TOUCH OPTIMIZED */}
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.7 }}
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4"
                >
                  <Link 
                    to="/contact" 
                    className="group relative px-6 sm:px-8 py-4 sm:py-5 bg-gradient-gold text-white text-base sm:text-lg font-semibold rounded-2xl shadow-gold-glow hover:shadow-xl overflow-hidden transition-all duration-300 hover:scale-105 touch-manipulation active:scale-98 text-center"
                    style={{ minHeight: '56px' }}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {slides[currentSlide].cta}
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                  </Link>
                  <Link 
                    to="/a-propos" 
                    className="group px-6 sm:px-8 py-4 sm:py-5 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white text-base sm:text-lg font-semibold rounded-2xl hover:bg-white/20 hover:border-white/50 transition-all duration-300 flex items-center justify-center touch-manipulation active:scale-98"
                    style={{ minHeight: '56px' }}
                  >
                    En savoir plus
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </motion.div>

                {/* Stats rapides - MOBILE OPTIMIZED */}
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1, duration: 0.7 }}
                  className="mt-8 sm:mt-12 grid grid-cols-2 sm:flex sm:flex-wrap gap-4 sm:gap-8"
                >
                  {[
                    { number: "15+", label: "Ans d'expérience" },
                    { number: "500+", label: "Projets réalisés" },
                    { number: "98%", label: "Clients satisfaits" }
                  ].map((stat, index) => (
                    <div key={index} className="flex items-center space-x-2 sm:space-x-3">
                      <div className="h-10 sm:h-12 w-0.5 sm:w-1 bg-gradient-gold rounded-full"></div>
                      <div>
                        <div className="text-2xl sm:text-3xl font-bold text-white">{stat.number}</div>
                        <div className="text-xs sm:text-sm text-gray-300">{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Boutons de navigation - TOUCH OPTIMIZED */}
      <button
        onClick={prevSlide}
        aria-label="Slide précédent"
        className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 z-30 group touch-manipulation active:scale-95"
        style={{ minWidth: '48px', minHeight: '48px' }}
      >
        <ChevronLeft size={20} className="sm:w-6 sm:h-6 group-hover:-translate-x-1 transition-transform" />
      </button>
      
      <button
        onClick={nextSlide}
        aria-label="Slide suivant"
        className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 z-30 group touch-manipulation active:scale-95"
        style={{ minWidth: '48px', minHeight: '48px' }}
      >
        <ChevronRight size={20} className="sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
      </button>

      {/* Indicateurs de slides - TOUCH FRIENDLY */}
      <div className="absolute bottom-6 sm:bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex space-x-2 sm:space-x-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Aller au slide ${index + 1}`}
            className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 touch-manipulation ${
              currentSlide === index 
                ? 'w-10 sm:w-12 bg-gradient-gold shadow-gold-glow' 
                : 'w-2 sm:w-2.5 bg-white/30 hover:bg-white/50'
            }`}
            style={{ minWidth: '44px', minHeight: '44px', padding: '20px 8px' }}
          />
        ))}
      </div>

      {/* Scroll indicator - HIDDEN ON MOBILE */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 md:bottom-12 left-8 z-30 hidden lg:flex flex-col items-center space-y-2"
      >
        <span className="text-white/60 text-sm uppercase tracking-wider rotate-180" style={{ writingMode: 'vertical-rl' }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-16 bg-gradient-to-b from-transparent via-white/60 to-transparent"
        ></motion.div>
      </motion.div>
    </div>
  )
}

export default HeroSection
