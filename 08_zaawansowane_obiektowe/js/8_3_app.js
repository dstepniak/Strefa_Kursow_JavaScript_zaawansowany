document.addEventListener('DOMContentLoaded', function() {
    var content = document.getElementById("content");

    // Constructor of Product
    function Product(name) {
        // If object isn't instance of Product it creates and returns instance of Product.
        if (!(this instanceof Product)) {
            return new Product(name);
        }
        this.name = name;
    }

    // An object created without operator new.
    var p1 = Product("Kurs JS");
    content.innerText = typeof p1;
    content.innerText = p1.name;
    content.innerText = p1 instanceof Product;
});
