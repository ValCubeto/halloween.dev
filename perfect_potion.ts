function createMagicPotion(potions: number[], target: number): [number, number] {
  let candidates: [number, number][] = [];
  potions.forEach((potion, currIndex) => {
    for (let i = currIndex + 1; i < potions.length; i += 1) {
      let otherPotion = potions[i];
      if (potion + otherPotion === target) {
        candidates.push([currIndex, i]);
      }
    }
  });
  if (candidates.length === 0) {
    return undefined;
  }
  if (candidates.length === 1) {
    return candidates[0];
  }
  let candIndex = 0;
  // encontrar dentro de los candidatos el par de índices cuyo segundo valor sea menor
  for (let i = 1; i < candidates.length; i += 1) {
    if (candidates[i][1] < candidates[candIndex][1]) {
      candIndex = i;
    }
  }
  return candidates[candIndex];
}
