document.addEventListener('DOMContentLoaded', function() {
    var message = document.getElementById("message");
    var btn = document.getElementById("btn");

    // 1) This as a reference to object literal.
    var product = {
        "name": "Kurs PHP",
        "showName": function() {
            return this.name; // this refers to an object Object
        }
    }
    message.innerHTML += "1) " + product.showName() + "<br>";


    // 2) This as a reference to current instance of object.
    function Product(name) {
        this.name = name;
    }
    var p1 = new Product("Kurs JS");
    message.innerHTML += "2) " + p1.name + "<br>"; // This refers to an instance of Product, it means this refers to p1


    // 3) This as a reference to object Window
    function test() {
        return this;
    }
    message.innerHTML += "3) " + test() + "<br>";


    // 4) This as a reference to an element that triggered an event.
    btn.addEventListener('click', function() {
        message.innerHTML += "4) " + this + "<br>";
    });
});
