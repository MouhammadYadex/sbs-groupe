import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  Clock,
  Send,
  ArrowRight
} from 'lucide-react'
import { useState } from 'react'

/**
 * Footer Component - Pied de page premium avec animations et design moderne
 * Contient les coordonnées, horaires, liens rapides, newsletter et réseaux sociaux
 */
const Footer = () => {
  const currentYear = new Date().getFullYear()
  const [email, setEmail] = useState('')

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    // Logique d'inscription newsletter à implémenter
    console.log('Newsletter subscription:', email)
    setEmail('')
  }

  // Liens rapides
  const quickLinks = [
    { path: '/', label: 'Accueil' },
    { path: '/a-propos', label: 'À Propos' },
    { path: '/services', label: 'Services' },
    { path: '/realisations', label: 'Réalisations' },
  ]

  // Services principaux
  const services = [
    'Construction de bâtiments',
    'Travaux routiers',
    'Génie civil',
    'Offre Diaspora',
  ]

  return (
    <footer className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-gray-300 overflow-hidden">
      {/* Grid pattern de fond */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#2563eb 1px, transparent 1px), linear-gradient(90deg, #2563eb 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Effets de fond animés avec dégradés */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl"
        ></motion.div>
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gold-600/10 rounded-full blur-3xl"
        ></motion.div>
        <motion.div 
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-cyan/5 rounded-full blur-3xl"
        ></motion.div>
      </div>

      {/* Newsletter Section Premium - Version compacte */}
      <div className="relative border-b border-gray-800/50">
        <div className="container-custom py-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 rounded-2xl p-8 md:p-10 overflow-hidden shadow-2xl"
            >
              {/* Pattern décoratif */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px)',
                  backgroundSize: '30px 30px'
                }}></div>
              </div>

              {/* Formes décoratives */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gold-400/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-56 h-56 bg-primary-400/20 rounded-full blur-3xl"></div>

              <div className="relative z-10 text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Send size={32} className="text-white drop-shadow-lg" />
                  </motion.div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    Newsletter SBS-GROUPE
                  </h3>
                </div>
                <p className="text-white/90 mb-6 max-w-xl mx-auto">
                  Recevez nos dernières réalisations et offres exclusives
                </p>
                
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto mb-4">
                  <div className="flex-1 relative group">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Votre adresse email"
                      required
                      className="w-full px-5 py-3.5 bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all duration-300"
                    />
                    <Mail className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 group-focus-within:text-white transition-colors" size={18} />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="group px-6 py-3.5 bg-white text-primary-600 font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 hover:bg-gold-400 hover:text-white"
                  >
                    <span>S'abonner</span>
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                  </motion.button>
                </form>

                {/* Trust badges compacts */}
                <div className="flex items-center justify-center gap-4 text-white/70 text-xs">
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                    <span>Gratuit</span>
                  </div>
                  <div className="w-px h-3 bg-white/20"></div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                    <span>Sans spam</span>
                  </div>
                  <div className="w-px h-3 bg-white/20"></div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                    <span>Désabonnement facile</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Section principale du footer avec design cards */}
      <div className="relative container-custom py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Colonne 1: À propos avec card moderne */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-1"
          >
            <div className="relative group">
              {/* Logo compact */}
              <div className="flex items-center gap-2 mb-4">
                <motion.div 
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 bg-gradient-modern rounded-xl flex items-center justify-center shadow-glow"
                >
                  <span className="text-white font-bold text-xl">SBS</span>
                </motion.div>
                <div>
                  <span className="font-bold text-lg text-white group-hover:text-gold-400 transition-colors">SBS-GROUPE</span>
                  <p className="text-xs text-gold-400">Excellence & Innovation</p>
                </div>
              </div>
              
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                Leader en construction avec <span className="text-white font-semibold">15+ ans d'expérience</span>.
              </p>
              
              {/* Réseaux sociaux compacts */}
              <div className="flex gap-2">
                {[
                  { icon: Facebook, href: 'https://facebook.com', color: 'hover:bg-[#1877f2]' },
                  { icon: Twitter, href: 'https://twitter.com', color: 'hover:bg-[#1da1f2]' },
                  { icon: Linkedin, href: 'https://linkedin.com', color: 'hover:bg-[#0077b5]' },
                  { icon: Instagram, href: 'https://instagram.com', color: 'hover:bg-gradient-to-br hover:from-[#f58529] hover:via-[#dd2a7b] hover:to-[#8134af]' },
                ].map(({ icon: SocialIcon, href, color }, i) => (
                  <motion.a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2, scale: 1.05 }}
                    className={`w-9 h-9 bg-gray-800/50 border border-gray-700/50 rounded-lg flex items-center justify-center ${color} transition-all`}
                  >
                    <SocialIcon size={16} className="text-gray-400" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Colonne 2: Liens rapides compacts */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Navigation</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="group flex items-center gap-2 text-gray-400 hover:text-gold-400 transition-all text-sm"
                  >
                    <div className="w-1 h-1 rounded-full bg-primary-500 group-hover:bg-gold-400"></div>
                    <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                    <ArrowRight size={12} className="ml-auto opacity-0 group-hover:opacity-100 transition-all text-gold-400" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Colonne 3: Services compacts */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className="group flex items-center gap-2">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    className="w-4 h-4 rounded-full bg-gradient-gold flex items-center justify-center flex-shrink-0"
                  >
                    <span className="text-white text-xs">✓</span>
                  </motion.div>
                  <span className="text-gray-400 group-hover:text-white transition-colors text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Colonne 4: Contact compact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Contact</h3>
            <div className="space-y-3">
              {[
                { Icon: MapPin, content: '123 Avenue Paris, France' },
                { Icon: Phone, content: '+33 1 23 45 67 89', href: 'tel:+33123456789' },
                { Icon: Mail, content: 'contact@sbs-groupe.fr', href: 'mailto:contact@sbs-groupe.fr' }
              ].map(({ Icon: ContactIcon, content, href }, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ x: 3 }}
                  className="group flex items-center gap-2"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    className="w-8 h-8 bg-gradient-modern rounded-lg flex items-center justify-center flex-shrink-0"
                  >
                    <ContactIcon size={14} className="text-white" />
                  </motion.div>
                  {href ? (
                    <a href={href} className="text-gray-400 hover:text-white transition-colors text-xs">
                      {content}
                    </a>
                  ) : (
                    <span className="text-gray-400 group-hover:text-white transition-colors text-xs">
                      {content}
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Barre de copyright ultra-moderne */}
      <div className="relative bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 border-t border-gray-800/50 py-5">
        <div className="container-custom relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            {/* Copyright */}
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
              <p className="text-gray-400">
                &copy; {currentYear} <span className="text-white font-semibold">SBS-GROUPE</span> - Tous droits réservés
              </p>
            </div>

            {/* Liens légaux */}
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { label: 'Mentions légales', path: '/mentions-legales' },
                { label: 'Confidentialité', path: '/politique-confidentialite' },
                { label: 'CGV', path: '/cgv' }
              ].map((item, index) => (
                <Link 
                  key={index}
                  to={item.path}
                  className="text-gray-400 hover:text-gold-400 transition-colors relative group text-xs"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Made with love */}
            <div className="flex items-center gap-1.5 text-xs text-gray-500">
              <span>Conçu avec</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                className="text-red-500"
              >
                ❤️
              </motion.span>
              <span>à Paris</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
