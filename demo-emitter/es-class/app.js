'use strict';

class Person {
    constructor(fristName, lastName) {
        this.fristName = fristName;
        this.lastName = lastName;
    }

    sayHello() {
        console.log("Hello " + this.fristName + " " + this.lastName);
    }

}

var p = new Person("Hoa", "Mai");
p.sayHello();

var chien = new Person("Chien", "Hoang");
chien.sayHello();

console.log(p.__proto__);
console.log(chien.__proto__);