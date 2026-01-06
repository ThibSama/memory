export function shuffle<T>(array: T[]): T[] {
  // Créer une copie pour ne pas modifier l'original
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));

    // Swap using temporary variable
    const temp = shuffled[i]!;
    shuffled[i] = shuffled[randomIndex]!;
    shuffled[randomIndex] = temp;
  }

  return shuffled;
}
