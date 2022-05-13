function Person() {
    this.message = "Hello node 3";
    this.sayHello = function() {
        console.log(this.message);
    }
}

module.exports = new Person();