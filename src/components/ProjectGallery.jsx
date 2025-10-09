import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

/**
 * ProjectGallery Component - Galerie de projets avec filtres et lightbox
 * Affiche une grille de projets filtrable par catégorie avec effet zoom
 */
const ProjectGallery = () => {
  const [filter, setFilter] = useState('tous')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)

  // Données des projets
  const projects = [
    {
      id: 1,
      title: 'Immeuble résidentiel moderne',
      category: 'batiments',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
      description: 'Construction d\'un immeuble de 15 étages'
    },
    {
      id: 2,
      title: 'Autoroute A10',
      category: 'routes',
      image: 'https://images.unsplash.com/photo-1533567620725-5e36c7d6a1b7?w=800&q=80',
      description: 'Réfection complète de 20km d\'autoroute'
    },
    {
      id: 3,
      title: 'Pont suspendu',
      category: 'genie-civil',
      image: 'https://images.unsplash.com/photo-1514984879728-be0aff75a6e8?w=800&q=80',
      description: 'Construction d\'un pont de 500m'
    },
    {
      id: 4,
      title: 'Centre commercial',
      category: 'batiments',
      image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&q=80',
      description: 'Complexe commercial de 5000m²'
    },
    {
      id: 5,
      title: 'Route nationale N7',
      category: 'routes',
      image: 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=800&q=80',
      description: 'Aménagement routier urbain'
    },
    {
      id: 6,
      title: 'Station d\'épuration',
      category: 'genie-civil',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80',
      description: 'Infrastructure hydraulique moderne'
    },
    {
      id: 7,
      title: 'Villa de luxe',
      category: 'batiments',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
      description: 'Résidence haut de gamme'
    },
    {
      id: 8,
      title: 'Tunnel urbain',
      category: 'genie-civil',
      image: 'https://images.unsplash.com/photo-1558882224-dda166733046?w=800&q=80',
      description: 'Tunnel de 2km sous la ville'
    },
    {
      id: 9,
      title: 'Rocade périphérique',
      category: 'routes',
      image: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&q=80',
      description: 'Construction de voie rapide'
    }
  ]

  // Filtres disponibles
  const filters = [
    { id: 'tous', label: 'Tous les projets' },
    { id: 'batiments', label: 'Bâtiments' },
    { id: 'routes', label: 'Routes' },
    { id: 'genie-civil', label: 'Génie Civil' }
  ]

  // Filtrer les projets
  const filteredProjects = filter === 'tous' 
    ? projects 
    : projects.filter(project => project.category === filter)

  // Ouvrir la lightbox
  const openLightbox = (index) => {
    setPhotoIndex(index)
    setLightboxOpen(true)
  }

  return (
    <div>
      {/* Boutons de filtrage */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {filters.map((f) => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              filter === f.id
                ? 'bg-primary-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Grille de projets */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="group cursor-pointer"
              onClick={() => openLightbox(index)}
              data-aos="zoom-in"
              data-aos-delay={index * 50}
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg aspect-[4/3]">
                {/* Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay au hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-200 text-sm">{project.description}</p>
                    <div className="mt-4 flex items-center text-sm font-semibold">
                      Voir le projet
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Badge catégorie */}
                <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {filters.find(f => f.id === project.category)?.label}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox pour agrandir les images */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={filteredProjects.map(project => ({
          src: project.image,
          title: project.title,
          description: project.description
        }))}
        index={photoIndex}
        on={{
          view: ({ index }) => setPhotoIndex(index)
        }}
      />
    </div>
  )
}

export default ProjectGallery
