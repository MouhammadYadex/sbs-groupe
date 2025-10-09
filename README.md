# 🏗️ SICAT-BTP - Site Web Professionnel

Un site web moderne et professionnel pour une entreprise de BTP, développé avec React, TailwindCSS et diverses technologies modernes.

## 🚀 Technologies Utilisées

- **React 19** - Bibliothèque UI
- **Vite** - Build tool ultra-rapide
- **TailwindCSS** - Framework CSS utility-first
- **React Router DOM** - Navigation entre pages
- **Framer Motion** - Animations fluides
- **AOS** - Animation On Scroll
- **Swiper.js** - Carrousel de témoignages
- **Yet Another React Lightbox** - Galerie d'images
- **React Helmet** - Gestion du SEO
- **EmailJS** - Formulaire de contact
- **Lucide React** - Icônes modernes

## 📁 Structure du Projet

```
src/
├── components/
│   ├── Navbar.jsx              # Menu de navigation sticky
│   ├── Footer.jsx              # Pied de page avec liens
│   ├── HeroSection.jsx         # Section hero avec slider
│   ├── ServiceCard.jsx         # Carte de service réutilisable
│   ├── ProjectGallery.jsx      # Galerie de projets avec filtres
│   ├── Testimonials.jsx        # Carrousel de témoignages
│   ├── ContactForm.jsx         # Formulaire de contact EmailJS
│   └── PageTransition.jsx      # Transitions entre pages
│
├── pages/
│   ├── Home.jsx                # Page d'accueil
│   ├── About.jsx               # Page À propos
│   ├── Services.jsx            # Page Services
│   ├── Projects.jsx            # Page Réalisations
│   ├── Diaspora.jsx            # Page Offre Diaspora
│   ├── Blog.jsx                # Page Blog
│   └── Contact.jsx             # Page Contact
│
├── App.jsx                     # Composant principal
├── main.jsx                    # Point d'entrée
└── index.css                   # Styles globaux
```

## 🎨 Fonctionnalités

### Page d'Accueil
- ✅ Hero section avec slider animé
- ✅ Section services avec cartes interactives
- ✅ Points forts de l'entreprise
- ✅ Statistiques animées
- ✅ Galerie de projets récents
- ✅ Témoignages clients (carrousel)
- ✅ CTA pour l'offre Diaspora

### Page Services
- ✅ Grille complète de tous les services
- ✅ Processus de travail en 6 étapes
- ✅ Statistiques de qualité
- ✅ Animations AOS

### Page Réalisations
- ✅ Galerie filtrable (Tous / Bâtiments / Routes / Génie Civil)
- ✅ Lightbox pour agrandir les images
- ✅ Animations au scroll
- ✅ Statistiques projets

### Page Offre Diaspora
- ✅ Processus détaillé en 6 étapes
- ✅ Avantages du service
- ✅ Témoignage client
- ✅ FAQ
- ✅ Design doré premium

### Page À Propos
- ✅ Histoire de l'entreprise
- ✅ Mission et Vision
- ✅ Valeurs
- ✅ Chiffres clés
- ✅ Certifications

### Page Blog
- ✅ Liste d'articles avec images
- ✅ Filtres par catégorie
- ✅ Article mis en avant
- ✅ Newsletter

### Page Contact
- ✅ Formulaire EmailJS
- ✅ Informations de contact
- ✅ Carte Google Maps
- ✅ FAQ
- ✅ Urgence 24/7

## 🛠️ Installation et Lancement

### Prérequis
- Node.js (version 16 ou supérieure)
- npm ou yarn

### Installation

```bash
# Installer les dépendances
npm install --legacy-peer-deps
```

### Lancement en développement

```bash
npm run dev
```

Le site sera accessible sur `http://localhost:3000`

### Build pour production

```bash
npm run build
```

### Prévisualiser le build

```bash
npm run preview
```

## ⚙️ Configuration EmailJS

Pour que le formulaire de contact fonctionne, configurez EmailJS :

1. Créez un compte sur [EmailJS](https://www.emailjs.com/)
2. Créez un service email
3. Créez un template d'email
4. Récupérez vos clés API
5. Modifiez le fichier `src/components/ContactForm.jsx`

## 🎨 Personnalisation

### Couleurs
Les couleurs principales sont définies dans `tailwind.config.js`

### Images
Remplacez les URLs Unsplash par vos propres images

### Contenu
Modifiez le texte directement dans les fichiers des pages

## 📱 Responsive Design

Le site est entièrement responsive et optimisé pour tous les écrans.

## 🚀 Déploiement

Compatible avec Vercel, Netlify et tous les hébergeurs modernes.

---

🏗️ **SICAT-BTP - Bâtir votre avenir**

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
