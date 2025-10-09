import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion'
import { Calendar, User, ArrowRight, Tag } from 'lucide-react'
import { Link } from 'react-router-dom'

/**
 * Blog Page - Page du blog
 * Affiche les articles de blog de l'entreprise
 */
const Blog = () => {
  // Articles de blog
  const articles = [
    {
      id: 1,
      title: 'Les tendances de la construction en 2025',
      excerpt: 'Découvrez les innovations et technologies qui transforment le secteur du BTP cette année.',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80',
      category: 'Innovation',
      author: 'Jean Dupont',
      date: '15 Mars 2025',
      readTime: '5 min'
    },
    {
      id: 2,
      title: 'Construction durable : nos engagements',
      excerpt: 'Comment nous intégrons les principes du développement durable dans tous nos projets.',
      image: 'https://images.unsplash.com/photo-1518005068251-37900150dfca?w=800&q=80',
      category: 'Environnement',
      author: 'Marie Lambert',
      date: '10 Mars 2025',
      readTime: '7 min'
    },
    {
      id: 3,
      title: 'Guide complet pour construire sa maison',
      excerpt: 'Toutes les étapes de la construction d\'une maison individuelle, de A à Z.',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
      category: 'Guide',
      author: 'Pierre Martin',
      date: '5 Mars 2025',
      readTime: '10 min'
    },
    {
      id: 4,
      title: 'L\'importance de la sécurité sur les chantiers',
      excerpt: 'Nos protocoles et mesures pour garantir la sécurité de tous sur nos chantiers.',
      image: 'https://images.unsplash.com/photo-1577495508326-19e0d450a69f?w=800&q=80',
      category: 'Sécurité',
      author: 'Ahmed Benali',
      date: '1 Mars 2025',
      readTime: '6 min'
    },
    {
      id: 5,
      title: 'Diaspora : construire depuis l\'étranger',
      excerpt: 'Témoignages et conseils pour réussir son projet de construction à distance.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
      category: 'Diaspora',
      author: 'Sophie Durand',
      date: '25 Février 2025',
      readTime: '8 min'
    },
    {
      id: 6,
      title: 'Les matériaux de construction du futur',
      excerpt: 'Exploration des nouveaux matériaux écologiques et performants pour le BTP.',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
      category: 'Innovation',
      author: 'Jean Dupont',
      date: '20 Février 2025',
      readTime: '5 min'
    }
  ]

  // Catégories
  const categories = [
    'Tous',
    'Innovation',
    'Environnement',
    'Guide',
    'Sécurité',
    'Diaspora'
  ]

  return (
    <>
      <Helmet>
        <title>Blog - Actualités et Conseils BTP | SBS-GROUPE</title>
        <meta 
          name="description" 
          content="Découvrez nos articles sur la construction, le BTP, les innovations et nos conseils d'experts." 
        />
      </Helmet>

      {/* Hero Section */}
      <section 
        className="relative h-[50vh] flex items-center justify-center text-white"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1920&q=80)',
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
            Notre Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl"
          >
            Actualités, conseils et expertise BTP
          </motion.p>
        </div>
      </section>

      {/* Filtres de catégories */}
      <section className="py-12 bg-white border-b">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  index === 0
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Article mis en avant */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden" data-aos="fade-up">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="h-64 lg:h-auto">
                <img
                  src={articles[0].image}
                  alt={articles[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Article en vedette
                  </span>
                  <span className="text-primary-600 font-semibold">
                    {articles[0].category}
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  {articles[0].title}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {articles[0].excerpt}
                </p>
                <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    {articles[0].author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    {articles[0].date}
                  </div>
                  <div>{articles[0].readTime} de lecture</div>
                </div>
                <Link 
                  to={`/blog/${articles[0].id}`}
                  className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                >
                  Lire l'article
                  <ArrowRight size={20} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grille d'articles */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(1).map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Contenu */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary-600 transition-colors">
                    <Link to={`/blog/${article.id}`}>
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>

                  {/* Meta info */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-2">
                      <User size={14} />
                      {article.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={14} />
                      {article.date}
                    </div>
                  </div>

                  {/* Lien lire plus */}
                  <Link 
                    to={`/blog/${article.id}`}
                    className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                  >
                    Lire la suite
                    <ArrowRight size={18} className="ml-2" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-2 mt-12" data-aos="fade-up">
            <button className="px-4 py-2 bg-primary-600 text-white rounded-lg font-semibold">
              1
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
              2
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
              3
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
              Suivant →
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center" data-aos="zoom-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Restez informé
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Inscrivez-vous à notre newsletter pour recevoir nos derniers articles et actualités
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-grow px-6 py-4 rounded-lg text-gray-800 focus:ring-2 focus:ring-white focus:outline-none"
              />
              <button 
                type="submit"
                className="bg-white text-primary-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all whitespace-nowrap"
              >
                S'inscrire
              </button>
            </form>
            <p className="text-sm text-blue-200 mt-4">
              Pas de spam, seulement du contenu de qualité. Désinscription possible à tout moment.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog
