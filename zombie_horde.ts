function battleHorde(zombies: string, humans: string): string {
  let zombiePowers: number[] = zombies.split("").map((ch) => parseInt(ch));
  let humanPowers: number[] = humans.split("").map((ch) => parseInt(ch));

  let finalExtra = zombiePowers.reduce((extra, power, index) => {
    let [zombieExtra, humanExtra] = extra;
    let humanPower = humanPowers[index] + humanExtra;
    let zombiePower = power + zombieExtra;
    if (zombiePower === humanPower) {
      return [0, 0];
    }
    if (zombiePower > humanPower) {
      return [zombiePower - humanPower, 0];
    }
    return [0, humanPower - zombiePower];
  }, [0, 0]);

  let [zombieExtra, humanExtra] = finalExtra;

  if (zombieExtra === humanExtra) {
    return "x";
  }

  return zombieExtra > humanExtra
    ? `${zombieExtra - humanExtra}z`
    : `${humanExtra - zombieExtra}h`;
}

// Testing
function assertEq(value: string, expected: string) {
  if (value !== expected) {
    console.error(`Assertion failed: ${value} != ${expected}`);
  } else {
    console.log(`Assertion success: ${value} == ${expected}`);
  }
}

assertEq(
  battleHorde("242", "334"),
  "2h"
);

assertEq(
  battleHorde("444", "282"),
  "x"
);
