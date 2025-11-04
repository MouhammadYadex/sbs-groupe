import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'
import ContactForm from '../components/ContactForm'

/**
 * Contact Page - Page de contact
 * Formulaire de contact avec informations et carte
 */
const Contact = () => {
  // Informations de contact
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adresse',
      details: ['123 Avenue de la Construction', '75000 Paris, France']
    },
    {
      icon: Phone,
      title: 'Téléphone',
      details: ['+33 1 23 45 67 89', '+33 6 12 34 56 78']
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['contact@sicat-btp.com', 'devis@sicat-btp.com']
    },
    {
      icon: Clock,
      title: 'Horaires',
      details: ['Lundi - Vendredi: 8h00 - 18h00', 'Samedi: 9h00 - 13h00']
    }
  ]

  return (
    <>
      <Helmet>
        <title>Contact - SBS-GROUPE</title>
        <meta 
          name="description" 
          content="Contactez SBS-GROUPE pour votre projet de construction. Devis gratuit et personnalisé. Nous sommes à votre écoute." 
        />
      </Helmet>

      {/* Hero Section */}
      <section 
        className="relative h-[50vh] flex items-center justify-center text-white"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 hero-overlay"></div>
        <div className="relative z-10 text-center container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <Send size={64} className="mx-auto" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            Contactez-nous
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl"
          >
            Nous sommes à votre écoute pour concrétiser vos projets
          </motion.p>
        </div>
      </section>

      {/* Section principale */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Colonne gauche - Informations de contact */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                <div data-aos="fade-right">
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">
                    Nos coordonnées
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    N'hésitez pas à nous contacter par téléphone, email ou en remplissant 
                    le formulaire ci-contre. Nous vous répondrons dans les plus brefs délais.
                  </p>
                </div>

                {/* Cartes d'informations */}
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg p-6 flex items-start gap-4"
                    data-aos="fade-right"
                    data-aos-delay={index * 100}
                  >
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <info.icon size={24} className="text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-2">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}

                {/* Boutons d'action rapide */}
                <div className="space-y-4" data-aos="fade-right">
                  <a
                    href="tel:+33123456789"
                    className="btn-primary w-full text-center flex items-center justify-center gap-2"
                  >
                    <Phone size={20} />
                    Appeler maintenant
                  </a>
                  <a
                    href="mailto:contact@sicat-btp.com"
                    className="btn-secondary w-full text-center flex items-center justify-center gap-2"
                  >
                    <Mail size={20} />
                    Envoyer un email
                  </a>
                </div>
              </div>
            </div>

            {/* Colonne droite - Formulaire de contact */}
            <div className="lg:col-span-2" data-aos="fade-left">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Envoyez-nous un message
              </h2>
              <p className="text-gray-600 mb-8">
                Remplissez le formulaire ci-dessous et nous vous recontacterons rapidement 
                pour discuter de votre projet.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Carte Google Maps */}
      <section className="h-[500px] bg-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.292292615674895!3d48.858370079287466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sfr!4v1234567890123!5m2!1sen!2sfr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="SBS-GROUPE Location"
        ></iframe>
      </section>

      {/* Section CTA - Urgence */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom">
          <div className="text-center" data-aos="zoom-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Besoin d'une intervention urgente ?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Notre équipe est disponible 24/7 pour les urgences. 
              N'hésitez pas à nous appeler immédiatement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+33612345678" 
                className="bg-white text-primary-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all shadow-xl inline-flex items-center justify-center gap-2"
              >
                <Phone size={24} />
                Urgence: +33 6 12 34 56 78
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section FAQ rapide */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="section-title">Questions fréquentes</h2>
              <p className="section-subtitle">
                Trouvez rapidement des réponses à vos questions
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: 'Quel est le délai pour recevoir un devis ?',
                  answer: 'Nous nous engageons à vous fournir un devis détaillé sous 48 à 72 heures après réception de votre demande et visite du site si nécessaire.'
                },
                {
                  question: 'Proposez-vous des garanties sur vos travaux ?',
                  answer: 'Oui, tous nos travaux sont garantis selon les normes en vigueur : garantie décennale, biennale et de parfait achèvement.'
                },
                {
                  question: 'Intervenez-vous dans toute la France ?',
                  answer: 'Oui, nous intervenons sur l\'ensemble du territoire français ainsi qu\'à l\'international pour nos clients de la diaspora.'
                },
                {
                  question: 'Puis-je suivre l\'avancement de mon chantier ?',
                  answer: 'Absolument ! Nous mettons à votre disposition un suivi personnalisé avec rapports réguliers, photos et accès à un espace client en ligne.'
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12" data-aos="fade-up">
              <p className="text-gray-600 mb-4">
                Vous avez d'autres questions ?
              </p>
              <a 
                href="/blog" 
                className="text-primary-600 font-semibold hover:text-primary-700 transition-colors inline-flex items-center gap-2"
              >
                Consultez notre blog
                <Send size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
