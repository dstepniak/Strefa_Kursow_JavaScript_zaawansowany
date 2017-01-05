// window.onload = function(e) {
document.addEventListener("DOMContentLoaded", function(event) {

    var userField = document.getElementById("username");
    // Event onfocus for username field. When value of the input is an empty string, appropriate prompt appears in the field.
    userField.onfocus = function() {
        if (userField.value == "") {
            userField.value = "Od 6 do 12 znaków";
        }
    }
    // Event onblur for username field. If the value of the input remains unchanged, the prompt disappears from the field.
    userField.onblur = function() {
        if (userField.value == "Od 6 do 12 znaków") {
            userField.value = "";
        }
    }

});
// }
