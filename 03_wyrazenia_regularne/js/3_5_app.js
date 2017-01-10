document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("submit_form").onclick = function(e) {
        // The variable storing source text
        var sourceText = document.getElementById("source").innerText;
        // The variable storing regular expression - expression to change
        // single replacing
        var expression = /photoshop/;
        // global replacing
        expression = /photoshop/g;
        // The variable storing a new text
        var newText = "Photoshop";
        // The variable storing result of replacing - changed text
        var result = sourceText.replace(expression, newText);
        // Setting the changed text as a source.
        document.getElementById("source").innerText = result;
        return false;
    }
});
