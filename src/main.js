import { createGameConfig, DIFFICULTY_LEVELS } from "./game/gameConfig.js";
import { isGameWon } from "./game/gameLogic.js";
import { gameState } from "./game/gameState.js";
import { renderBoard } from "./ui/boardUI.js";
import { renderStats } from "./ui/statsUI.js";
import { renderDifficultyMenu } from "./ui/difficultyUI.js";

const root = document.querySelector("#app");

let state = null;
let currentGameConfig = null;

// ===== INITIALISATION =====
showMenu();

// ===== AFFICHER LE MENU =====
function showMenu() {
  root.innerHTML = renderDifficultyMenu();
  attachMenuListeners();
}

// ===== DÉMARRER UNE PARTIE =====
function startGame(difficulty) {
  currentGameConfig = createGameConfig(
    DIFFICULTY_LEVELS[difficulty].PAIRS_COUNT
  );
  state = gameState(currentGameConfig);
  rerender();
}

// ===== RÉAFFICHER LE JEU =====
function rerender() {
  root.innerHTML = renderStats(state) + renderBoard(state);

  // Vérifier si le jeu est gagné
  if (isGameWon(state)) {
    root.innerHTML += `
      <div style="text-align:center; margin-top:30px;">
        <h2>🎉 Partie gagnée !</h2>
        <p>Coups: ${state.movesCount}</p>
        <button id="restart-btn" class="btn btn-primary">Rejouer</button>
        <button id="menu-btn" class="btn btn-secondary">Menu</button>
      </div>
    `;

    document
      .getElementById("restart-btn")
      .addEventListener("click", restartGame);
    document.getElementById("menu-btn").addEventListener("click", showMenu);
  }

  attachCardListeners();
}

// ===== REDÉMARRER LA PARTIE =====
function restartGame() {
  state = gameState(currentGameConfig);
  rerender();
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
      if (isGameWon(state)) return;

      const cardId = cardEl.getAttribute("data-id");
      const card = state.cards.find((c) => c.id === cardId);

      // Ignorer si déjà retournée ou appariée
      if (card.isFlipped || card.isMatched) return;

      // Démarrer le chronomètre
      if (!state.startTime) {
        state.startTime = Date.now();
      }

      // Retourner la carte
      card.isFlipped = true;
      state.flippedCards.push(card);

      // Si 2 cartes retournées
      if (state.flippedCards.length === 2) {
        state.movesCount++;
        const [c1, c2] = state.flippedCards;

        if (c1.value === c2.value) {
          // Paire trouvée
          c1.isMatched = true;
          c2.isMatched = true;
          state.flippedCards = [];
        } else {
          // Paire non trouvée - les retourner après 800ms
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
