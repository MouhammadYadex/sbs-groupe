import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion'
import { Target, Eye, Award, Users, TrendingUp } from 'lucide-react'

const About = () => {
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

      <section className="relative py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-y-6"></div>
        </div>
        
        <div className="container-custom relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            À Propos de SBS-GROUPE
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl"
          >
            Excellence, Innovation et Engagement
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                alt="Notre équipe"
                className="rounded-xl shadow-2xl"
              />
            </div>
            <div data-aos="fade-left">
              <h2 className="section-title">Notre Histoire</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Fondée en 2010, <strong>SBS-GROUPE</strong> est née de la vision de créer une entreprise 
                  de construction qui allie expertise technique, innovation et engagement envers la satisfaction client.
                </p>
                <p>
                  Au fil des années, nous sommes passés d une petite équipe locale à un groupe reconnu 
                  dans toute la région, réalisant des projets d envergure dans divers secteurs.
                </p>
                <p>
                  Aujourd hui, avec plus de <strong>15 ans d expérience</strong> et <strong>500 projets réalisés</strong>, 
                  nous continuons à innover et à repousser les limites de l excellence dans le secteur du BTP.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                Fournir des solutions de construction de haute qualité qui dépassent les attentes de nos clients.
              </p>
            </motion.div>

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
                Devenir le leader régional du secteur de la construction en étant reconnu pour notre innovation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title" data-aos="fade-up">Nos Valeurs</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 rounded-xl bg-gray-50 hover:shadow-lg transition-all"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="text-primary-600" size={40} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-600 text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title text-white" data-aos="fade-up">
              SBS-GROUPE en chiffres
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {keyNumbers.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-bold mb-3">{item.number}</div>
                <div className="text-lg md:text-xl text-primary-100">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Rejoignez l aventure SBS-GROUPE
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Découvrez comment nous pouvons transformer votre vision en réalité
            </p>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default About
