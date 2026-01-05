export function renderStats(state) {
  const elapsed = state.startTime ? Math.floor((Date.now() - state.startTime) / 1000) : 0;
  
  return `
    <div class="stats">
      <p>Coups: <strong>${state.movesCount}</strong></p>
      <p>Temps: <strong>${elapsed}s</strong></p>
    </div>
  `;
}