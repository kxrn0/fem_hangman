function randomJapaneseCharacter() {
    const ranges = [
        [0x3041, 0x3096], // Hiragana
        [0x30A0, 0x30FF], // Katakana
        [0x4E00, 0x9FFF]  // Kanji
    ];

    const [min, max] = ranges[~~(Math.random() * ranges.length)];

    const codePoint = ~~(Math.random() * (max - min + 1)) + min;

    return String.fromCodePoint(codePoint);
}
