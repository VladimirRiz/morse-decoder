const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let letters = [],
    str = "";

  const arr = expr.match(/.{1,10}/g);
  for (let i of arr) {
    let num = [];
    if (i === "**********") {
      num.push("*");
    }
    let letter = i.match(/.{1,2}/g);
    for (let j = 0; j < letter.length; j++) {
      if (letter[j] === "10") {
        num.push(".");
      } else if (letter[j] === "11") {
        num.push("-");
      }
    }
    letters.push(num.join(""));
    num = [];
  }
  for (let y = 0; y < letters.length; y++) {
    if (letters[y] === "*") {
      str += " ";
    }
    for (let i in MORSE_TABLE) {
      if (letters[y] === i) {
        str += MORSE_TABLE[i];
      }
    }
  }

  return str;
}

module.exports = {
  decode,
};
