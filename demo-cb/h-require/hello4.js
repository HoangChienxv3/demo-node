function Person() {
    this.message = "Hello node4";

    this.sayHello = function() {
        console.log(this.message);
    }
}

module.exports = Person;