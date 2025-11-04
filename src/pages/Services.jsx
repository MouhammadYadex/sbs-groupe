import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Building2,
  Construction,
  HardHat,
  Home,
  Factory,
  Landmark,
  Trees,
  Wrench,
  Ruler,
  Drill,
  PaintBucket
} from 'lucide-react'
import ServiceCard from '../components/ServiceCard'

/**
 * Services Page - Page des services
 * Présente tous les services offerts par l'entreprise
 */
const Services = () => {
  // Services détaillés
  const services = [
    {
      icon: Building2,
      title: 'Construction de bâtiments',
      description: 'Réalisation complète de projets résidentiels, commerciaux et industriels, de la conception à la livraison.'
    },
    {
      icon: Home,
      title: 'Construction de villas',
      description: 'Construction de villas individuelles sur mesure, adaptées à vos besoins et à votre budget.'
    },
    {
      icon: Factory,
      title: 'Bâtiments industriels',
      description: 'Conception et construction d\'usines, entrepôts et bâtiments industriels aux normes internationales.'
    },
    {
      icon: Construction,
      title: 'Travaux routiers',
      description: 'Construction, réfection et entretien de routes, autoroutes et voiries urbaines.'
    },
    {
      icon: Landmark,
      title: 'Ouvrages d\'art',
      description: 'Réalisation de ponts, viaducs et structures complexes nécessitant une expertise technique pointue.'
    },
    {
      icon: HardHat,
      title: 'Génie civil',
      description: 'Travaux de terrassement, fondations spéciales et aménagements d\'infrastructures.'
    },
    {
      icon: Trees,
      title: 'Aménagements paysagers',
      description: 'Création d\'espaces verts, jardins et aménagements extérieurs pour valoriser vos projets.'
    },
    {
      icon: Wrench,
      title: 'Rénovation',
      description: 'Rénovation complète de bâtiments existants avec mise aux normes et modernisation.'
    },
    {
      icon: HardHat,
      title: 'Maîtrise d\'œuvre',
      description: 'Gestion complète de vos projets de construction avec suivi technique et administratif.'
    },
    {
      icon: Ruler,
      title: 'Bureau d\'études',
      description: 'Conception, études techniques et plans d\'exécution pour tous types de projets.'
    },
    {
      icon: Drill,
      title: 'Travaux spéciaux',
      description: 'Interventions techniques spécialisées : fondations profondes, micropieux, parois moulées.'
    },
    {
      icon: PaintBucket,
      title: 'Finitions',
      description: 'Tous travaux de finition : peinture, revêtements, menuiserie, plomberie, électricité.'
    }
  ]

  // Process de travail
  const workProcess = [
    {
      step: '01',
      title: 'Consultation',
      description: 'Rencontre pour comprendre vos besoins et objectifs'
    },
    {
      step: '02',
      title: 'Étude de faisabilité',
      description: 'Analyse technique et financière de votre projet'
    },
    {
      step: '03',
      title: 'Conception',
      description: 'Élaboration des plans et choix des matériaux'
    },
    {
      step: '04',
      title: 'Devis détaillé',
      description: 'Proposition commerciale complète et transparente'
    },
    {
      step: '05',
      title: 'Réalisation',
      description: 'Exécution des travaux avec suivi rigoureux'
    },
    {
      step: '06',
      title: 'Livraison',
      description: 'Réception et accompagnement post-livraison'
    }
  ]

  return (
    <>
      <Helmet>
        <title>Nos Services - SBS-GROUPE</title>
        <meta 
          name="description" 
          content="Découvrez tous nos services : construction de bâtiments, travaux routiers, génie civil, rénovation et bien plus encore." 
        />
      </Helmet>

      {/* Hero Section - MOBILE OPTIMIZED */}
      <section 
        className="relative h-[50vh] sm:h-[60vh] flex items-center justify-center text-white"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 hero-overlay"></div>
        <div className="relative z-10 text-center container-custom px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4"
          >
            Nos Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl"
          >
            Une expertise complète pour tous vos projets de construction
          </motion.p>
        </div>
      </section>

      {/* Grille de services - MOBILE OPTIMIZED */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container-custom px-4">
          <div className="text-center mb-12 sm:mb-16" data-aos="fade-up">
            <h2 className="section-title text-3xl sm:text-4xl">Nos domaines d'expertise</h2>
            <p className="section-subtitle text-base sm:text-lg">
              Des services variés pour répondre à tous vos besoins en construction
            </p>
          </div>

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
        </div>
      </section>

      {/* Process de travail */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="section-title">Notre méthode de travail</h2>
            <p className="section-subtitle">
              Un processus éprouvé pour garantir la réussite de votre projet
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workProcess.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8 relative"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Numéro de l'étape */}
                <div className="absolute -top-6 left-8">
                  <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                    {process.step}
                  </div>
                </div>

                <div className="pt-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {process.title}
                  </h3>
                  <p className="text-gray-600">
                    {process.description}
                  </p>
                </div>

                {/* Flèche de connexion (sauf pour le dernier) */}
                {index < workProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <svg className="w-8 h-8 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section engagement qualité */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center" data-aos="zoom-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Notre engagement qualité
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-5xl font-bold mb-2">100%</div>
                <p className="text-blue-100">Normes respectées</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">98%</div>
                <p className="text-blue-100">Clients satisfaits</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">95%</div>
                <p className="text-blue-100">Projets livrés à temps</p>
              </div>
            </div>
            <p className="text-xl text-blue-100 mb-8">
              Nous nous engageons à respecter les plus hauts standards de qualité, 
              de sécurité et de respect de l'environnement sur tous nos chantiers.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div 
            className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-12 text-center text-white"
            data-aos="fade-up"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Vous avez un projet en tête ?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Contactez-nous pour discuter de votre projet et obtenir un devis gratuit
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

export default Services
