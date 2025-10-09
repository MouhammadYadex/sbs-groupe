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
    <div className="relative h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          {/* Image de fond */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          >
            {/* Overlay gradient */}
            <div className="absolute inset-0 hero-overlay"></div>
          </div>

          {/* Contenu */}
          <div className="relative h-full flex items-center">
            <div className="container-custom">
              <div className="max-w-3xl">
                <motion.h1
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-4xl md:text-6xl font-bold text-white mb-4"
                >
                  {slides[currentSlide].title}
                </motion.h1>
                
                <motion.h2
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-xl md:text-2xl text-white mb-4"
                >
                  {slides[currentSlide].subtitle}
                </motion.h2>
                
                <motion.p
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="text-lg md:text-xl text-gray-200 mb-8"
                >
                  {slides[currentSlide].description}
                </motion.p>
                
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Link to="/contact" className="btn-primary">
                    {slides[currentSlide].cta}
                  </Link>
                  <Link to="/a-propos" className="btn-secondary">
                    En savoir plus
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Boutons de navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all z-10"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all z-10"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicateurs de slides */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default HeroSection
