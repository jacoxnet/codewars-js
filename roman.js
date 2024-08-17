class RomanNumerals {
    static values = {"M": 1000, "D": 500, "CD": 400, "C": 100, "XC": 90, "L": 50, 
                     "XL": 40, "X": 10, "IX": 9, "V": 5, "IV": 4, "I": 1};

    // Methods
    static toRoman(num) {
        let workingNum = num;
        let workingRnum = "";
        for (const [key, value] of Object.entries(RomanNumerals.values)) {
            while (workingNum >= value) {
                workingRnum = workingRnum + key;
                workingNum = workingNum - value;
            }
        }
        return workingRnum
    }

    static fromRoman(rnum) {
        let workingRnum = rnum.slice();
        let workingNum = 0;
        for ()
    // }
}

console.log(RomanNumerals.toRoman(50));
console.log(RomanNumerals.toRoman(150));
console.log(RomanNumerals.toRoman(1550));
console.log(RomanNumerals.toRoman(3450));
console.log(RomanNumerals.toRoman(506));
console.log(RomanNumerals.toRoman(540));