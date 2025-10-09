import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { 
  Building2, 
  Construction, 
  HardHat, 
  Award, 
  Users, 
  Clock, 
  Shield,
  TrendingUp 
} from 'lucide-react'
import HeroSection from '../components/HeroSection'
import ServiceCard from '../components/ServiceCard'
import ProjectGallery from '../components/ProjectGallery'
import Testimonials from '../components/Testimonials'

/**
 * Home Page - Page d'accueil du site
 * Présente tous les éléments principaux : hero, services, projets, témoignages
 */
const Home = () => {
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

      {/* Section Services */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="section-title">Nos domaines d'intervention</h2>
            <p className="section-subtitle">
              Une expertise complète pour tous vos projets de construction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

          <div className="text-center mt-12" data-aos="fade-up">
            <Link to="/services" className="btn-primary">
              Découvrir tous nos services
            </Link>
          </div>
        </div>
      </section>

      {/* Section Pourquoi nous choisir */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom">
          <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="section-title text-center" data-aos="fade-up">
              Pourquoi choisir SBS-GROUPE ?
            </h2>
            <p className="text-xl text-blue-100">
              Votre partenaire de confiance pour des projets réussis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {strengths.map((strength, index) => (
              <div
                key={index}
                className="text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                  <strength.icon size={40} />
                </div>
                <h3 className="text-xl font-bold mb-2">{strength.title}</h3>
                <p className="text-blue-100">{strength.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Statistiques */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="text-5xl md:text-6xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Projets récents */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="section-title">Nos réalisations récentes</h2>
            <p className="section-subtitle">
              Découvrez quelques-uns de nos projets les plus emblématiques
            </p>
          </div>

          <ProjectGallery />

          <div className="text-center mt-12" data-aos="fade-up">
            <Link to="/realisations" className="btn-primary">
              Voir toutes nos réalisations
            </Link>
          </div>
        </div>
      </section>

      {/* Section Témoignages */}
      <Testimonials />

      {/* Section CTA - Offre Diaspora */}
      <section className="py-20 bg-gradient-to-r from-gold-500 to-gold-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center" data-aos="zoom-in">
            <TrendingUp size={64} className="mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Vous êtes de la diaspora ?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Construisez votre projet à distance en toute sérénité avec notre offre dédiée
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/diaspora" className="bg-white text-gold-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all shadow-lg">
                Découvrir l'offre Diaspora
              </Link>
              <Link to="/contact" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-all">
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA Final */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div 
            className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-12 text-center text-white"
            data-aos="fade-up"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Prêt à démarrer votre projet ?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Contactez-nous dès aujourd'hui pour un devis gratuit et personnalisé
            </p>
            <Link to="/contact" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all inline-block shadow-lg">
              Demander un devis gratuit
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
