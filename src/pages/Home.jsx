import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Building2, 
  Construction, 
  HardHat, 
  Award, 
  Users, 
  Clock, 
  Shield,
  TrendingUp,
  Sparkles,
  ArrowRight 
} from 'lucide-react'
import HeroSection from '../components/HeroSection'
import ServiceCard from '../components/ServiceCard'
import ProjectGallery from '../components/ProjectGallery'
import Testimonials from '../components/Testimonials'
import { useState, useEffect } from 'react'

/**
 * Home Page - Page d'accueil moderne et immersive
 * Présente tous les éléments principaux avec animations sophistiquées
 */
const Home = () => {
  const [counters, setCounters] = useState({ years: 0, projects: 0, clients: 0, experts: 0 })

  // Animation des compteurs
  useEffect(() => {
    const targets = { years: 15, projects: 500, clients: 200, experts: 50 }
    const duration = 2000
    const steps = 60
    const interval = duration / steps

    let step = 0
    const timer = setInterval(() => {
      step++
      const progress = step / steps
      setCounters({
        years: Math.floor(targets.years * progress),
        projects: Math.floor(targets.projects * progress),
        clients: Math.floor(targets.clients * progress),
        experts: Math.floor(targets.experts * progress),
      })
      if (step >= steps) clearInterval(timer)
    }, interval)

    return () => clearInterval(timer)
  }, [])
  // Services principaux
  const services = [
    {
      icon: Building2,
      title: 'Construction de bâtiments',
      description: 'Réalisation de projets résidentiels, commerciaux et industriels avec expertise et qualité.'
    },
    {
      icon: Construction,
      title: 'Travaux routiers',
      description: 'Aménagement et réfection de routes, autoroutes et infrastructures de transport.'
    },
    {
      icon: HardHat,
      title: 'Génie civil',
      description: 'Conception et construction d\'ouvrages d\'art, ponts, tunnels et infrastructures.'
    }
  ]

  // Points forts de l'entreprise
  const strengths = [
    {
      icon: Award,
      title: 'Qualité certifiée',
      description: 'Normes internationales et certifications reconnues'
    },
    {
      icon: Users,
      title: 'Équipe experte',
      description: 'Plus de 200 professionnels qualifiés à votre service'
    },
    {
      icon: Clock,
      title: 'Respect des délais',
      description: 'Livraison à temps garantie sur tous nos projets'
    },
    {
      icon: Shield,
      title: 'Garantie sécurité',
      description: 'Protection complète et assurance tous risques'
    }
  ]

  // Statistiques
  const stats = [
    { number: '10+', label: 'Années d\'expérience' },
    { number: '500+', label: 'Projets réalisés' },
    { number: '200+', label: 'Clients satisfaits' },
    { number: '50+', label: 'Experts qualifiés' }
  ]

  return (
    <>
      <Helmet>
        <title>SBS-GROUPE - Expert en Construction et BTP</title>
        <meta 
          name="description" 
          content="SBS-GROUPE, votre partenaire de confiance pour tous vos projets de construction, travaux routiers et génie civil. Plus de 15 ans d'expérience et d'expertise." 
        />
      </Helmet>

      {/* Hero Section */}
      <HeroSection />

      {/* Section Services avec design moderne - MOBILE OPTIMIZED */}
      <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        {/* Décoration de fond */}
        <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-primary-100 rounded-full blur-3xl opacity-20 -z-10"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-gold-100 rounded-full blur-3xl opacity-20 -z-10"></div>

        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-primary-50 rounded-full px-3 sm:px-4 py-2 mb-3 sm:mb-4">
              <Sparkles size={14} className="text-primary-600 sm:w-4 sm:h-4" />
              <span className="text-primary-600 font-semibold text-xs sm:text-sm">Nos expertises</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
              Nos domaines d'intervention
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Une expertise complète pour tous vos projets de construction
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                index={index}
              />
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12 sm:mt-16"
          >
            <Link 
              to="/services" 
              className="group inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-modern text-white font-semibold text-sm sm:text-base rounded-xl shadow-glow hover:shadow-glow-lg transition-all duration-300 hover:scale-105 touch-manipulation active:scale-98"
              style={{ minHeight: '56px' }}
            >
              Découvrir tous nos services
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Section Pourquoi nous choisir - Design moderne - MOBILE OPTIMIZED */}
      <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white overflow-hidden">
        {/* Formes décoratives animées */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-primary-600/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-64 h-64 sm:w-96 sm:h-96 bg-gold-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container-custom relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16 px-4"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
              Pourquoi choisir SBS-GROUPE ?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
              Votre partenaire de confiance pour des projets réussis
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {strengths.map((strength, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group text-center px-4"
              >
                <div className="relative mb-5 sm:mb-6">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                    <strength.icon size={32} className="sm:w-10 sm:h-10" />
                  </div>
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-white/20 rounded-xl sm:rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 mx-auto w-20 h-20 sm:w-24 sm:h-24"></div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 group-hover:text-gold-400 transition-colors">
                  {strength.title}
                </h3>
                <p className="text-sm sm:text-base text-white/85">{strength.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Statistiques animées - MOBILE OPTIMIZED */}
      <section className="relative py-16 sm:py-20 md:py-24 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-50 via-transparent to-gold-50"></div>
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 px-4">
            {[
              { key: 'years', number: counters.years, label: 'Années d\'expérience', suffix: '+' },
              { key: 'projects', number: counters.projects, label: 'Projets réalisés', suffix: '+' },
              { key: 'clients', number: counters.clients, label: 'Clients satisfaits', suffix: '+' },
              { key: 'experts', number: counters.experts, label: 'Experts qualifiés', suffix: '+' }
            ].map((stat, index) => (
              <motion.div
                key={stat.key}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, type: "spring" }}
                className="group text-center"
              >
                <div className="relative inline-block mb-3 sm:mb-4">
                  <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-modern bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                    {stat.number}{stat.suffix}
                  </div>
                  <motion.div
                    className="absolute -inset-2 bg-primary-100 rounded-lg blur-lg opacity-0 group-hover:opacity-30 -z-10"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  ></motion.div>
                </div>
                <div className="text-gray-600 font-semibold text-sm sm:text-base md:text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Projets récents - Design moderne */}
      <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-gold-50 rounded-full px-4 py-2 mb-4">
              <Sparkles size={16} className="text-gold-600" />
              <span className="text-gold-600 font-semibold text-sm">Portfolio</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nos réalisations récentes
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez quelques-uns de nos projets les plus emblématiques
            </p>
          </motion.div>

          <ProjectGallery />

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mt-16"
          >
            <Link 
              to="/realisations" 
              className="group inline-flex items-center px-8 py-4 bg-white border-2 border-gray-200 text-gray-800 font-semibold rounded-xl hover:border-primary-500 hover:text-primary-600 hover:shadow-card transition-all duration-300"
            >
              Voir toutes nos réalisations
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Section Témoignages */}
      <Testimonials />

      {/* Section CTA - Offre Diaspora - Design premium */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gold-500 via-gold-600 to-gold-700"></div>
        
        {/* Patterns de fond */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        {/* Formes décoratives */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

        <div className="container-custom relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <motion.div
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="inline-block mb-6"
            >
              <TrendingUp size={64} className="drop-shadow-lg" />
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Vous êtes de la diaspora ?
            </h2>
            <p className="text-xl md:text-2xl mb-10 text-white/95 leading-relaxed max-w-3xl mx-auto">
              Construisez votre projet à distance en toute sérénité avec notre offre dédiée
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/diaspora" 
                className="group px-8 py-4 bg-white text-gold-600 font-bold rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center"
              >
                Découvrir l'offre Diaspora
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link 
                to="/contact" 
                className="group px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300 flex items-center justify-center"
              >
                Nous contacter
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </div>

            {/* Stats rapides */}
            <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              {[
                { value: '100%', label: 'Suivi à distance' },
                { value: '24/7', label: 'Support disponible' },
                { value: '0€', label: 'Frais cachés' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section CTA Final - Design premium */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 rounded-3xl p-12 md:p-16 text-center text-white overflow-hidden shadow-modern"
          >
            {/* Effets de fond */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: 'linear-gradient(45deg, transparent 45%, white 45%, white 55%, transparent 55%)',
                backgroundSize: '20px 20px'
              }}></div>
            </div>

            {/* Formes décoratives */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold-400/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, type: "spring" }}
                className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
              >
                <div className="w-2 h-2 bg-gold-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold">Démarrons votre projet</span>
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Prêt à démarrer votre projet ?
              </h2>
              <p className="text-xl md:text-2xl mb-10 text-white/90 max-w-2xl mx-auto">
                Contactez-nous dès aujourd'hui pour un devis gratuit et personnalisé
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="group px-8 py-4 bg-white text-primary-600 font-bold rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center"
                >
                  Demander un devis gratuit
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
                <Link 
                  to="/a-propos" 
                  className="group px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300 flex items-center justify-center"
                >
                  En savoir plus
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Home
