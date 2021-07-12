const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
}

const DIG_TABLE = {
    11: '-',
    10: '.',
}

const LETTER_BASE = 10;
const MORSE_CODE_BASE = 2;

function decode(exp) {
    const symbolAmount = exp.length / LETTER_BASE;

    let decodedMessages = [];

    for (let i = 0; i < symbolAmount; i++) {
        let decodetoLetter = '';
        let writedLetter = exp.slice(i * LETTER_BASE, (i + 1) * LETTER_BASE);
        decodetoLetter = getLetter(writedLetter);
        decodedMessages.push(decodetoLetter);
    }

    return decodedMessages.join('');
}

function getLetter(exp) {
    if (exp === '**********') return ' ';
        else {
        let codeLetter = [];

        for (let i = 0; i < LETTER_BASE / MORSE_CODE_BASE; i++) {
            let substr = exp.slice(i * MORSE_CODE_BASE, (i + 1) * MORSE_CODE_BASE);

            codeLetter.push(DIG_TABLE[substr]);
        }

        return MORSE_TABLE[codeLetter.join('')]; 
    }
}

module.exports = {
    decode,
}
