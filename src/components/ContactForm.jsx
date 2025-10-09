import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { Send, Check, AlertCircle } from 'lucide-react'

/**
 * ContactForm Component - Formulaire de contact avec EmailJS
 * Permet aux utilisateurs d'envoyer des messages directement depuis le site
 * 
 * Configuration EmailJS requise :
 * 1. Créer un compte sur emailjs.com
 * 2. Remplacer les clés ci-dessous par vos propres clés
 */
const ContactForm = () => {
  const form = useRef()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState({
    type: '', // 'success', 'error', ou ''
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Gestion des changements de champs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  // Soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    try {
      // Configuration EmailJS - À REMPLACER PAR VOS PROPRES CLÉS
      await emailjs.sendForm(
        'YOUR_SERVICE_ID',      // Remplacer par votre Service ID
        'YOUR_TEMPLATE_ID',     // Remplacer par votre Template ID
        form.current,
        'YOUR_PUBLIC_KEY'       // Remplacer par votre Public Key
      )

      // Succès
      setStatus({
        type: 'success',
        message: 'Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.'
      })

      // Réinitialiser le formulaire
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
    } catch (error) {
      // Erreur
      setStatus({
        type: 'error',
        message: 'Une erreur s\'est produite lors de l\'envoi du message. Veuillez réessayer.'
      })
      console.error('EmailJS Error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-xl shadow-xl p-8"
    >
      <form ref={form} onSubmit={handleSubmit} className="space-y-6">
        {/* Nom */}
        <div>
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
            Nom complet <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all"
            placeholder="Votre nom"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all"
            placeholder="votre.email@exemple.com"
          />
        </div>

        {/* Téléphone */}
        <div>
          <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
            Téléphone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all"
            placeholder="+33 1 23 45 67 89"
          />
        </div>

        {/* Sujet */}
        <div>
          <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">
            Sujet <span className="text-red-500">*</span>
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all"
          >
            <option value="">Sélectionnez un sujet</option>
            <option value="devis">Demande de devis</option>
            <option value="information">Demande d'information</option>
            <option value="diaspora">Offre Diaspora</option>
            <option value="autre">Autre</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="6"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all resize-none"
            placeholder="Décrivez votre projet ou votre demande..."
          ></textarea>
        </div>

        {/* Message de statut */}
        {status.message && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-4 rounded-lg flex items-center ${
              status.type === 'success'
                ? 'bg-green-50 text-green-800 border border-green-200'
                : 'bg-red-50 text-red-800 border border-red-200'
            }`}
          >
            {status.type === 'success' ? (
              <Check size={20} className="mr-2 flex-shrink-0" />
            ) : (
              <AlertCircle size={20} className="mr-2 flex-shrink-0" />
            )}
            <p>{status.message}</p>
          </motion.div>
        )}

        {/* Bouton de soumission */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full btn-primary flex items-center justify-center ${
            isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
              Envoi en cours...
            </>
          ) : (
            <>
              <Send size={20} className="mr-2" />
              Envoyer le message
            </>
          )}
        </button>

        {/* Note de confidentialité */}
        <p className="text-sm text-gray-500 text-center">
          Vos données sont protégées et ne seront jamais partagées avec des tiers.
        </p>
      </form>
    </motion.div>
  )
}

export default ContactForm
