import random from "./random";

export default function mix(str: string, size: number, rndc: () => string) {
  const mixed = [];
  const uniques = make_unique(str.split(""));

  for (const char of uniques) {
    let index;

    index = ~~random(0, size);
    while (mixed[index]) index = ~~random(0, size);
    mixed[index] = char;
  }

  for (let i = 0; i < size; i++) {
    if (mixed[i]) continue;

    let char: string;

    do {
      char = rndc();
    } while (mixed.some((other) => other === char));

    mixed[i] = char;
  }
  return mixed;
}
