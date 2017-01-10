document.addEventListener("DOMContentLoaded", function() {
    // Event onclick for button with id="submit".
    document.getElementById("submit").addEventListener("click", function() {
        // The variable storing source text
        var sourceText = document.getElementById("source").innerText;
        // The variable storing regular expression - object RegExp
        // new RegExp("[0-9]{2}-[0-9]{3}", "g") => /[0-9]{2}-[0-9]{3}/g
        var expression = new RegExp("[0-9]{2}-[0-9]{3}", "g");
        // The variable result storing single result of the exec() method
        var result;
        // The variable storing concatenation of all results
        var allResults = "";

        // The exec() method searches a string for a specified pattern, and returns the found text. If no match is found, it returns null.
        // The loop while - as long as the result of exec() isn't equal null the loop is executed
        while ((result = expression.exec(sourceText)) != null) {
            // The window alert shows the current result and the position of this result
            alert("Wynik: " + result[0] + " Pozycja: " + result.index);
            allResults += result[0] + ", ";
            console.log(result);
            console.log(result[0]);
            console.log(result.index);
            console.log(result.input);
        }
        // Setting concatenation of all results as a text of message.
        document.getElementById("message").innerText = "Wyniki: " + allResults;
    });
});
