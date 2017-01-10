document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("submit_form").addEventListener("click", function(e) {
        // The variable expression stores the pattern - the regular expression.
        // Requred "p" at the begining of statement
        var expression = /^p/;
        // Requred "p" at the end of statement
        var expression = /p$/;
        // Requred at least zero occurrences of "p" at the statement
        var expression = /p*/;
        // Requred at least one occurrences of "p" at the statement
        var expression = /p+/;
        // Requred "p" at the begining of statement and at least one occurrences of "p" at the statement
        var expression = /^p+/;
        // Requred a sequence of at least two occurrences of "p" at the statement
        var expression = /p{2}/;
        // Requred "a" or "b" at the statement
        var expression = /a|b/;
        // Requred sequence "abc" at the statement but expression is case-insensitive (ABC, abc, Abc, ABc, AbC, aBc, aBC)
        var expression = /abc/i;

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
