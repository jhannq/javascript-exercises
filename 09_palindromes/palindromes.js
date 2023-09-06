const palindromes = function (sentence) {
    // lower case the entire sentence
    sentence = sentence.toLowerCase();

    // removes spaces from the sentence
        sentence = sentence.replaceAll(" ", "");

    // removes ! from the sentence
        sentence = sentence.replace("!", "");

    // removes . from the sentence
        sentence = sentence.replace(".", "");
        
    // removes , from the sentence
    do {
        sentence = sentence.replace(",", "");
    } while (sentence.includes(","));

    let reverse = "";
    for (let i = sentence.length; i >=0; i--){
        reverse += sentence.charAt(i);
    }
    console.log("sentence: " + sentence);
    console.log("reverse: " + reverse);
    if (sentence === reverse) return true;
    else return false;
};


// Do not edit below this line
module.exports = palindromes;
