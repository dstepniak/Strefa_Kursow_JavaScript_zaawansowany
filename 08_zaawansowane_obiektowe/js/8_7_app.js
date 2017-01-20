document.addEventListener('DOMContentLoaded', function() {
    var content = document.getElementById('content');

    // Constructor of A
    function A(name) {
        this.name = name;
    }

    // Assign a showName method to A prototype
    A.prototype.showName = function() {
        return "Nazwa: " + this.name;
    }

    // Assign a new A object to B prototype - inheritance
    B.prototype = new A();

    // Assign function B to constructor of B prototype
    B.prototype.constructor = B;

    // The B function - constructor of B
    function B(name) {
        this.name = name;
    }

    var a1 = new A("obiekt A");
    var b1 = new B("obiekt B");

    // a1 is an instance of A but is not an instance of B
    content.innerHTML += a1.name + "<br>";
    content.innerHTML += a1.showName() + "<br>";
    content.innerHTML += "a1 jest instancją A: " + (a1 instanceof A) + "<br>";
    content.innerHTML += "a1 jest instancją B: " + (a1 instanceof B) + "<br>";

    // B inherites the showName method from A
    // b1 is an instance of both B and A
    content.innerHTML += b1.name + "<br>";
    content.innerHTML += b1.showName() + "<br>";
    content.innerHTML += "b1 jest instancją B: " + (b1 instanceof B) + "<br>";
    content.innerHTML += "b1 jest instancją A: " + (b1 instanceof A) + "<br>";

});
