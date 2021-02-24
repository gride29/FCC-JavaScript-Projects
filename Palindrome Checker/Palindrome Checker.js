function palindrome(str) {
    str = str.toLowerCase().replace(/[\W_]/g, "");
    
    let i = 0;
    let j = str.length - 1;
    
    while (i < j) {
        if (str.charAt(i) !== str.charAt(j)){
            return false;
        }
        i++;
        j--;
    }
    return true;
}

function palindromeResult() {
    var result = palindrome(document.getElementById("palindrome_input").value);
    if (result === true) {
        alert("Your text is a palindrome.")
    } else {
        alert("Your text is not a palindrome.")
    }
}

