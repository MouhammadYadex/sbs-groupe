# 🚀 CHECKLIST DE DÉPLOIEMENT

## ✅ Avant de déployer

### 1. Vérifications techniques

#### Formulaire de contact
- [ ] EmailJS configuré avec vos vraies clés
- [ ] Test d'envoi réussi
- [ ] Email de confirmation reçu

#### Contenu
- [ ] Toutes les informations de contact mises à jour
- [ ] Logo remplacé ou personnalisé
- [ ] Images du slider changées
- [ ] Galerie de projets avec vos vraies photos
- [ ] Témoignages clients réels
- [ ] Services adaptés à votre offre
- [ ] Carte Google Maps configurée

#### Pages
- [ ] Page d'accueil vérifiée
- [ ] Page À Propos vérifiée
- [ ] Page Services vérifiée
- [ ] Page Réalisations vérifiée
- [ ] Page Diaspora vérifiée
- [ ] Page Blog vérifiée
- [ ] Page Contact vérifiée

#### Navigation
- [ ] Tous les liens internes fonctionnent
- [ ] Liens des réseaux sociaux corrects
- [ ] Menu mobile fonctionne
- [ ] Transitions entre pages fluides

#### Responsive
- [ ] Test sur mobile (320px+)
- [ ] Test sur tablette (768px+)
- [ ] Test sur desktop (1024px+)
- [ ] Tous les éléments sont visibles

#### Performance
- [ ] Images optimisées
- [ ] Pas d'erreurs dans la console
- [ ] Temps de chargement < 3s
- [ ] Build de production réussit

### 2. SEO & Métadonnées

- [ ] Title de chaque page pertinent
- [ ] Meta descriptions uniques
- [ ] Alt texts sur toutes les images
- [ ] Favicon ajouté
- [ ] Open Graph tags (optionnel)

### 3. Légal & Confidentialité

- [ ] Mentions légales rédigées
- [ ] Politique de confidentialité
- [ ] CGV si nécessaire
- [ ] RGPD compliance (formulaire)

## 🏗️ Build de production

```bash
# 1. Build le projet
npm run build

# 2. Vérifier qu'il n'y a pas d'erreurs
# Le dossier dist/ doit être créé

# 3. Tester en local
npm run preview

# 4. Ouvrir http://localhost:4173
# Vérifier que tout fonctionne
```

## 🌐 Options de déploiement

### Option 1: Vercel (Recommandé - Gratuit)

#### Avantages
- ✅ Déploiement automatique
- ✅ HTTPS gratuit
- ✅ CDN mondial
- ✅ Domaine gratuit .vercel.app
- ✅ Support React/Vite natif

#### Étapes
```bash
# 1. Installer Vercel CLI
npm install -g vercel

# 2. Se connecter
vercel login

# 3. Déployer
vercel

# 4. Suivre les instructions
# - Project name: sicat-btp
# - Framework: Vite
# - Build command: npm run build
# - Output directory: dist
```

#### Domaine personnalisé
1. Aller sur vercel.com
2. Projet → Settings → Domains
3. Ajouter votre domaine
4. Suivre les instructions DNS

### Option 2: Netlify (Gratuit)

#### Avantages
- ✅ Interface simple
- ✅ Drag & drop
- ✅ HTTPS gratuit
- ✅ Formulaires intégrés
- ✅ Domaine gratuit .netlify.app

#### Méthode 1: Drag & Drop
1. `npm run build`
2. Aller sur https://app.netlify.com/drop
3. Glisser-déposer le dossier `dist/`
4. C'est en ligne !

#### Méthode 2: Git
1. Pusher votre code sur GitHub
2. Connecter Netlify à GitHub
3. Sélectionner le repo
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

### Option 3: Hébergement classique (cPanel, etc.)

#### Étapes
1. `npm run build`
2. Télécharger FileZilla ou utiliser le gestionnaire de fichiers
3. Uploader tout le contenu de `dist/` dans `public_html/`
4. Configurer le `.htaccess` pour React Router:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>
```

### Option 4: GitHub Pages (Gratuit)

#### Configuration
1. Installer gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Ajouter dans `package.json`:
```json
{
  "homepage": "https://votre-username.github.io/sicat-btp",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Modifier `vite.config.js`:
```javascript
export default defineConfig({
  base: '/sicat-btp/',  // Nom du repo
  // ...
})
```

4. Déployer:
```bash
npm run deploy
```

## 📊 Après le déploiement

### Vérifications post-déploiement
- [ ] Site accessible via l'URL
- [ ] HTTPS activé (cadenas vert)
- [ ] Toutes les pages chargent
- [ ] Images s'affichent
- [ ] Formulaire de contact fonctionne
- [ ] Menu mobile fonctionne
- [ ] Pas d'erreurs dans la console

### Outils de test
- [ ] Google PageSpeed Insights
- [ ] GTmetrix
- [ ] Mobile-Friendly Test
- [ ] Lighthouse (Chrome DevTools)

### SEO
- [ ] Soumettre sitemap à Google Search Console
- [ ] Vérifier indexation
- [ ] Configurer Google Analytics (optionnel)

### Monitoring
- [ ] Configurer un uptime monitor (UptimeRobot)
- [ ] Activer les notifications d'erreurs
- [ ] Sauvegarder le code source

## 🔒 Sécurité

### Checklist sécurité
- [ ] HTTPS activé
- [ ] Headers de sécurité configurés
- [ ] Pas de clés API exposées dans le code
- [ ] Variables d'environnement pour EmailJS
- [ ] Mise à jour régulière des dépendances

### Variables d'environnement (pour EmailJS)

Créer `.env.local`:
```
VITE_EMAILJS_SERVICE_ID=votre_service_id
VITE_EMAILJS_TEMPLATE_ID=votre_template_id
VITE_EMAILJS_PUBLIC_KEY=votre_public_key
```

Utiliser dans `ContactForm.jsx`:
```javascript
emailjs.sendForm(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  form.current,
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
)
```

## 📝 Maintenance

### Tâches régulières
- [ ] Vérifier les liens cassés (mensuellement)
- [ ] Mettre à jour les projets/réalisations
- [ ] Ajouter de nouveaux articles de blog
- [ ] Répondre aux messages du formulaire
- [ ] Mettre à jour les dépendances npm
- [ ] Sauvegarder la base de données (si applicable)

### Mises à jour
```bash
# Vérifier les packages obsolètes
npm outdated

# Mettre à jour
npm update

# Rebuild et redéployer
npm run build
vercel --prod  # ou autre méthode
```

## 🎉 Go Live !

Une fois toutes les cases cochées :

1. **Build final**
   ```bash
   npm run build
   ```

2. **Déployer**
   ```bash
   vercel --prod
   # ou autre méthode
   ```

3. **Tester en production**
   - Visiter toutes les pages
   - Tester le formulaire
   - Vérifier sur mobile

4. **Annoncer le lancement** 🚀
   - Réseaux sociaux
   - Newsletter
   - Clients existants

## 📞 Support post-déploiement

### Problèmes courants

**Site ne s'affiche pas**
- Vérifier les logs de déploiement
- Vérifier le dossier de build (`dist/`)
- Vérifier la configuration du serveur

**Formulaire ne fonctionne pas**
- Vérifier les clés EmailJS
- Tester en environnement de dev
- Vérifier la console du navigateur

**Images ne chargent pas**
- Vérifier les URLs
- Vérifier les chemins relatifs
- Compresser les images trop lourdes

**Route 404 sur refresh**
- Configurer le serveur pour SPA
- Ajouter `.htaccess` ou `_redirects`

---

## ✨ Félicitations !

Votre site est maintenant en ligne ! 🎊

**URLs importantes à noter :**
- 🌐 URL du site : ________________
- 📧 Email de contact : ________________
- 🔑 Dashboard hébergeur : ________________

**Prochaines étapes suggérées :**
1. Soumettre à Google Search Console
2. Créer des profils sur les réseaux sociaux
3. Commencer à publier du contenu
4. Collecter des témoignages clients
5. Ajouter Google Analytics

**Bon lancement ! 🚀**
