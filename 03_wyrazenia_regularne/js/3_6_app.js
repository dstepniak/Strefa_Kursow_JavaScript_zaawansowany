document.addEventListener("DOMContentLoaded", function() {
    // Event onclick for button with id="submit".
    document.getElementById("submit").addEventListener("click", function() {
        // The variable storing source text
        var sourceText = document.getElementById("source").innerText;
        // The variable storing regular expression - expression to match
        // single matching
        var expression = /[0-9]{2}-[0-9]{3}/;
        // global matching
        expression = /[0-9]{2}-[0-9]{3}/g;
        // The variable storing result of matching - matched expressions
        var result = sourceText.match(expression);
        // Setting the result of matching (array of matched expressions) as a text of message.
        document.getElementById("message").innerText = result;
        // Setting the specific result of matching (the third) as a text of message.
        document.getElementById("message").innerText = result[2];
        // Setting the length of array result as a text of message.
        document.getElementById("message").innerText = "Znaleziono " + result.length + " wyników.";
        // Setting the result of matching (array of matched expressions) as a text of message. The join() method joins the elements of an array into a string separated by the specified separator.
        document.getElementById("message").innerText = "Wyniki: " + result.join(", ");
    });
});
