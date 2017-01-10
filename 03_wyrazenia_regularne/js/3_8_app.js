document.addEventListener("DOMContentLoaded", function() {
    // Event onclick for button with id="submit".
    document.getElementById("submit").addEventListener("click", function(e) {
        // The variable storing source text
        var sourceText = document.getElementById("source").innerText;
        // The variable storing regular expression - object RegExp
        // new RegExp("kurs") => /kurs/
        var expression = new RegExp("kurs");
        console.log(expression);
        // new RegExp("javascript", "i") => /javascript/i
        expression = new RegExp("javascript", "i");
        console.log(expression);
        // new RegExp("javascript", "i") => /javascript/ig
        expression = new RegExp("javascript", "gi");
        console.log(expression);
        // The variable storing result of property global for regular expression
        var isGlobal = expression.global;
        // The variable storing result of the test() method for object RegExp
        // The test() method searches a string for a pattern, and returns true or false, depending on the result.
        var result = expression.test(sourceText);
        // Setting the result as a text of message.
        document.getElementById("message").innerText = result;
        // Setting the variable isGlobal as a text of message.
        document.getElementById("message").innerText = isGlobal;
    });
});
