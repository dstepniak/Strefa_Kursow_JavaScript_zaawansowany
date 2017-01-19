document.addEventListener('DOMContentLoaded', function() {
    /*
    var product = {};

    product.name = "Kurs JS";
    product.showInfo = function() {
        return.product.name;
    }
    alert(product.showInfo());
    */
    // An object literal is a comma-separated list of name-value pairs wrapped in curly braces.
    var product = {
        name: "Kurs JS",
        price: 67,
        showName: function() {
            return this.name;
        },
        showPrice: function() {
            return this.price;
        }
    }
    alert(product.showName());
});
