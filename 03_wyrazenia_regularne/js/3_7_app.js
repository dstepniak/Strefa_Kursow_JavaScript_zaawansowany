document.addEventListener("DOMContentLoaded", function() {
    // Event onclick for button with id="submit".
    document.getElementById("submit").addEventListener("click", function(e) {
        // The variable storing source text
        var sourceText = document.getElementById("source").innerText;
        // The variable storing regular expression - parameter for the split() method
        // the white space as a separator, global searching
        var expression = /\s/g;
        // The variable storing result of spliting - array of separated source text
        var result = sourceText.split(expression);
        // Setting the result as a text of message.
        document.getElementById("message").innerText = result;
        // Setting the specific element of the array result (the first) as a text of message.
        document.getElementById("message").innerText = result[0];
        // Setting the specific element of the array result (the last) as a text of message.
        document.getElementById("message").innerText = result[result.length-1];
    });
});
