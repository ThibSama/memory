import { DIFFICULTY_LEVELS } from "../game/gameConfig.js";

export function renderDifficultyMenu() {
  const difficultyIcons = {
    easy: { icon: "🌱", color: "#28a745" },
    medium: { icon: "⚡", color: "#ffc107" },
    hard: { icon: "🔥", color: "#ff6b6b" },
    expert: { icon: "👑", color: "#9c27b0" },
  };

  return `
    <div class="home-container">
      <div class="home-content">
        <div class="home-header">
          <h1 class="home-title">🎮 Memory Game</h1>
          <p class="home-subtitle">Testez votre mémoire et trouvez tous les emojis</p>
        </div>

        <div class="difficulty-grid">
          ${Object.entries(DIFFICULTY_LEVELS)
            .map(
              ([key, { label }]) => `
            <div class="difficulty-card" data-level="${key}">
              <div class="difficulty-icon">${difficultyIcons[key].icon}</div>
              <div class="difficulty-info">
                <h3 class="difficulty-title">${label.split(" ")[0]}</h3>
                <p class="difficulty-desc">${label}</p>
              </div>
              <button class="difficulty-btn" data-level="${key}" 
                style="border-top: 3px solid ${difficultyIcons[key].color};">
                Jouer
              </button>
            </div>
          `
            )
            .join("")}
        </div>

        <div class="home-footer">
          <p class="home-info">⏱️ Gagnez en trouvant toutes les paires avant le temps limite</p>
        </div>
      </div>
    </div>
  `;
}
