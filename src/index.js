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

function decode(expr) {
    let arrOfWords = [];
    let result = [];
    for (let i = 0; i < expr.length;) {
        arrOfWords.push(expr.slice(i, i+10));
        i = i + 10;
    }
    // console.log(arrOfWords);
    arrOfWords.forEach(item => {
        let arrOfLetters = [];
        for (let i = 0; i < item.length;) {
            arrOfLetters.push(item.slice(i, i+2));
            i = i + 2;
        }
  
        let arrOfSimbols = [];
        arrOfLetters.forEach(letter => {
            if (letter === '00') {
            arrOfSimbols.push('');
            } else if (letter === '10') {
            arrOfSimbols.push('.');
            } else if (letter === '11') {
            arrOfSimbols.push('-');
            } else if (letter === '**') {
            arrOfSimbols.push('$');
            }
        });
        // console.log(arrOfSimbols);
        let letter = arrOfSimbols.join('');
        for (let key in MORSE_TABLE) {
            if (key === letter) {
            // console.log(MORSE_TABLE[key]);
            result.push(MORSE_TABLE[key]);
            } else if (letter === '$$$$$') {
            result.push(' ');
            break;
            }
        }
    });
    // console.log(result.join(''));
    let res = result.join('');
    return res;
}

module.exports = {
    decode
}