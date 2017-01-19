document.addEventListener('DOMContentLoaded', function() {
    var content = document.getElementById("content");

    /*
    function showInfo(name) {
        return name
    };

    // A function in JS is onstance of Object
    content.innerText = showInfo instanceof Object;
    // Function is type of function
    content.innerText = typeof showInfo;
    // Assigning a function to inner text
    content.innerText = showInfo;
    // Calling a function
    content.innerText = showInfo("Kurs PHP");
    // Assigning a function to a variable
    var info = showInfo;
    // Calling a function assigned to the variable
    content.innerText = info("Kurs PHP");
    */

    // Assigning an object to variable
    var product = {};
    // Assigning a function to variable. Operator new is necessary to get an access to properties.
    var showInfo = new function() {};
    product.name = "Kurs JS";
    content.innerText = product.name;
    showInfo.name = "funkcja showInfo";
    content.innerText = showInfo.name;
    content.innerText = showInfo instanceof Object;
});
