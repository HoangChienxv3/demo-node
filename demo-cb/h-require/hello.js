sayHello = function() {
    console.log("xin chao!!");
}

sayHello.prototype.getName = function() {
    console.log("oke");
}

module.exports = sayHello;