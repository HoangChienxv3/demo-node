var firstFunction = function() {
    console.log("first!!");
}

var secondFunction = function() {
    setTimeout(firstFunction, 5000);
    console.log("i am second!!");
}

secondFunction();