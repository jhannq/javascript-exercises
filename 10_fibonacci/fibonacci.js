const fibonacci = function(length) {
    if (length < 0){
        return "OOPS";
    } else {
        let a = 0 ;
        let b = 1;
        let c = 0;
        for (let i = 0; i< length; i++){
            c = a+b;
            a =b;
            b= c;
        }
        return a;
        };
    }

// Do not edit below this line
module.exports = fibonacci;
