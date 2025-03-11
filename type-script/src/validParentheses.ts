console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("]")); // false
console.log(isValid("[")); // false


function isValid(s: string): boolean {

    const stackOfOpenings = [];
    const mapOpeningToClose = { '(' : ')', '{' : '}', '[' : ']'};
 
    for (let char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stackOfOpenings.push(char);
        } 
        else {
            if (mapOpeningToClose[stackOfOpenings.pop()] !== char) {
                return false;
            }
        }
    }
    return stackOfOpenings.length === 0;
}