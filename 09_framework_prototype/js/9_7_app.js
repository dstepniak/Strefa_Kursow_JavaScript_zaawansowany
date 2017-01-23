Event.observe(document, "DOMContentLoaded", function() {
    // The Product class
    var Product = Class.create({
        // A constructor of class
        initialize : function(name) {
            this.name = name;
        },
        // A method of class
        showName : function() {
            return this.name;
        }
    });

    // The  class which inherits from Product
    var Soft = Class.create(Product, {

    });

    // An object of Soft class
    var s1 = new Soft('Windows 10');
    // Inheritance of properties and methods
    $('par').innerHTML += "The name property: " + s1.name + "<br>";
    $('par').innerHTML += "The showName() method: " + s1.showName() + "<br>";
    // The s1 object is instance of both classes Soft and Product
    $('par').innerHTML += "s1 is instance of Soft: " + (s1 instanceof Soft) + "<br>";
    $('par').innerHTML += "s1 is instance of Product: " + (s1 instanceof Product) + "<br>";
});
