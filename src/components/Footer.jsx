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

      {/* Newsletter Section Premium */}
      <div className="relative border-b border-gray-800/50">
        <div className="container-custom py-16">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 rounded-3xl p-12 md:p-16 overflow-hidden shadow-2xl"
            >
              {/* Pattern décoratif */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px)',
                  backgroundSize: '30px 30px'
                }}></div>
              </div>

              {/* Formes décoratives */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold-400/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-400/20 rounded-full blur-3xl"></div>

              <div className="relative z-10 text-center">
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="inline-block mb-4"
                >
                  <Send size={48} className="text-white drop-shadow-lg" />
                </motion.div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Restez connecté avec SBS-GROUPE
                </h3>
                <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                  Recevez en exclusivité nos dernières réalisations, conseils d'experts et offres spéciales
                </p>
                
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
                  <div className="flex-1 relative group">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Entrez votre adresse email"
                      required
                      className="w-full px-6 py-5 bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all duration-300 text-lg"
                    />
                    <Mail className="absolute right-5 top-1/2 -translate-y-1/2 text-white/60 group-focus-within:text-white transition-colors" size={22} />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="group px-8 py-5 bg-white text-primary-600 font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 hover:bg-gold-400 hover:text-white"
                  >
                    <span className="text-lg">S'abonner</span>
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                  </motion.button>
                </form>

                {/* Trust badges */}
                <div className="mt-8 flex items-center justify-center gap-6 text-white/70 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span>100% Gratuit</span>
                  </div>
                  <div className="w-px h-4 bg-white/20"></div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span>Sans spam</span>
                  </div>
                  <div className="w-px h-4 bg-white/20"></div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
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
              {/* Logo avec effet premium */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <motion.div 
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 bg-gradient-modern rounded-2xl flex items-center justify-center shadow-glow group-hover:shadow-glow-lg transition-shadow duration-300"
                  >
                    <span className="text-white font-bold text-2xl">SBS</span>
                  </motion.div>
                  {/* Glow animé */}
                  <motion.div
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 bg-primary-500 rounded-2xl blur-xl -z-10"
                  ></motion.div>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-2xl text-white group-hover:text-gold-400 transition-colors">SBS-GROUPE</span>
                  <span className="text-xs text-gold-400 font-semibold tracking-wider">Excellence & Innovation</span>
                </div>
              </div>
              
              <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                Votre partenaire de confiance pour tous vos projets de construction. 
                Plus de <span className="text-white font-semibold">15 ans d'expérience</span> et d'expertise au service de vos ambitions.
              </p>
              
              {/* Réseaux sociaux premium avec effets */}
              <div className="space-y-3">
                <p className="text-white font-semibold text-sm mb-3">Suivez-nous</p>
                <div className="flex flex-wrap gap-3">
                  {[
                    { Icon: Facebook, href: 'https://facebook.com', label: 'Facebook', color: 'hover:bg-[#1877f2]' },
                    { Icon: Twitter, href: 'https://twitter.com', label: 'Twitter', color: 'hover:bg-[#1da1f2]' },
                    { Icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:bg-[#0077b5]' },
                    { Icon: Instagram, href: 'https://instagram.com', label: 'Instagram', color: 'hover:bg-gradient-to-br hover:from-[#f58529] hover:via-[#dd2a7b] hover:to-[#8134af]' },
                  ].map(({ Icon, href, label, color }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -3, scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`group relative w-12 h-12 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl flex items-center justify-center ${color} transition-all duration-300 hover:border-transparent hover:shadow-lg`}
                      aria-label={label}
                    >
                      <Icon size={20} className="relative z-10 text-gray-400 group-hover:text-white transition-colors" />
                      {/* Glow effect au hover */}
                      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 bg-white blur-md transition-opacity duration-300"></div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Colonne 2: Liens rapides avec hover cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-3">
              <div className="w-1 h-6 bg-gradient-gold rounded-full"></div>
              Liens Rapides
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                >
                  <Link 
                    to={link.path}
                    className="group flex items-center gap-3 text-gray-400 hover:text-white transition-all duration-300 py-2 px-3 rounded-lg hover:bg-gray-800/30"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-500 group-hover:bg-gold-400 transition-colors"></div>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                    <ArrowRight size={14} className="ml-auto opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-gold-400" />
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="mt-6 p-4 bg-gradient-to-br from-primary-900/30 to-primary-800/20 border border-primary-700/30 rounded-xl">
              <Link 
                to="/blog"
                className="group flex items-center justify-between text-primary-400 hover:text-gold-400 font-semibold transition-colors"
              >
                <span>Blog & Actualités</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Colonne 3: Services avec checkmarks animés */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-3">
              <div className="w-1 h-6 bg-gradient-gold rounded-full"></div>
              Nos Services
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                  className="group flex items-start gap-3 py-2 px-3 rounded-lg hover:bg-gray-800/30 transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.4 }}
                    className="w-5 h-5 rounded-full bg-gradient-gold flex items-center justify-center flex-shrink-0 mt-0.5 shadow-gold-glow"
                  >
                    <span className="text-white text-xs font-bold">✓</span>
                  </motion.div>
                  <span className="text-gray-400 group-hover:text-white transition-colors text-sm">{service}</span>
                </motion.li>
              ))}
            </ul>
            <div className="mt-6 p-4 bg-gradient-to-br from-gold-900/20 to-gold-800/10 border border-gold-700/30 rounded-xl">
              <Link 
                to="/diaspora"
                className="group flex items-center justify-between text-gold-400 hover:text-gold-300 font-semibold transition-colors"
              >
                <span>Offre Diaspora</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Colonne 4: Contact avec cards interactives */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-3">
              <div className="w-1 h-6 bg-gradient-gold rounded-full"></div>
              Contact
            </h3>
            <div className="space-y-4">
              {[
                { Icon: MapPin, content: <><span>123 Avenue de la Construction</span><br /><span>75001 Paris, France</span></>, type: 'address' },
                { Icon: Phone, content: '+33 1 23 45 67 89', href: 'tel:+33123456789', type: 'phone' },
                { Icon: Mail, content: 'contact@sbs-groupe.fr', href: 'mailto:contact@sbs-groupe.fr', type: 'email' },
                { Icon: Clock, content: <><p>Lun - Ven: 8h00 - 18h00</p><p>Sam: 9h00 - 13h00</p></>, type: 'hours' }
              ].map(({ Icon, content, href, type }, index) => (
                <motion.div
                  key={type}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                  whileHover={{ x: 5 }}
                  className="group flex items-start gap-4 p-3 rounded-xl hover:bg-gray-800/30 transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="w-10 h-10 bg-gradient-modern rounded-xl flex items-center justify-center flex-shrink-0 shadow-glow group-hover:shadow-glow-lg transition-shadow"
                  >
                    <Icon size={18} className="text-white" />
                  </motion.div>
                  <div className="flex-1">
                    {href ? (
                      <a href={href} className="text-gray-400 hover:text-white transition-colors text-sm block">
                        {content}
                      </a>
                    ) : (
                      <div className="text-gray-400 group-hover:text-white transition-colors text-sm">
                        {content}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Barre de copyright ultra-moderne */}
      <div className="relative bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 border-t border-gray-800/50 py-8">
        {/* Pattern décoratif */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #2563eb 0, #2563eb 1px, transparent 0, transparent 50%)',
            backgroundSize: '10px 10px'
          }}></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright avec badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4"
            >
              <div className="flex items-center gap-3 text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <p className="text-gray-400">
                  &copy; {currentYear} <span className="text-white font-bold bg-gradient-modern bg-clip-text text-transparent">SBS-GROUPE</span> - Tous droits réservés
                </p>
              </div>
              <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 bg-primary-900/30 border border-primary-700/30 rounded-full text-xs text-primary-400">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                </span>
                <span>Site sécurisé SSL</span>
              </div>
            </motion.div>

            {/* Liens légaux modernes */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap justify-center gap-6"
            >
              {[
                { label: 'Mentions légales', path: '/mentions-legales' },
                { label: 'Politique de confidentialité', path: '/politique-confidentialite' },
                { label: 'CGV', path: '/cgv' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link 
                    to={item.path}
                    className="text-gray-400 hover:text-white transition-colors relative group text-sm font-medium"
                  >
                    <span className="relative">
                      {item.label}
                      {/* Underline effect */}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-gold group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Badge "Made with love" */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-center"
          >
            <p className="text-xs text-gray-500 flex items-center justify-center gap-2">
              <span>Conçu avec</span>
              <motion.span
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="text-red-500"
              >
                ❤️
              </motion.span>
              <span>à Paris, France</span>
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
