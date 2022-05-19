function readDatabase(callback) {
    //read done
    var user = {
        name: "chien!!"
    }

    callback(user);
}


//yêu càu truy vấn dữ liệu
readDatabase(function(data) {
    console.log("Read done call back");
    console.log("Data: ", data);
});

readDatabase(function(data) {
    console.log("read done call back 2");
    console.log("user name: ", data.name);
})