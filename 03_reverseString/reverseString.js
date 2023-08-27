const reverseString = function(text) {
    let message = "";
    for (i=text.length; i>0;i++){
        message += text.charAt(i);
    }
    return message;
};

// Do not edit below this line
module.exports = reverseString;
