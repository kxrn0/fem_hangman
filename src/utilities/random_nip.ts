import random from "./random";

export default function random_nip() {
  const ranges = [
    [0x3041, 0x3096], // Hiragana
    [0x30a0, 0x30ff], // Katakana
    [0x4e00, 0x9fff], // Kanji
  ];
  const [min, max] = ranges[~~random(0, ranges.length)];
  const codePoint = ~~random(min, max);

  return String.fromCodePoint(codePoint);
}
