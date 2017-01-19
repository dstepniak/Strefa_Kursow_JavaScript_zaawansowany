document.addEventListener('DOMContentLoaded', function() {
    var content = document.getElementById("content");
    /*
    function showInfo(name, price, category) {
        var output = name + " " + price + "zł " + category;
        content.innerText = output;
    }
    showInfo("Kurs JS", 45, "Internet");
    */

    // A function can take object literal as parameter
    function showInfo(args) {
        // var output = args.name + " " + args.price + "zł " + args.category;
        var output = args.name; // required property
        if (args.price) { // optional property
            output += " " + args.price + "zł";
        }
        if (args.category) { // optional property
            output += " " + args.category;
        }
        content.innerText = output;
    }
    showInfo({
        "name": "Kurs JS" //,
        // "price": 45,
        // "category": "Internet"
    });
});
