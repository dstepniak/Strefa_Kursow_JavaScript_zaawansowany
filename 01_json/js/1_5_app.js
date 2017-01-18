document.addEventListener('DOMContentLoaded', function() {
    // Values in JSON can be arrays.
    var data = {"products" : [
        {
            "name" : "Kurs PHP",
            "price" : 60,
            "category" : "Internet"
        },
        {
            "name" : "Kurs mySQL",
            "price" : 55,
            "category" : "Programowanie"
        }
    ]};

    // Access a JSON data nad output all products to unordered list
    var output = "<ul>";
    for (var i = 0; i < data.products.length; i++) {
        output += "<li>" + data.products[i].name + "</li>";
        output += "<li>" + data.products[i].price + "</li>";
        output += "<li>" + data.products[i].category + "</li>";
    }
    output += "</ul>";

    document.getElementById("content").innerHTML = output;
});
