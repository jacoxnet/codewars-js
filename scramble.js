const assert = require("assert");

function scramble(str1, str2) {
    const array1 = {};
    for (letter of str1) {
        if (array1[letter] == undefined) {
            array1[letter] = 1;
        } else {
            array1[letter] += 1;
        }
    }
    //console.log(array1);
    for (letter of str2) {
        if (array1[letter] == undefined || array1[letter] == 0) {
            return false;
        }
        array1[letter] -= 1;
    }
    return true;
}

// assert.strictEqual(scramble('rkqodlw',           'world'      ), true );
// assert.strictEqual(scramble('cedewaraaossoqqyt', 'codewars'   ), true );
// assert.strictEqual(scramble('katas',             'steak'      ), false);
// assert.strictEqual(scramble('scriptjavx',        'javascript' ), false);
// assert.strictEqual(scramble('scriptingjava',     'javascript' ), true );
// assert.strictEqual(scramble('scriptsjava',       'javascripts'), true );
// assert.strictEqual(scramble('javscripts',        'javascript' ), false);
// assert.strictEqual(scramble('jscripts',          'javascript' ), false);
// assert.strictEqual(scramble('aabbcamaomsccdd',   'commas'     ), true );
// assert.strictEqual(scramble('commas',            'commas'     ), true );
// assert.strictEqual(scramble('sammoc',            'commas'     ), true);

module.exports = {scramble}