const fibonacci = function(length) {
let curr = 0 ;
let next = 1;
for (let i = 0; i< length; i++){
next = curr + next;
next ++;
}
return next;
};

// Do not edit below this line
module.exports = fibonacci;
