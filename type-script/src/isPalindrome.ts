
console.log(isPalindrome(121)); // true
console.log(isPalindrome(-121)); // false
console.log(isPalindrome(10)); // false


function isPalindrome(x: number): boolean {

    const numberAsString = x.toString();

    let j = numberAsString.length -1;
    for (let i = 0; i < numberAsString.length; i++){

        if (numberAsString[i] !== numberAsString[j]){
            return false;
        }
        j--;
    } 
    return true;
}


// function isPalindrome(x: number): boolean {

//     return x.toString() === x.toString().split("").reverse().join("");
// };