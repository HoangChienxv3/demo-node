var person = {
    firtName: "",
    lastName: "",
    getFullName: function() {
        return this.firtName + " " + this.lastName;
    }
}

var hoa = Object.create(person);
hoa.firtName = "Hoa";
hoa.lastName = "Mai";

var yen = Object.create(person);
yen.firtName = "yen";
yen.lastName = "phuong";

console.log(hoa.getFullName());
console.log(yen.getFullName());