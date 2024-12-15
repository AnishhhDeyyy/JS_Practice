//  Immediately Invoked Function Expressions(IIFE)

(function chai(){
    console.log(`DB CONNECTED`);
    
})();


(function ofe() {
    let counter = 0;
    function increment(){
        counter++;
        console.log(counter);
        
    }
    increment();
})();

//Array Function using IIFE

((num1,num2) => {
    let t = num1 + num2;
    console.log(`DB CONNECTED TWO  ${t}`);
    
})(3,4);