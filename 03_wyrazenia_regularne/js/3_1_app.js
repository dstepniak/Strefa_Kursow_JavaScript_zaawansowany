document.addEventListener("DOMContentLoaded", function(e) {
    // Event onclick for input with id="submit_form". Anonymous function searches a string (value of input) and matches an expression (a pattern). An appropriate prompt appears in paragraph with id="message".
    document.getElementById("submit_form").onclick = function(e) {
        // The variable expression stores the pattern - the regular expression.
        var expression = /abc/;
        // The variable message
        var message = document.getElementById("message");
        // If the value of the input matches to the pattern, the prompt "true" appears in the paragraph message, otherwise the prompt "false" appears.
        // The match() method takes a regular expression as an argument.
        if (document.getElementById("field_value").value.match(expression)) {
            message.innerText = "true";
        } else {
            message.innerText = "false";
        }
        // In any case the default action of submit is prevented.
        return false;
    }
});
