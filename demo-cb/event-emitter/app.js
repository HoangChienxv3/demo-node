var Emitter = require("./emitter");

var emitter = new Emitter();

emitter.on("bad", function() {
    console.log("Mot mon nao do bi diem kem!!");
});

emitter.on("bad", function() {
    console.log("Đã có điểm kém, cần phát thông báo");
});

emitter.on("good", function() {
    console.log("Diem tot");
});

var scores = [10, 4];

for (var s of scores) {
    if (s < 5) {
        console.log("Diem thap", s);
        emitter.emit("bad");
    } else {
        emitter.emit("good");
    }
}