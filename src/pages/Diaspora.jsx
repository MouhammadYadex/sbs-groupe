import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion'
import { 
  Globe, 
  Video, 
  FileText, 
  CheckCircle, 
  MessageSquare, 
  Camera,
  Shield,
  Clock,
  Banknote
} from 'lucide-react'

/**
 * Diaspora Page - Page Offre Diaspora
 * Présente l'offre spéciale pour les clients de la diaspora
 */
const Diaspora = () => {
  // Étapes du processus Diaspora
  const steps = [
    {
      number: '01',
      icon: MessageSquare,
      title: 'Premier contact',
      description: 'Prise de contact via WhatsApp, email ou visioconférence pour discuter de votre projet.'
    },
    {
      number: '02',
      icon: FileText,
      title: 'Étude du projet',
      description: 'Envoi des plans, devis détaillé et calendrier prévisionnel des travaux.'
    },
    {
      number: '03',
      icon: CheckCircle,
      title: 'Validation',
      description: 'Signature du contrat et mise en place du planning de paiement sécurisé.'
    },
    {
      number: '04',
      icon: Camera,
      title: 'Suivi en temps réel',
      description: 'Photos et vidéos régulières de l\'avancement des travaux via WhatsApp.'
    },
    {
      number: '05',
      icon: Video,
      title: 'Visites virtuelles',
      description: 'Visioconférences pour voir votre projet en direct et valider chaque étape.'
    },
    {
      number: '06',
      icon: CheckCircle,
      title: 'Livraison',
      description: 'Réception finale avec visite virtuelle complète et remise des clés.'
    }
  ]

  // Avantages de l'offre Diaspora
  const advantages = [
    {
      icon: Shield,
      title: 'Sécurité garantie',
      description: 'Contrat en bonne et due forme avec garanties bancaires et assurances complètes.'
    },
    {
      icon: Clock,
      title: 'Suivi permanent',
      description: 'Rapports hebdomadaires détaillés et communication en temps réel sur l\'avancement.'
    },
    {
      icon: Banknote,
      title: 'Paiement sécurisé',
      description: 'Système de paiement échelonné selon l\'avancement des travaux.'
    },
    {
      icon: Camera,
      title: 'Transparence totale',
      description: 'Accès 24/7 aux photos et vidéos de votre chantier via plateforme dédiée.'
    },
    {
      icon: Video,
      title: 'Visites virtuelles',
      description: 'Visioconférences régulières pour valider chaque phase du projet.'
    },
    {
      icon: Globe,
      title: 'Service international',
      description: 'Disponible depuis n\'importe quel pays avec assistance multilingue.'
    }
  ]

  return (
    <>
      <Helmet>
        <title>Offre Diaspora - Construisez à distance | SBS-GROUPE</title>
        <meta 
          name="description" 
          content="Offre spéciale pour la diaspora : construisez votre projet à distance en toute sérénité avec SBS-GROUPE. Suivi en temps réel et transparence garantie." 
        />
      </Helmet>

      {/* Hero Section */}
      <section 
        className="relative h-[70vh] flex items-center justify-center text-white"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gold-600/90 to-gold-800/90"></div>
        <div className="relative z-10 text-center container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <Globe size={80} className="mx-auto" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            Offre Diaspora
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl mb-8"
          >
            Construisez votre projet à distance en toute sérénité
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a 
              href="/contact" 
              className="bg-white text-gold-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all inline-block shadow-xl"
            >
              Démarrer mon projet
            </a>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <h2 className="section-title">Vous êtes à l'étranger ? Nous gérons tout !</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Vous vivez à l'étranger mais souhaitez construire ou rénover au pays ? 
              <strong className="text-primary-600"> SBS-GROUPE</strong> vous accompagne de A à Z dans la 
              réalisation de votre projet. Grâce à notre <strong>offre Diaspora</strong>, suivez 
              l'évolution de votre chantier en temps réel, où que vous soyez dans le monde.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Bénéficiez d'un <strong>service clé en main</strong> avec suivi personnalisé, rapports 
              détaillés, photos et vidéos régulières, visioconférences et paiement sécurisé. 
              Votre tranquillité d'esprit est notre priorité.
            </p>
          </div>
        </div>
      </section>

      {/* Processus étape par étape */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="section-title">Comment ça marche ?</h2>
            <p className="section-subtitle">
              Un processus simple et transparent en 6 étapes
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex items-center gap-8 mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
                data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
              >
                {/* Icône et numéro */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-24 h-24 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center shadow-xl">
                      <step.icon size={40} className="text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {step.number}
                    </div>
                  </div>
                </div>

                {/* Contenu */}
                <div className="flex-grow bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="section-title">Les avantages de notre offre</h2>
            <p className="section-subtitle">
              Un service complet pour votre tranquillité d'esprit
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="card text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <advantage.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {advantage.title}
                </h3>
                <p className="text-gray-600">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignage Diaspora */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center" data-aos="zoom-in">
            <div className="mb-8">
              <img
                src="https://i.pravatar.cc/150?img=5"
                alt="Marie Lambert"
                className="w-24 h-24 rounded-full mx-auto border-4 border-white shadow-xl"
              />
            </div>
            <blockquote className="text-2xl font-light italic mb-6 leading-relaxed">
              "Grâce à l'offre Diaspora de SBS-GROUPE, j'ai pu construire ma maison depuis la France 
              en toute sérénité. Le suivi en temps réel, les visioconférences régulières et la 
              transparence totale m'ont permis de vivre cette aventure sans stress. Un service 
              remarquable !"
            </blockquote>
            <div className="font-bold text-xl">Marie Lambert</div>
            <div className="text-blue-200">Diaspora France - Villa construite en 2023</div>
          </div>
        </div>
      </section>

      {/* FAQ Rapide */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="section-title">Questions fréquentes</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: 'Puis-je gérer mon projet depuis n\'importe quel pays ?',
                answer: 'Oui, absolument ! Notre service est accessible depuis n\'importe où dans le monde via internet.'
              },
              {
                question: 'Comment sont effectués les paiements ?',
                answer: 'Les paiements sont échelonnés selon l\'avancement des travaux et sécurisés via virement bancaire international ou autres moyens sécurisés.'
              },
              {
                question: 'À quelle fréquence recevrai-je des nouvelles de mon chantier ?',
                answer: 'Vous recevez des rapports hebdomadaires avec photos et vidéos, plus des visioconférences mensuelles (ou plus selon vos besoins).'
              },
              {
                question: 'Puis-je modifier le projet en cours de route ?',
                answer: 'Oui, des ajustements sont possibles. Nous étudions chaque demande et adaptons le planning et le devis si nécessaire.'
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-gold-500 to-gold-600 text-white">
        <div className="container-custom">
          <div className="text-center" data-aos="zoom-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Prêt à démarrer votre projet ?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contactez-nous dès aujourd'hui et bénéficiez d'un accompagnement personnalisé 
              pour concrétiser votre rêve, où que vous soyez.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-white text-gold-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all shadow-xl"
              >
                Nous contacter
              </a>
              <a 
                href="tel:+33123456789" 
                className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-all"
              >
                Appeler maintenant
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Diaspora
