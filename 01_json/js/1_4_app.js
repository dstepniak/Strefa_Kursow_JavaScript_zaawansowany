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

    // Access a JSON data nad assign to inner text of paragraphs
    // The first product - array element with index 0
    document.getElementById("p_name").innerText = data.products[0].name;
    document.getElementById("p_price").innerText = data.products[0].price;
    document.getElementById("p_category").innerText = data.products[0].category;
    // The second product - array element with index 1
    document.getElementById("p_name").innerText = data.products[1].name;
    document.getElementById("p_price").innerText = data.products[1].price;
    document.getElementById("p_category").innerText = data.products[1].category;
});
