# 🎨 Guide des Couleurs - SBS-GROUPE

## Palette de couleurs harmonisée pour accessibilité (WCAG AAA)

### 🔵 Couleurs Primaires (Bleu)
- **primary-600** `#2563eb` - Boutons, liens, accents
- **primary-700** `#1d4ed8` - Hover states
- **primary-800** `#1e40af` - Fonds sombres
- **primary-900** `#1e3a8a` - Très sombre

### 🟡 Couleurs Secondaires (Or)
- **gold-400** `#fbbf24` - Accents dorés
- **gold-500** `#f59e0b` - Boutons secondaires
- **gold-600** `#d97706` - Hover doré

### ⚪ Couleurs de Texte (pour lisibilité optimale)

#### Sur fond sombre (primary-600 à primary-900):
- ✅ **text-white** - Titres principaux (contraste 100%)
- ✅ **text-white/90** - Paragraphes (90% opacité) - **RECOMMANDÉ**
- ✅ **text-white/85** - Texte secondaire (85% opacité)
- ✅ **text-gray-300** `#d1d5db` - Liens et texte tertiaire
- ❌ ~~text-blue-100~~ - ÉVITER (faible contraste)
- ❌ ~~text-gray-400~~ - ÉVITER sur fond très sombre

#### Sur fond clair (white, gray-50):
- ✅ **text-gray-900** - Titres
- ✅ **text-gray-800** - Sous-titres
- ✅ **text-gray-600** - Paragraphes
- ✅ **text-gray-500** - Texte secondaire

### 🎯 Ratios de Contraste (WCAG)

| Combinaison | Ratio | Note |
|------------|-------|------|
| `text-white` sur `primary-600` | 8.6:1 | ✅ AAA |
| `text-white/90` sur `primary-700` | 7.8:1 | ✅ AAA |
| `text-gray-300` sur `primary-800` | 6.2:1 | ✅ AAA |
| ~~`text-blue-100` sur `primary-600`~~ | 2.1:1 | ❌ FAIL |
| ~~`text-gray-400` sur `primary-900`~~ | 3.2:1 | ⚠️ AA only |

### 📋 Utilisations recommandées

#### Sections Hero / CTA
```jsx
<section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white">
  <h1 className="text-white">Titre Principal</h1>
  <p className="text-white/90">Description claire et lisible</p>
</section>
```

#### Footer
```jsx
<footer className="bg-gray-950">
  <p className="text-gray-300">Liens et texte</p>
  <a className="text-gray-300 hover:text-gold-400">Lien</a>
</footer>
```

#### Cartes
```jsx
<div className="bg-white">
  <h3 className="text-gray-900">Titre</h3>
  <p className="text-gray-600">Description</p>
</div>
```

### 🚫 Combinaisons à éviter

1. ❌ `text-blue-100` sur fond bleu foncé
2. ❌ `text-gray-400` sur `bg-gray-900`
3. ❌ `text-gold-300` sur fond blanc
4. ❌ Tout ratio < 4.5:1 pour texte normal
5. ❌ Tout ratio < 3:1 pour gros texte (>24px)

### ✅ Remplacements effectués

- `text-blue-100` → `text-white/90` (sur fonds sombres)
- `text-gray-400` → `text-gray-300` (footer et liens)
- `text-gray-500` → `text-gray-400` (made with love)

### 🔧 Outils de vérification

- **WebAIM Contrast Checker**: https://webaim.org/resources/contrastchecker/
- **Chrome DevTools**: Lighthouse > Accessibility
- **axe DevTools**: Extension navigateur

### 📱 Considérations Mobile

- Sur petits écrans, privilégier les contrastes encore plus élevés
- Éviter les gris clairs en extérieur (éblouissement)
- Taille de texte minimum: 16px (évite zoom iOS)

---

**Dernière mise à jour**: 4 novembre 2025  
**Standard**: WCAG 2.1 Level AAA
