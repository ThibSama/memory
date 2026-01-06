# 🎮 Memory Game

Un jeu de Memory classique jouable directement dans le navigateur, construit en **TypeScript** avec une architecture modulaire et un typage strict.

## 📋 Description

Trouvez toutes les paires de cartes en retournant deux cartes à la fois. Les cartes qui correspondent restent visibles, les autres se retournent après 800ms.

## 🎯 Fonctionnalités

- ✅ **4 niveaux de difficulté** (Facile, Moyen, Difficile, Expert)
- ✅ Grille adaptative avec génération dynamique
- ✅ Compteur de coups et chronomètre
- ✅ Limites de temps et de coups selon la difficulté
- ✅ Détection automatique de victoire/défaite
- ✅ Interface responsive avec animations fluides
- ✅ Protection contre les clics rapides
- ✅ **TypeScript avec typage strict** (zéro `any`)
- ✅ Architecture modulaire et maintenable

## 🚀 Démarrage rapide

```bash
# 1. Compiler TypeScript en JavaScript
tsc

# 2. Servir avec un serveur local
python -m http.server 8000
# ou
npx http-server
```

Puis accédez à `http://localhost:8000`

**Mode watch (recompile automatiquement):**

```bash
tsc --watch
```

## 📐 Architecture

```
.
├── index.html
├── styles.css
├── readme.md
├── tsconfig.json
├── dist/                    # Code compilé (généré par tsc)
│   ├── main.js
│   ├── types.js
│   ├── game/
│   │   ├── gameConfig.js
│   │   ├── gameLogic.js
│   │   └── gameState.js
│   ├── ui/
│   │   ├── boardUI.js
│   │   ├── statsUI.js
│   │   ├── difficultyUI.js
│   │   └── modalUI.js
│   └── utils/
│       └── shuffle.js
└── src/                     # Source TypeScript
    ├── main.ts
    ├── types.ts             # Interfaces centralisées
    ├── game/
    │   ├── gameConfig.ts    # Configuration + niveaux
    │   ├── gameLogic.ts     # Vérification des paires
    │   └── gameState.ts     # État du jeu
    ├── ui/
    │   ├── boardUI.ts       # Rendu de la grille
    │   ├── statsUI.ts       # Affichage stats (temps/coups)
    │   ├── difficultyUI.ts  # Menu de difficulté
    │   └── modalUI.ts       # Modales victoire/défaite
    └── utils/
        └── shuffle.ts       # Mélange Fisher-Yates
```

## 🎮 Niveaux de difficulté

| Niveau    | Paires | Temps | Coups | Icône |
| --------- | ------ | ----- | ----- | ----- |
| Facile    | 6      | ∞     | ∞     | 🌱    |
| Moyen     | 10     | 120s  | ∞     | ⚡    |
| Difficile | 14     | 180s  | 40    | 🔥    |
| Expert    | 18     | 140s  | 50    | 👑    |

## 🔧 Technologies

- **TypeScript** - Typage strict et interfaces
- **ES2020 Modules** - Imports/exports natifs
- **Vanilla CSS** - Animations et responsive
- **Bootstrap 5** - Structure HTML (optionnel)

## 📝 Modèle de données

```javascript
// Carte
{
  id: "0",
  value: "🍕",
  isFlipped: false,
  isMatched: false
}

// État du jeu
{
  cards: [...],
  flippedCards: [],
  movesCount: 0,
  startTime: null
}
```

## 🚧 Phase 2 (TypeScript) ✅ TERMINÉE

Migration complète en TypeScript avec:

- ✅ Interfaces strictes pour tous les types
- ✅ Types génériques (ex: `shuffle<T>`)
- ✅ Compilation TypeScript vers `/dist`
- ✅ **Zéro `any`** - typage complet
- ✅ Support ES2020 modules au navigateur
- ✅ Source maps pour débogage
- ✅ Déclarations de types (.d.ts)

**Types centralisés dans `src/types.ts`:**

- `Card` - Structure d'une carte
- `GameStateType` - État du jeu
- `GameConfig` - Configuration de partie

## 📦 Fichiers clés

### Logique de jeu

- `src/game/gameConfig.ts` - Configuration, niveaux, emojis
- `src/game/gameLogic.ts` - Vérification des paires
- `src/game/gameState.ts` - Gestion de l'état du jeu
- `src/types.ts` - **Définitions de types centralisées**

### Interface utilisateur

- `src/ui/boardUI.ts` - Rendu de la grille
- `src/ui/statsUI.ts` - Affichage temps/coups
- `src/ui/difficultyUI.ts` - Menu de sélection
- `src/ui/modalUI.ts` - Modales victoire/défaite

### Utilitaires

- `src/utils/shuffle.ts` - Algorithme Fisher-Yates (générique)
