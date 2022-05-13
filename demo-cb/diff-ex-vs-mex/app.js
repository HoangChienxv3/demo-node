var obj = {
    sayHello: "Hello"
}

console.log(obj.sayHello);
console.log(obj['sayHello']);

var prop = "sayHello";
console.log(obj[prop]);

var arr = [];
arr.push(function() {
    console.log("Hello node js 1");
});

arr.push(function() {
    console.log("Hello node js 2");
});

arr.push(function() {
    console.log("Hello node js 3");
});

arr[0]();
arr[1]();
arr[2]();

console.log("==========")

arr.forEach(function(item) {
    item();
});