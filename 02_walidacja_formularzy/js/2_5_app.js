document.addEventListener("DOMContentLoaded", function() {
    var pCodeField = document.getElementById("postal_code");
    var message = document.getElementById("message");
    pCodeField.onchange = function() {
        // Variable storing value of attribute pattern, this references to pCodeField
        var pattern = this.pattern;
        // Variable storing value of attribute placeholder, this references to pCodeField
        var placeholder = this.placeholder;
        // Variable storing boolean value, this references to pCodeField.
        // The search() method searches a string for a specified value, and returns the position of the match. The search value can be string or a regular expression. This method returns -1 if no match is found. If the value is matched the metchod returns value >= 0.
        var isValid = this.value.search(pattern) >= 0;

        // If entered value is valid, no message appears, otherwise appropriate message appears.
        if (isValid) {
            message.innerText = "";
        } else {
            message.innerText = "Wartość musi być zgodna ze wzorcem: " + placeholder;
        }
    }
});
