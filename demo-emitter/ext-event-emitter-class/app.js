var Dialog = require("./dialog");

var dialog = new Dialog();

dialog.on("hello", function(data) {
    console.log("Xin chao!!", data);
});

dialog.sayHello("Chien");