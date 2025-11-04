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
        <div className="flex items-center justify-between">
          {/* Logo avec effet moderne */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                scrolled 
                  ? 'bg-gradient-modern shadow-glow' 
                  : 'bg-white/20 backdrop-blur-md border border-white/30'
              } group-hover:scale-110 group-hover:rotate-3`}>
                <span className="text-white font-bold text-xl">SBS</span>
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-xl bg-primary-600/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-xl transition-colors duration-300 ${
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

          {/* Bouton Menu Mobile moderne */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2.5 rounded-xl transition-all duration-300 ${
              scrolled 
                ? 'text-gray-800 hover:bg-gray-100' 
                : 'text-white hover:bg-white/20 backdrop-blur-sm'
            }`}
          >
            <motion.div
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.div>
          </button>
        </div>

        {/* Menu Mobile moderne */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2 bg-white/95 backdrop-blur-xl mt-4 rounded-2xl shadow-modern border border-gray-100">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      className={`block mx-3 px-4 py-3 font-medium rounded-xl transition-all duration-300 ${
                        location.pathname === link.path
                          ? 'text-white bg-gradient-modern shadow-glow'
                          : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                
                <div className="px-3 pt-2">
                  <Link
                    to="/contact"
                    className="block w-full px-6 py-3 text-center font-semibold text-white bg-gradient-gold rounded-xl shadow-gold-glow hover:shadow-lg transition-all duration-300"
                  >
                    Demander un devis
                  </Link>
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
