function convertToRoman(num) {
    const lookupTable = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90, 
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };

    let answer = '';

    for (const key in lookupTable) {
        const numberValue = lookupTable[key];
        
        while (numberValue <= num) {
            num -= numberValue;
            answer += key;
        }
    }
    
    return answer;
}

function romanResult() {
    if(document.getElementById("roman_input").value.length == 0) {
        alert("Please enter a number.");
    } else {
        num = document.getElementById("roman_input").value;
        var result = convertToRoman(num);
        alert("Your result is: " + result);
    }                                                           
}