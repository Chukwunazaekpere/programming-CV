export const titleCase = (word) => {
    // console.log("\n\t word: ", word)
    let desiredString = "";
    if(typeof(word) === "string"){
        const trimmedWord = word.trim();
        // console.log("\n\t trimmedWord[0]: ", trimmedWord[0])
        if(trimmedWord[0]){
            let ww = trimmedWord[0].toUpperCase()
            let charIndex = 0;
            for(let char of trimmedWord.substring(1)){
                if(char === " "){
                    ww.concat(char, trimmedWord[charIndex+1].toUpperCase());
                    charIndex += 2;
                }else{
                    // console.log("\n\t desired-string ww: ", char, trimmedWord[charIndex], ww)
                    ww += char;
                    charIndex++;
                }
            };
            desiredString += ww;
        }
    };
    return desiredString
}