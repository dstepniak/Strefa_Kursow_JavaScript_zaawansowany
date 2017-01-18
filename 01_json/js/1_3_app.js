document.addEventListener('DOMContentLoaded', function() {
    // JSON objects are surrounded by curly braces {}. JSON objects consists of pairs key/value. Keys and values are separated by a colon. Each key/value pair is separated by a comma.
    // JSON data can be assign to an variable
    var data = {
        "name" : "Kurs JavaScript",
        "price" : 60,
        "category" : "Internet"
    };

    // Access a JSON data nad assign to inner text of paragraphs:
    // Access the JSON object values is similar to acces a JavaScript object. access the object values by using dot (.) notation: object_name.key or bracket ([]) notation: object_name["key"]
    document.getElementById("p_name").innerText = data.name;
    document.getElementById("p_name").innerText = data["name"];
    document.getElementById("p_price").innerText = data.price;
    document.getElementById("p_category").innerText = data.category;
});
