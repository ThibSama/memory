import { gameConfig } from "./game/gameConfig.js";
import { flipCard, checkMatch, isGameWon } from "./game/gameLogic.js";
import { gameState } from "./game/gameState.js";
import { renderBoard } from "./ui/boardUI.js";
import { renderStats } from "./ui/statsUI.js";

// Création de l'état initial du jeu
let state = gameState(gameConfig);

const root = document.querySelector("#app");
root.innerHTML = renderStats(state) + renderBoard(state);

function rerender() {
  root.innerHTML = renderStats(state) + renderBoard(state);

  // Vérifier si le jeu est gagné
  if (isGameWon(state)) {
    root.innerHTML += `
      <div style="text-align:center; margin-top:30px;">
        <h2>🎉 Partie gagnée !</h2>
        <p>Coups: ${state.movesCount}</p>
        <button id="restart-btn" class="btn btn-primary">Rejouer</button>
      </div>
    `;

    document
      .getElementById("restart-btn")
      .addEventListener("click", restartGame);
  }

  attachEventListeners();
}

function restartGame() {
  state = gameState(gameConfig);
  rerender();
}

// Fonction pour gérer les clics sur les cartes
root.addEventListener("click", (e) => {
  const cardEl = e.target.closest(".card");
  if (!cardEl) return;

  const cardId = cardEl.dataset.id;
  const card = state.cards.find((c) => c.id === cardId);

  // Sécurité
  if (card.isFlipped || card.isMatched) return;

  // Démarrer le timer au premier clic
  if (!state.startTime) {
    state.startTime = Date.now();
  }

  // Retourner la carte
  card.isFlipped = true;
  state.flippedCards.push(card);

  // Vérifier si 2 cartes sont retournées
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
