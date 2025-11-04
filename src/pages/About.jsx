import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion'
import { Target, Eye, Award, Users, TrendingUp } from 'lucide-react'

/**
 * About Page - Page À Propos
 * Présente l'entreprise, sa mission, vision, valeurs et son équipe
 */
const About = () => {
  // Valeurs de l'entreprise
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'Nous visons l\'excellence dans chaque projet, en respectant les standards les plus élevés de qualité.'
    },
    {
      icon: Users,
      title: 'Esprit d\'équipe',
      description: 'Notre force réside dans notre équipe soudée de professionnels expérimentés et passionnés.'
    },
    {
      icon: Target,
      title: 'Engagement',
      description: 'Nous nous engageons à respecter nos délais et à livrer des projets qui dépassent les attentes.'
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'Nous adoptons les dernières technologies et méthodes pour offrir des solutions modernes.'
    }
  ]

  // Chiffres clés
  const keyNumbers = [
    { number: '15+', label: 'Ans d\'expérience' },
    { number: '500+', label: 'Projets réalisés' },
    { number: '150+', label: 'Clients satisfaits' },
    { number: '85', label: 'Collaborateurs' }
  ]

  return (
    <>
      <Helmet>
        <title>À Propos - SBS-GROUPE</title>
        <meta 
          name="description" 
          content="Découvrez SBS-GROUPE, notre histoire, nos valeurs et notre engagement envers l'excellence dans le secteur du BTP." 
        />
      </Helmet>

      {/* Hero Section - MOBILE OPTIMIZED */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-y-6"></div>
        </div>
        
        <div className="container-custom relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4"
          >
            À Propos de SBS-GROUPE
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl"
          >
            Excellence, Innovation et Engagement
          </motion.p>
        </div>
      </section>

      {/* Notre Histoire - MOBILE OPTIMIZED */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div data-aos="fade-right">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                alt="Notre équipe"
                className="rounded-lg sm:rounded-xl shadow-2xl"
              />
            </div>
            <div data-aos="fade-left" className="px-4 sm:px-0">
              <h2 className="section-title text-3xl sm:text-4xl">Notre Histoire</h2>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                <p>
                  Fondée en 2010, <strong>SBS-GROUPE</strong> est née de la vision de créer une entreprise 
                  de construction qui allie expertise technique, innovation et engagement envers la satisfaction client.
                </p>
                <p>
                  Au fil des années, nous sommes passés d'une petite équipe locale à un groupe reconnu 
                  dans toute la région, réalisant des projets d'envergure dans divers secteurs : 
                  résidentiel, commercial, industriel et infrastructures publiques.
                </p>
                <p>
                  Aujourd'hui, avec plus de <strong>15 ans d'expérience</strong> et <strong>500 projets réalisés</strong>, 
                  nous continuons à innover et à repousser les limites de l'excellence dans le secteur du BTP.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission et Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <motion.div
              whileHover={{ y: -10 }}
              className="card p-8 bg-white"
              data-aos="fade-up"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <Target className="text-primary-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Notre Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                Fournir des solutions de construction de haute qualité qui dépassent les attentes de nos clients, 
                tout en maintenant les normes les plus élevées de sécurité, de durabilité et d'innovation. 
                Nous nous engageons à bâtir non seulement des structures, mais aussi des relations durables 
                basées sur la confiance et l'excellence.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              whileHover={{ y: -10 }}
              className="card p-8 bg-white"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <Eye className="text-primary-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Notre Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                Devenir le leader régional du secteur de la construction en étant reconnu pour notre 
                innovation, notre expertise technique et notre engagement envers le développement durable. 
                Nous aspirons à créer des infrastructures qui façonnent positivement l'environnement urbain 
                et améliorent la qualité de vie des communautés.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nos Valeurs - MOBILE OPTIMIZED */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container-custom px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="section-title text-3xl sm:text-4xl" data-aos="fade-up">Nos Valeurs</h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
              Les valeurs qui guident chacune de nos actions et décisions
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                whileHover={{ scale: 1.05 }}
                className="text-center p-5 sm:p-6 rounded-xl bg-gray-50 hover:shadow-lg transition-all touch-manipulation active:scale-98"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <value.icon className="text-primary-600" size={32} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Chiffres clés - MOBILE OPTIMIZED */}
      <section className="py-12 sm:py-16 md:py-20 bg-primary-600 text-white">
        <div className="container-custom px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="section-title text-white text-3xl sm:text-4xl" data-aos="fade-up">
              SBS-GROUPE en chiffres
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {keyNumbers.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2 sm:mb-3">{item.number}</div>
                <div className="text-base sm:text-lg md:text-xl text-primary-100">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title" data-aos="fade-up">Certifications & Qualifications</h2>
            <p className="text-gray-600 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
              Nous sommes fiers de nos certifications qui attestent de notre engagement envers la qualité
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              'ISO 9001:2015',
              'ISO 14001',
              'OHSAS 18001',
              'Qualibat'
            ].map((cert, index) => (
              <motion.div
                key={cert}
                whileHover={{ y: -10 }}
                className="card p-6 text-center bg-white"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-primary-600" size={32} />
                </div>
                <h3 className="font-bold text-gray-900">{cert}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Rejoignez l'aventure SBS-GROUPE
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Découvrez comment nous pouvons transformer votre vision en réalité
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary bg-white text-primary-600 hover:bg-gray-100"
              >
                Contactez-nous
              </motion.a>
              <motion.a
                href="/realisations"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary border-white text-white hover:bg-white hover:text-primary-600"
              >
                Voir nos réalisations
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default About
