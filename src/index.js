const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(exp) {
    const symbolAmount = exp.length / letterBase

    let messageWasDecoded = []

    for (let i = 0; i < symbolAmount; i++) {
        let decodedLetter = ''
        let encryptedLetter = exp.slice(i * letterBase, (i + 1) * letterBase)
        decodedLetter = getLetter(encryptedLetter)
        messageWasDecoded.push(decodedLetter)
    }

    return messageWasDecoded.join('')
}

function getLetter(exp) {
    if (exp === '**********') {
        return ' '
    } else {
        let letterCode = []

        for (let i = 0; i < letterBase / MORSE_CODE_BASE; i++) {
            let substr = exp.slice(i * MORSE_CODE_BASE, (i + 1) * MORSE_CODE_BASE)

            letterCode.push(whatIsThink[substr])
        }

        return MORSE_TABLE[letterCode.join('')]
    }
}
const whatIsThink = {
    10: '.',
    11: '-',
}
module.exports = {
    decode
}