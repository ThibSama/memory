export function renderStats(state, gameConfig) {
  const elapsed = state.startTime
    ? Math.floor((Date.now() - state.startTime) / 1000)
    : 0;

  let timeDisplay = `Temps: <strong>${elapsed}s</strong>`;
  if (gameConfig?.TIME_LIMIT) {
    const remaining = Math.max(0, gameConfig.TIME_LIMIT - elapsed);
    timeDisplay = `Temps: <strong>${remaining}s</strong> / ${gameConfig.TIME_LIMIT}s`;
  }

  let movesDisplay = `Coups: <strong>${state.movesCount}</strong>`;
  if (gameConfig?.MOVE_LIMIT) {
    const remaining = Math.max(0, gameConfig.MOVE_LIMIT - state.movesCount);
    movesDisplay = `Coups: <strong>${remaining}</strong> / ${gameConfig.MOVE_LIMIT}`;
  }

  return `
    <div class="stats">
      <p>${movesDisplay}</p>
      <p>${timeDisplay}</p>
    </div>
  `;
}
