var obj = {
    name: "chien",
    sayHello: function(pram1, pram2) {
        console.log(`Hello ${this.name}`);
        console.log("Prams: ", pram1, pram2)
    }
}
obj.sayHello("xin chao", "2021");
obj.sayHello.call({
    name: "chien 2"
}, "xin chao", "2022");
obj.sayHello.apply({
    name: "chien 3"
}, ["xin chao", "2023"]);