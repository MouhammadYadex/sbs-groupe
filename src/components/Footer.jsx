import { Link } from 'react-router-dom'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  Clock
} from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { path: '/', label: 'Accueil' },
    { path: '/a-propos', label: 'À Propos' },
    { path: '/services', label: 'Services' },
    { path: '/realisations', label: 'Réalisations' },
  ]

  const services = [
    'Construction de bâtiments',
    'Travaux routiers',
    'Génie civil',
    'Offre Diaspora',
  ]

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">SBS</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-white">SBS-GROUPE</span>
                <span className="text-xs text-gray-400">Excellence & Innovation</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              SBS-GROUPE est votre partenaire de confiance pour tous vos projets de construction, 
              du bâtiment aux travaux publics, avec plus de 15 ans d expérience et d expertise.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Liens Rapides</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="hover:text-primary-400 transition-colors flex items-center"
                  >
                    <span className="mr-2">→</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Link 
                to="/blog"
                className="text-primary-400 hover:text-primary-300 font-medium"
              >
                Blog & Actualités →
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Nos Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary-400 mr-2">✓</span>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Link 
                to="/diaspora"
                className="text-primary-400 hover:text-primary-300 font-medium"
              >
                Offre Diaspora →
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-primary-400 mt-1 flex-shrink-0" />
                <span>123 Avenue de la Construction<br />75001 Paris, France</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-primary-400 flex-shrink-0" />
                <a href="tel:+33123456789" className="hover:text-primary-400 transition-colors">
                  +33 1 23 45 67 89
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-primary-400 flex-shrink-0" />
                <a href="mailto:contact@sbs-groupe.fr" className="hover:text-primary-400 transition-colors">
                  contact@sbs-groupe.fr
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Clock size={20} className="text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <p>Lun - Ven: 8h00 - 18h00</p>
                  <p>Sam: 9h00 - 13h00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-950 py-6">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p>
              &copy; {currentYear} SBS-GROUPE. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/mentions-legales" className="hover:text-primary-400 transition-colors">
                Mentions légales
              </Link>
              <Link to="/politique-confidentialite" className="hover:text-primary-400 transition-colors">
                Politique de confidentialité
              </Link>
              <Link to="/cgv" className="hover:text-primary-400 transition-colors">
                CGV
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
