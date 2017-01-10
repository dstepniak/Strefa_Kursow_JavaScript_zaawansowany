document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("submit_form").addEventListener("click", function(e) {
        // The variable storing source text
        var sourceText = document.getElementById("source").innerText;

        // The variable storing regular expression
        // Find position of the first whitespace character
        var expression = / /;
        // Find position of the first occurence of "kurs"
        expression = /kurs/;
        // Find position of the first occurence of "kurs", case-insensitive
        expression = /kurs/i;
        // Find position of the first occurence of "kurs", case-insensitive
        expression = /kurs/i;

        // The variable storing result of searching
        var result = sourceText.search(expression);
        // Conditional Statement: if result equals -1 (no match is found), the prompt "Nie znaleziono" appears, otherwise the position of the match is returned and an appropriate prompt appears.
        if (result == -1) {
            document.getElementById("message").innerText = "Nie znaleziono";
        } else {
            document.getElementById("message").innerText = "Znaleziono na pozycji: " + result;
        }
        e.preventDefault();
    });
});
