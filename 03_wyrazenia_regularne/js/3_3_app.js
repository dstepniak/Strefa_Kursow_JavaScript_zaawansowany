document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("submit_form").addEventListener("click", function(e) {
        // The variable expression stores the pattern - the regular expression.
        // Find any lower-case leller between the brackets
        var expression = /[a-z]/;
        // Find any leller between the brackets, case-insensitive
        expression = /[a-zA-Z]/;
        // Find any character between the brackets (letter or digit)
        expression = /[a-zA-Z0-9]/;
        // Accept only characters between the brackets
        expression = /^[a-zA-Z0-9]+$/;
        // Accept only characters between the brackets and reqiured length is between 6 and 12
        expression = /^[a-zA-Z0-9]{6,12}$/;
        // Accept only numbers between the brackets and reqiured length is 4
        expression = /^[0-9]{4}$/;
        // Match the postal code pattern: two numbers, dash, three numbers
        expression = /^[0-9]{2}-[0-9]{3}$/;

        var theField = document.getElementById("field_value");
        var message = document.getElementById("message");
        if (theField.value.match(expression)) {
            message.innerText = "true";
        } else {
            message.innerText = "false";
        }
        e.preventDefault();
    });
});
