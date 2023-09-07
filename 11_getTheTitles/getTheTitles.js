const getTheTitles = function(book) {
let arr = [];
for (let i =0; i< book.length; i++){
    arr.push(book[i].title);
}
return arr;
};

// Do not edit below this line
module.exports = getTheTitles;
