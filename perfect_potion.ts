function createMagicPotion(potions: number[], target: number): [number, number] | undefined {
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

// Testing
function assertEq(values: number[] | undefined, expected: number[] | undefined) {
  let valuesRepr = values === undefined ? "undefined" : `[${values.join(", ")}]`;
  let expectedRepr = expected === undefined ? "undefined" : `[${expected.join(", ")}]`;
  if (expected === undefined || values === undefined) {
    if (expected !== values) {
      console.error(`Assertion failed: ${valuesRepr} != ${expectedRepr}`);
    } else {
      console.log(`Assertion success: ${valuesRepr} == ${expectedRepr}`);
    }
    return;
  }
  values.forEach((value, index) => {
    let expectedVal = expected[index];
    if (value !== expectedVal) {
      console.error(`Assertion failed: ${valuesRepr} != ${expectedRepr}`);
      return;
    }
  });
  console.log(`Assertion success: ${valuesRepr} == ${expectedRepr}`);
}

assertEq(
  createMagicPotion([4, 5, 6, 2], 8),
  [2, 3]
);

assertEq(
  createMagicPotion([1, 2, 3, 4], 9),
  undefined
);

assertEq(
  createMagicPotion([1, 2, 3, 4], 5),
  [1, 2]
);
