var content = document.getElementById('content');

/*
window.addEventListener('load', showProductInfo("Kurs JS", 56), false);

// The showProductInfo() function takes parameters and showes them in 'content' div. If the category parameter is omitted, function assigns a default value to the parameter.
function showProductInfo(name, price, category) {
    var n = name;
    var p = price;
    // if (category === undefined) {
    if (!category) {
        // Default value of omitted parameter category
        var c = "Bez kategorii";
    } else {
        var c = category;
    }
    content.innerText = n + " " + p + "zł " + c;
}
*/
window.addEventListener('load', showArguments("Kurs JS", 56, "Internet", 3, 2, 43, 5, 8, 89), false);

// The showArguments() function takes parameters and showes them in 'content' div. The function takes more parameters than declared (more than 0). These arguments can be reached using a built-in object called the arguments object. The argument object contains an array of the arguments.
function showArguments() {
    for (var i = 0; i < arguments.length; i++) {
        alert(arguments[i]);
    }
}
