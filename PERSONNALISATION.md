# 🎨 GUIDE DE PERSONNALISATION RAPIDE

## 🚀 Modifications essentielles à faire

### 1️⃣ Informations de contact (PRIORITAIRE)

#### Footer - `src/components/Footer.jsx`
Ligne 103-125 :
```javascript
<li className="flex items-start">
  <MapPin size={20} className="mr-3 mt-1" />
  <span>VOTRE ADRESSE ICI</span>  // ← Changer
</li>
<li className="flex items-center">
  <Phone size={20} className="mr-3" />
  <a href="tel:+33123456789">VOTRE NUMÉRO</a>  // ← Changer
</li>
<li className="flex items-center">
  <Mail size={20} className="mr-3" />
  <a href="mailto:contact@sicat-btp.com">VOTRE EMAIL</a>  // ← Changer
</li>
```

#### Page Contact - `src/pages/Contact.jsx`
Lignes 17-36 : Mêmes modifications

### 2️⃣ Configuration EmailJS

#### `src/components/ContactForm.jsx`
Ligne 42-45 :
```javascript
await emailjs.sendForm(
  'votre_service_id',      // ← Remplacer
  'votre_template_id',     // ← Remplacer
  form.current,
  'votre_public_key'       // ← Remplacer
)
```

**Obtenir les clés :**
1. Aller sur https://www.emailjs.com/
2. Créer un compte gratuit
3. Ajouter un service email (Gmail, Outlook, etc.)
4. Créer un template
5. Copier les clés dans le code

### 3️⃣ Images du slider Hero

#### `src/components/HeroSection.jsx`
Lignes 12-34 :
```javascript
const slides = [
  {
    title: 'Votre titre',
    subtitle: 'Votre sous-titre',
    description: 'Votre description',
    image: 'URL_DE_VOTRE_IMAGE',  // ← Remplacer par votre image
    cta: 'Votre CTA'
  },
  // Même chose pour les 2 autres slides
]
```

**Où trouver des images ?**
- Vos propres photos
- Unsplash.com (gratuites)
- Pexels.com (gratuites)
- Pixabay.com (gratuites)

### 4️⃣ Logo de l'entreprise

#### Navbar - `src/components/Navbar.jsx`
Lignes 56-66 :
```javascript
<Link to="/" className="flex items-center space-x-2">
  <img src="/logo.png" alt="Logo" className="w-12 h-12" />  // ← Option 1: Image
  {/* OU garder le logo texte actuel */}
  <div className="w-12 h-12 bg-primary-600 rounded-lg">
    <span className="text-white font-bold text-xl">SB</span>  // ← Changer initiales
  </div>
</Link>
```

**Pour ajouter votre logo :**
1. Placez `logo.png` dans `public/`
2. Décommentez la ligne avec `<img>`
3. Ajustez la taille si nécessaire

### 5️⃣ Carte Google Maps

#### Page Contact - `src/pages/Contact.jsx`
Ligne 153 :
```javascript
<iframe
  src="VOTRE_URL_GOOGLE_MAPS"  // ← Remplacer
  // ...
></iframe>
```

**Obtenir l'URL :**
1. Aller sur Google Maps
2. Chercher votre adresse
3. Cliquer sur "Partager" → "Intégrer une carte"
4. Copier le code et extraire l'URL du `src="..."`

### 6️⃣ Réseaux sociaux

#### Footer - `src/components/Footer.jsx`
Lignes 62-85 :
```javascript
<a href="https://facebook.com/VOTRE_PAGE" target="_blank">  // ← Changer URL
  <Facebook size={20} />
</a>
<a href="https://twitter.com/VOTRE_COMPTE" target="_blank">  // ← Changer URL
  <Twitter size={20} />
</a>
// etc.
```

### 7️⃣ Galerie de projets

#### `src/components/ProjectGallery.jsx`
Lignes 12-70 :
```javascript
const projects = [
  {
    id: 1,
    title: 'Nom de votre projet',           // ← Changer
    category: 'batiments',                  // ← batiments/routes/genie-civil
    image: 'URL_DE_VOTRE_IMAGE',           // ← Votre image
    description: 'Description du projet'    // ← Changer
  },
  // Ajoutez vos propres projets
]
```

### 8️⃣ Témoignages clients

#### `src/components/Testimonials.jsx`
Lignes 13-54 :
```javascript
const testimonials = [
  {
    name: 'Nom du client',           // ← Changer
    position: 'Poste',               // ← Changer
    company: 'Entreprise',           // ← Changer
    image: 'URL_PHOTO',              // ← Photo du client
    rating: 5,
    text: 'Le témoignage...'         // ← Témoignage réel
  },
  // Ajoutez vos vrais témoignages
]
```

### 9️⃣ Services

#### `src/pages/Services.jsx`
Lignes 20-67 :
```javascript
const services = [
  {
    icon: Building2,              // ← Choisir l'icône
    title: 'Nom du service',      // ← Votre service
    description: 'Description'    // ← Votre description
  },
  // Ajoutez/modifiez vos services
]
```

**Icônes disponibles :** Voir https://lucide.dev/icons/

### 🔟 Articles de blog

#### `src/pages/Blog.jsx`
Lignes 14-58 :
```javascript
const articles = [
  {
    title: 'Titre de l\'article',     // ← Changer
    excerpt: 'Résumé...',             // ← Changer
    image: 'URL_IMAGE',               // ← Votre image
    category: 'Catégorie',            // ← Catégorie
    author: 'Auteur',                 // ← Nom auteur
    date: 'Date',                     // ← Date
    readTime: 'X min'                 // ← Temps de lecture
  },
  // Ajoutez vos articles
]
```

## 🎨 Personnalisation des couleurs

### `tailwind.config.js`
Lignes 9-24 :
```javascript
colors: {
  primary: {
    // Bleu par défaut - Changez ces valeurs
    600: '#2563eb',  // ← Couleur principale
    700: '#1d4ed8',  // ← Variante foncée
    // etc.
  },
  gold: {
    // Doré pour l'offre Diaspora
    500: '#f59e0b',  // ← Couleur dorée
    600: '#d97706',  // ← Variante foncée
  }
}
```

**Outil pour choisir les couleurs :**
- https://tailwindcss.com/docs/customizing-colors
- https://colorhunt.co/
- https://coolors.co/

## 📝 Checklist de personnalisation

### Essentiel (à faire en premier)
- [ ] Adresse dans Footer
- [ ] Numéros de téléphone
- [ ] Adresses email
- [ ] Configuration EmailJS
- [ ] Logo de l'entreprise
- [ ] Carte Google Maps

### Important
- [ ] Images du slider Hero
- [ ] Galerie de projets (vos vraies réalisations)
- [ ] Témoignages clients (vrais témoignages)
- [ ] Services (adapter à votre offre)
- [ ] URLs des réseaux sociaux

### Optionnel
- [ ] Couleurs du thème
- [ ] Articles de blog
- [ ] Textes des pages
- [ ] Photos d'équipe
- [ ] Certifications

## 🚨 Erreurs communes à éviter

1. **Ne pas oublier** de remplacer `YOUR_SERVICE_ID` dans ContactForm
2. **Vérifier** que toutes les URLs d'images sont valides
3. **Tester** le formulaire de contact après configuration
4. **S'assurer** que la carte Google Maps affiche le bon emplacement
5. **Vérifier** tous les liens des réseaux sociaux

## 💡 Astuces

### Optimiser les images
1. Utiliser des formats WebP si possible
2. Compresser les images avec TinyPNG.com
3. Utiliser des dimensions appropriées (max 1920px de large pour le hero)

### Améliorer le SEO
1. Modifier les meta descriptions dans chaque page (avec React Helmet)
2. Ajouter des alt texts descriptifs aux images
3. Utiliser des URLs pertinentes

### Performance
1. Les images Unsplash sont lourdes - remplacez-les !
2. Testez la vitesse avec PageSpeed Insights
3. Activez la compression sur votre hébergeur

## 📞 Besoin d'aide ?

Si vous êtes bloqué sur une modification :
1. Cherchez le texte actuel dans les fichiers (CTRL+F)
2. Modifiez directement le texte
3. Sauvegardez - le site se met à jour automatiquement
4. Vérifiez dans le navigateur

---

**Bon courage pour la personnalisation ! 🎨**
