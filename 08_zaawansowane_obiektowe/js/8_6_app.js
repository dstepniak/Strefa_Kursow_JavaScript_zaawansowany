document.addEventListener('DOMContentLoaded', function() {
    var content = document.getElementById('content');

    function Product(name) {
        this.name = name;
    };
    var p1 = new Product("Kurs HTML");
    var p2 = new Product("Kurs JS");

    // Add a category property to the p1 object
    p1.category = "Internet";
    content.innerHTML = p1.name + "<br>";
    content.innerHTML += p1.category + "<br>";
    content.innerHTML += p2.name + "<br>";
    content.innerHTML += p2.category + "<br>"; // the category property is undefined for p2

    // Add the category property to an object prototype of Product, it means add the category property to each instance of Product.
    Product.prototype.category = "Internet";

    // Add a showName() method to the object prototype of Product, it means add the showName() method to each instance of Product.
    Product.prototype.showName = function() {
        return "Nazwa: " + this.name;
    }

    // Add a showCatetory() method to the object prototype of Product, it means add the showCatetory() method to each instance of Product.
    Product.prototype.showCatetory = function() {
        return "Kategoria: " + this.category;
    }

    // All properties defined for the Product prototype are available for each instance of Product.
    content.innerHTML += p1.showName() + "<br>";
    content.innerHTML += p1.showCatetory() + "<br>";
    content.innerHTML += p2.showName() + "<br>";
    content.innerHTML += p2.showCatetory() + "<br>";
});
