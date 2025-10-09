import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { Star, Quote } from 'lucide-react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

/**
 * Testimonials Component - Carrousel de témoignages clients
 * Affiche les avis clients avec notation et navigation
 */
const Testimonials = () => {
  // Données des témoignages
  const testimonials = [
    {
      id: 1,
      name: 'Jean Dupont',
      position: 'Directeur Général',
      company: 'Entreprise XYZ',
      image: 'https://i.pravatar.cc/150?img=12',
      rating: 5,
      text: 'SICAT-BTP a réalisé la construction de notre nouveau siège social. Le professionnalisme, le respect des délais et la qualité du travail sont exceptionnels. Je recommande vivement leurs services.'
    },
    {
      id: 2,
      name: 'Marie Lambert',
      position: 'Propriétaire',
      company: 'Villa Moderne',
      image: 'https://i.pravatar.cc/150?img=5',
      rating: 5,
      text: 'Grâce à l\'offre Diaspora, j\'ai pu construire ma maison depuis l\'étranger en toute sérénité. L\'équipe est réactive et transparente. Un service remarquable !'
    },
    {
      id: 3,
      name: 'Pierre Martin',
      position: 'Maire',
      company: 'Ville de Beauville',
      image: 'https://i.pravatar.cc/150?img=33',
      rating: 5,
      text: 'La réfection de nos routes communales a été réalisée dans les temps et avec un excellent rapport qualité-prix. Une entreprise sérieuse et compétente.'
    },
    {
      id: 4,
      name: 'Sophie Durand',
      position: 'Chef de Projet',
      company: 'Immobilier Plus',
      image: 'https://i.pravatar.cc/150?img=9',
      rating: 5,
      text: 'Nous collaborons régulièrement avec SICAT-BTP pour nos projets immobiliers. Leur expertise et leur engagement sont des atouts majeurs pour nos réalisations.'
    },
    {
      id: 5,
      name: 'Ahmed Benali',
      position: 'Investisseur',
      company: 'Diaspora Invest',
      image: 'https://i.pravatar.cc/150?img=68',
      rating: 5,
      text: 'Investir dans l\'immobilier depuis l\'étranger n\'a jamais été aussi simple. SICAT-BTP gère tout de A à Z avec une transparence totale. Excellent service !'
    }
  ]

  return (
    <div className="bg-gray-50 py-20">
      <div className="container-custom">
        {/* En-tête de section */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="section-title">Ce que disent nos clients</h2>
          <p className="section-subtitle">
            Découvrez les témoignages de ceux qui nous font confiance
          </p>
        </div>

        {/* Carrousel de témoignages */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="pb-12"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-white rounded-xl shadow-lg p-8 h-full flex flex-col">
                {/* Icône de citation */}
                <div className="mb-4">
                  <Quote size={40} className="text-primary-600 opacity-20" />
                </div>

                {/* Étoiles de notation */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-gold-500 fill-current" />
                  ))}
                </div>

                {/* Texte du témoignage */}
                <p className="text-gray-600 leading-relaxed mb-6 flex-grow italic">
                  "{testimonial.text}"
                </p>

                {/* Informations du client */}
                <div className="flex items-center border-t pt-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                    <p className="text-sm text-primary-600 font-semibold">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Testimonials
