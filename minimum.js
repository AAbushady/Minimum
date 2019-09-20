// Write a function min that takes two argruements and returns their minimum.

(function () {
    var input1 = 6;
    var input2 = 89;
    
    function min (a, b) {
        return Math.min(a, b);
    }
    
    console.log(`I will now return the minimum of the two numbers!

The answer is ${min(input1, input2)}.`)
}());
