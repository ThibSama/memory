import { createGameConfig, DIFFICULTY_LEVELS } from "./game/gameConfig.js";
import { isGameWon } from "./game/gameLogic.js";
import { gameState } from "./game/gameState.js";
import { renderBoard } from "./ui/boardUI.js";
import { renderStats } from "./ui/statsUI.js";
import { renderDifficultyMenu } from "./ui/difficultyUI.js";
import { renderModal } from "./ui/modalUI.js";

const root = document.querySelector("#app");

let state = null;
let currentGameConfig = null;
let currentDifficulty = null;
let gameLoopInterval = null;

// ===== INITIALISATION =====
showMenu();

// ===== AFFICHER LE MENU =====
function showMenu() {
  root.innerHTML = renderDifficultyMenu();
  attachMenuListeners();
}

// ===== DÉMARRER UNE PARTIE =====
function startGame(difficulty) {
  currentDifficulty = difficulty;
  const level = DIFFICULTY_LEVELS[difficulty];
  currentGameConfig = createGameConfig(
    level.PAIRS_COUNT,
    level.timeLimit,
    level.moveLimit
  );
  state = gameState(currentGameConfig);
  rerender();

  // Démarrer la boucle de mise à jour (pour l'affichage du temps)
  if (gameLoopInterval) clearInterval(gameLoopInterval);
  gameLoopInterval = setInterval(() => {
    if (state.startTime) {
      rerender();
    }
  }, 1000);
}

// ===== VÉRIFIER LA DÉFAITE =====
function isGameLost(state) {
  if (!state.startTime) return false;

  // Vérifier le temps
  if (currentGameConfig.TIME_LIMIT) {
    const elapsed = Math.floor((Date.now() - state.startTime) / 1000);
    if (elapsed > currentGameConfig.TIME_LIMIT) return true;
  }

  // Vérifier les coups
  if (currentGameConfig.MOVE_LIMIT) {
    if (state.movesCount >= currentGameConfig.MOVE_LIMIT) return true;
  }

  return false;
}

// ===== RÉAFFICHER LE JEU =====
function rerender() {
  root.innerHTML = renderStats(state, currentGameConfig) + renderBoard(state);

  // Vérifier la défaite
  if (isGameLost(state)) {
    const elapsed = Math.floor((Date.now() - state.startTime) / 1000);
    root.innerHTML += renderModal({
      title: "💀 Défaite !",
      message: "Vous avez atteint les limites !",
      stats: `
        <div class="modal-stats">
          <div class="stat-item">
            <span class="stat-label">Coups:</span>
            <span class="stat-value">${state.movesCount}</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">Temps:</span>
            <span class="stat-value">${elapsed}s</span>
          </div>
        </div>
      `,
      buttons: [
        { id: "restart-btn", label: "Recommencer", style: "restart" },
        { id: "menu-btn", label: "Menu", style: "menu" },
      ],
    });

    clearInterval(gameLoopInterval);
    document
      .getElementById("restart-btn")
      .addEventListener("click", restartGame);
    document.getElementById("menu-btn").addEventListener("click", showMenu);
    return;
  }

  // Vérifier la victoire
  if (isGameWon(state)) {
    const elapsed = Math.floor((Date.now() - state.startTime) / 1000);
    root.innerHTML += renderModal({
      title: "🎉 Victoire !",
      message: "Vous avez trouvé toutes les paires !",
      stats: `
        <div class="modal-stats">
          <div class="stat-item">
            <span class="stat-label">Coups:</span>
            <span class="stat-value">${state.movesCount}</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">Temps:</span>
            <span class="stat-value">${elapsed}s</span>
          </div>
        </div>
      `,
      buttons: [
        { id: "restart-btn", label: "Rejouer", style: "restart" },
        { id: "menu-btn", label: "Menu", style: "menu" },
      ],
    });

    clearInterval(gameLoopInterval);
    document
      .getElementById("restart-btn")
      .addEventListener("click", restartGame);
    document.getElementById("menu-btn").addEventListener("click", showMenu);
    return;
  }

  attachCardListeners();
}

// ===== REDÉMARRER LA PARTIE =====
function restartGame() {
  startGame(currentDifficulty);
}

// ===== ÉCOUTEURS DU MENU =====
function attachMenuListeners() {
  const btns = document.querySelectorAll(".difficulty-btn");
  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const difficulty = e.target.getAttribute("data-level");
      startGame(difficulty);
    });
  });
}

// ===== ÉCOUTEURS DES CARTES =====
function attachCardListeners() {
  const cards = document.querySelectorAll(".card");
  cards.forEach((cardEl) => {
    cardEl.addEventListener("click", () => {
      if (isGameWon(state) || isGameLost(state)) return;

      const cardId = cardEl.getAttribute("data-id");
      const card = state.cards.find((c) => c.id === cardId);

      if (card.isFlipped || card.isMatched) return;

      if (!state.startTime) {
        state.startTime = Date.now();
      }

      card.isFlipped = true;
      state.flippedCards.push(card);

      if (state.flippedCards.length === 2) {
        state.movesCount++;
        const [c1, c2] = state.flippedCards;

        if (c1.value === c2.value) {
          c1.isMatched = true;
          c2.isMatched = true;
          state.flippedCards = [];
        } else {
          setTimeout(() => {
            c1.isFlipped = false;
            c2.isFlipped = false;
            state.flippedCards = [];
            rerender();
          }, 800);
        }
      }

      rerender();
    });
  });
}
