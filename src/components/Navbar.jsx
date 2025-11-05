import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * Navbar Component - Menu de navigation sticky avec effet au scroll
 * S'adapte au défilement de la page et affiche un fond avec ombre
 */
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  // Détection du scroll pour changer l'apparence de la navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Fermer le menu mobile lors du changement de route
  useEffect(() => {
    setIsOpen(false)
  }, [location])

  // Liste des liens de navigation
  const navLinks = [
    { path: '/', label: 'Accueil' },
    { path: '/a-propos', label: 'À Propos' },
    { path: '/services', label: 'Services' },
    { path: '/realisations', label: 'Réalisations' },
    { path: '/diaspora', label: 'Offre Diaspora' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-soft border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo avec effet moderne - OPTIMISÉ MOBILE */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group">
            <div className="relative">
              <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center transition-all duration-300 ${
                scrolled 
                  ? 'bg-gradient-modern shadow-glow' 
                  : 'bg-white/20 backdrop-blur-md border border-white/30'
              } group-hover:scale-110 group-hover:rotate-3`}>
                <span className="text-white font-bold text-lg sm:text-xl">SBS</span>
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-lg sm:rounded-xl bg-primary-600/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-base sm:text-xl transition-colors duration-300 ${
                scrolled ? 'text-gray-800' : 'text-white drop-shadow-lg'
              }`}>
                SBS-GROUPE
              </span>
              <span className={`text-xs font-medium transition-colors duration-300 ${
                scrolled ? 'text-primary-600' : 'text-gold-400'
              }`}>
                Excellence & Innovation
              </span>
            </div>
          </Link>

          {/* Menu Desktop */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 font-medium transition-all duration-300 rounded-lg group ${
                  location.pathname === link.path
                    ? scrolled
                      ? 'text-primary-600'
                      : 'text-white'
                    : scrolled
                    ? 'text-gray-700 hover:text-primary-600'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                <span className="relative z-10">{link.label}</span>
                {/* Hover background effect */}
                <div className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                  location.pathname === link.path
                    ? scrolled
                      ? 'bg-primary-50'
                      : 'bg-white/20 backdrop-blur-sm'
                    : 'bg-gray-50 opacity-0 group-hover:opacity-100'
                }`}></div>
                {/* Active indicator */}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className={`absolute bottom-0 left-0 right-0 h-0.5 ${
                      scrolled ? 'bg-primary-600' : 'bg-white'
                    }`}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}
            
            {/* Bouton CTA moderne */}
            <Link
              to="/contact"
              className={`relative ml-4 px-6 py-2.5 font-semibold rounded-xl overflow-hidden group transition-all duration-300 ${
                scrolled
                  ? 'bg-gradient-modern text-white shadow-glow hover:shadow-glow-lg'
                  : 'bg-white text-primary-600 hover:bg-gold-400 hover:text-white shadow-soft'
              }`}
            >
              <span className="relative z-10">Demander un devis</span>
              {/* Shimmer effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            </Link>
          </div>

          {/* Bouton Menu Mobile optimisé - TOUCH TARGET 48x48px */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className={`lg:hidden p-3 rounded-xl transition-all duration-300 touch-manipulation active:scale-95 ${
              scrolled 
                ? 'text-gray-800 hover:bg-gray-100 active:bg-gray-200' 
                : 'text-white hover:bg-white/20 backdrop-blur-sm active:bg-white/30'
            }`}
            style={{ minWidth: '48px', minHeight: '48px' }}
          >
            <motion.div
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </button>
        </div>

        {/* Menu Mobile optimisé - FULLSCREEN MOBILE */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden fixed inset-x-0 top-16 sm:top-20 bottom-0 bg-white/98 backdrop-blur-xl overflow-y-auto"
            >
              <div className="container-custom py-6 sm:py-8">
                <div className="space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        to={link.path}
                        className={`block px-5 py-4 font-semibold rounded-2xl transition-all duration-300 touch-manipulation active:scale-98 ${
                          location.pathname === link.path
                            ? 'text-white bg-gradient-modern shadow-glow text-lg'
                            : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50 active:bg-gray-100 text-base'
                        }`}
                        style={{ minHeight: '56px' }}
                      >
                        <div className="flex items-center justify-between">
                          <span>{link.label}</span>
                          {location.pathname === link.path && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="w-2 h-2 rounded-full bg-white"
                            />
                          )}
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
                
                {/* CTA Button - TOUCH OPTIMIZED */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <Link
                    to="/contact"
                    className="block w-full px-6 py-5 text-center text-lg font-bold text-white bg-gradient-gold rounded-2xl shadow-gold-glow hover:shadow-xl active:scale-98 transition-all duration-300 touch-manipulation"
                    style={{ minHeight: '64px' }}
                  >
                    <div className="flex items-center justify-center gap-2">
                      <span>Demander un devis</span>
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </div>
                  </Link>
                  
                  {/* Contact info mobile */}
                  <div className="mt-6 space-y-3 text-center text-sm text-gray-600">
                    <p className="font-medium">Besoin d'aide ?</p>
                    <a href="tel:+221771234567" className="block text-primary-600 font-semibold hover:text-primary-700 touch-manipulation py-2">
                      📞 +221 77 123 45 67
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navbar
