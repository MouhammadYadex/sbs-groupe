import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion'
import ProjectGallery from '../components/ProjectGallery'

/**
 * Projects Page - Page des réalisations
 * Affiche la galerie complète des projets réalisés
 */
const Projects = () => {
  return (
    <>
      <Helmet>
        <title>Nos Réalisations - SBS-GROUPE</title>
        <meta 
          name="description" 
          content="Découvrez nos projets de construction : bâtiments, routes, ouvrages d'art et infrastructures réalisés avec excellence." 
        />
      </Helmet>

      {/* Hero Section */}
      <section 
        className="relative h-[60vh] flex items-center justify-center text-white"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 hero-overlay"></div>
        <div className="relative z-10 text-center container-custom">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            Nos Réalisations
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl"
          >
            Des projets d'envergure menés avec succès
          </motion.p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16" data-aos="fade-up">
            <p className="text-lg text-gray-600 leading-relaxed">
              Depuis plus de 10 ans, nous avons eu le privilège de travailler sur des projets 
              variés et ambitieux. Chaque réalisation témoigne de notre engagement envers 
              l'excellence, l'innovation et la satisfaction de nos clients. Découvrez ci-dessous 
              quelques-unes de nos réalisations les plus emblématiques.
            </p>
          </div>

          {/* Galerie de projets */}
          <ProjectGallery />
        </div>
      </section>

      {/* Statistiques projets */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nos chiffres en un coup d'œil
            </h2>
            <p className="text-xl text-white/90">
              Une expérience qui fait la différence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Projets réalisés' },
              { number: '150', label: 'Bâtiments construits' },
              { number: '200km', label: 'Routes aménagées' },
              { number: '50', label: 'Ouvrages d\'art' }
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="text-5xl md:text-6xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-white/90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Secteurs d'intervention */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="section-title">Nos secteurs d'intervention</h2>
            <p className="section-subtitle">
              Une présence sur tout le territoire
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Résidentiel',
                description: 'Villas, immeubles, résidences, logements sociaux',
                projects: '200+ projets'
              },
              {
                title: 'Commercial & Industriel',
                description: 'Centres commerciaux, usines, entrepôts, bureaux',
                projects: '150+ projets'
              },
              {
                title: 'Infrastructures publiques',
                description: 'Routes, ponts, écoles, hôpitaux, stades',
                projects: '150+ projets'
              }
            ].map((sector, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {sector.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {sector.description}
                </p>
                <div className="text-primary-600 font-bold text-lg">
                  {sector.projects}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignage projet */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-12" data-aos="fade-up">
              <div className="flex items-center mb-6">
                <img
                  src="https://i.pravatar.cc/150?img=12"
                  alt="Client"
                  className="w-20 h-20 rounded-full mr-6"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Jean Dupont</h3>
                  <p className="text-gray-600">Directeur Général, Entreprise XYZ</p>
                </div>
              </div>
              <blockquote className="text-lg text-gray-700 italic leading-relaxed">
                "SBS-GROUPE a réalisé la construction de notre nouveau siège social, un projet 
                complexe de 5000m². Leur professionnalisme, leur respect des délais et la qualité 
                du travail sont exceptionnels. Je recommande vivement leurs services pour tout 
                projet de construction d'envergure."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div 
            className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-12 text-center text-white"
            data-aos="fade-up"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Votre projet sera notre prochaine réalisation
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Discutons ensemble de votre vision et transformons-la en réalité
            </p>
            <a href="/contact" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all inline-block shadow-lg">
              Démarrer votre projet
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Projects
