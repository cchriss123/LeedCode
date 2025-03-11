console.log(longestCommonPrefix(["flower","flow","flight"])); // "fl"
console.log(longestCommonPrefix(["dog","racecar","car"])); // ""
console.log(longestCommonPrefix(["cir","car"])); // "c"



function longestCommonPrefix(strings: string[]): string {

    let outputString = "";
    if (strings.length === 0) return outputString;

    let shortestStrLength = Number.MAX_SAFE_INTEGER;

    for (let s of strings){
        if (s.length < shortestStrLength){
            shortestStrLength = s.length;
        }
    }

    for (let i = 0; i < shortestStrLength; i++){

        let charToCheck = "";

        for (let s of strings){

            if(charToCheck === ""){
                charToCheck = s[i]
            }
            else if (charToCheck !== s[i]){
                return outputString;
            }            
        }
        outputString += charToCheck;

    }
    
    return outputString;
}


