# Leila Pâtisserie - Vitrine Web d'Exception

Une application web moderne et élégante pour présenter les créations artisanales de Leila, pâtissière autodidacte d'exception.

## Description du Projet

Leila Pâtisserie est une vitrine web haut de gamme conçue pour mettre en valeur le savoir-faire et les créations uniques d'une pâtissière passionnée. L'application offre une expérience utilisateur fluide et immersive, avec des animations soignées et un design raffiné qui reflète la qualité des pâtisseries présentées.

### Fonctionnalités Principales

- **Navigation Fluide** : Menu responsive avec scroll smooth vers les différentes sections
- **Hero Section Immersive** : Grande image d'arrière-plan avec présentation de l'expertise
- **Galerie Interactive** : Carrousel élégant présentant deux catégories de créations
  - Entremets Signature
  - Number Cakes Créatifs
- **Section À Propos** : Présentation du parcours autodidacte et des valeurs
- **Formulaire de Devis** : Système de demande personnalisé avec validation
- **Footer Avec CTA** : Bouton d'appel proéminent vers le numéro de téléphone

## Stack Technologique

### Technologies Principales

- **[Vite](https://vitejs.dev/)** - Build tool ultra-rapide pour le développement moderne
- **[React 18](https://react.dev/)** - Bibliothèque JavaScript pour construire l'interface utilisateur
- **[TypeScript](https://www.typescriptlang.org/)** - Typage statique pour un code plus robuste
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utility-first pour un design personnalisé
- **[Framer Motion](https://www.framer.com/motion/)** - Bibliothèque d'animations fluides et performantes
- **[Lucide React](https://lucide.dev/)** - Icônes SVG élégantes et légères

### Outils de Développement

- **ESLint** - Linter pour maintenir un code de qualité
- **PostCSS** - Transformations CSS
- **Autoprefixer** - Préfixes CSS automatiques pour la compatibilité

## Design et Esthétique

### Palette de Couleurs

- **Crème** : Tons chaleureux (#FFFBF5 à #FFC97A)
- **Or Brossé** : Accents luxueux (#F5EFE0 à #B8860B)
- **Blanc Cassé** : Fond doux et élégant (#FAF9F6)

### Typographie

- **Playfair Display** (Serif) : Titres élégants et sophistiqués
- **Inter** (Sans-serif) : Texte corps lisible et moderne

### Principes de Design

- **Mobile First** : Optimisé d'abord pour mobile, puis desktop
- **Responsive** : S'adapte à toutes les tailles d'écran
- **Animations Subtiles** : Transitions fluides qui enrichissent l'expérience
- **Hiérarchie Visuelle** : Organisation claire de l'information
- **Espaces Respirants** : Utilisation généreuse des espaces blancs

## Installation

### Prérequis

- Node.js (version 18 ou supérieure)
- npm ou yarn

### Étapes d'Installation

1. **Cloner le projet** (si depuis un dépôt Git)
```bash
git clone [URL_DU_DEPOT]
cd leila-patisserie
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Lancer le serveur de développement**
```bash
npm run dev
```

4. **Ouvrir dans le navigateur**
```
http://localhost:5173
```

## Scripts Disponibles

```bash
# Démarrer le serveur de développement
npm run dev

# Créer la version de production
npm run build

# Prévisualiser la version de production
npm run preview

# Linter le code
npm run lint

# Vérifier les types TypeScript
npm run typecheck
```

## Structure des Composants

```
src/
├── components/
│   ├── Header.tsx       # En-tête avec navigation et logo
│   ├── Hero.tsx         # Section héroïque avec CTA principal
│   ├── Gallery.tsx      # Carrousel de photos des créations
│   ├── About.tsx        # Section à propos avec parcours
│   ├── QuoteForm.tsx    # Formulaire de demande de devis
│   └── Footer.tsx       # Pied de page avec contact et CTA
├── App.tsx              # Composant principal
├── main.tsx             # Point d'entrée de l'application
└── index.css            # Styles globaux et configuration Tailwind
```

### Description des Composants

#### Header
- Navigation sticky avec effet de transparence au scroll
- Menu hamburger responsive pour mobile
- Scroll smooth vers les sections
- Animation d'entrée fluide

#### Hero
- Image de fond haute qualité
- Titre accrocheur avec gradient de texte
- CTA principal vers le formulaire de devis
- Indicateur de scroll animé

#### Gallery
- Carrousel interactif avec transitions fluides
- Filtres par catégorie (Tous, Entremets, Number Cakes)
- Navigation par flèches et indicateurs
- Images de haute qualité depuis Unsplash
- Responsive avec adaptation mobile

#### About
- Layout deux colonnes (image + texte)
- Mise en avant des valeurs clés avec icônes
- Animations d'apparition au scroll
- Design équilibré et aéré

#### QuoteForm
- Formulaire complet avec validation
- Menu déroulant pour les types de prestation
- Feedback visuel lors de la soumission
- Design moderne et accessible
- Responsive avec adaptation mobile

#### Footer
- Informations de contact
- CTA proéminent avec numéro de téléphone
- Liens réseaux sociaux
- Copyright et branding

## Animations et Interactions

Grâce à Framer Motion, l'application propose :

- **Animations d'Entrée** : Les éléments apparaissent progressivement au chargement
- **Scroll Animations** : Déclenchement d'animations lors du défilement
- **Hover Effects** : Retours visuels sur les éléments interactifs
- **Transitions de Carrousel** : Changements fluides entre les images
- **Form Feedback** : Animation de confirmation après soumission

## Optimisations

### Performance

- Images optimisées et lazy loading
- Bundle splitting automatique avec Vite
- CSS purifié en production
- Composants React optimisés

### SEO

- Balises meta configurées
- Structure sémantique HTML5
- Titre et descriptions pertinents
- Images avec attributs alt

### Accessibilité

- Contraste de couleurs respecté (WCAG AA)
- Navigation au clavier
- Labels de formulaire appropriés
- Structure de titres hiérarchique

## Déploiement

### Build de Production

```bash
npm run build
```

Les fichiers optimisés seront générés dans le dossier `dist/`.

### Options de Déploiement

- **Vercel** : Déploiement automatique depuis Git
- **Netlify** : Drag & drop ou intégration Git
- **GitHub Pages** : Hébergement gratuit
- **Serveur classique** : Servir le contenu du dossier `dist/`

## Personnalisation

### Modifier les Couleurs

Éditer `tailwind.config.js` dans la section `theme.extend.colors`

### Changer les Polices

1. Modifier les liens Google Fonts dans `index.html`
2. Mettre à jour `tailwind.config.js` dans `theme.extend.fontFamily`

### Adapter le Contenu

- **Textes** : Directement dans les composants TSX
- **Images** : Remplacer les URLs Unsplash par vos propres images
- **Formulaire** : Configurer l'envoi vers votre backend ou service email

## Support et Contact

Pour toute question concernant le projet :

**Leila Pâtisserie**
- Téléphone : +33 6 01 64 13 74
- Email : contact@leilapatisserie.fr

## Licence

Tous droits réservés © 2026 Leila Pâtisserie

---

Développé avec passion pour mettre en valeur l'art de la pâtisserie artisanale.
