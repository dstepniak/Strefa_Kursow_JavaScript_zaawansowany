// window.onload = function(event) {
document.addEventListener("DOMContentLoaded", function(event) {
    // Funkction checking if field value is in the range from min length to max length. Under that circumstances it returns true, on the other way it returns false.
    function checkLength(field, min_l, max_l) {
        var userText = field.value.length;
        if (userText >= min_l && userText <= max_l) {
            return true;
        } else {
            document.getElementById("message").innerText = "Długość pola " + field.previousElementSibling.innerText + " musi wynosić od " + min_l + " do " + max_l;
            return false;
        }
    }
    // Event onclick for input submit. It invokes function checkLength for inputs username and password. If any of functions returns false, default action of submit is prevented.
    // document.getElementById("submit").onclick = function(e) {
    document.getElementById("submit").addEventListener("click", function(e) {
        if (!checkLength(document.getElementById("username"), 6, 12) ||
        !checkLength(document.getElementById("password"), 8, 20)) {
            e.preventDefault();
        };
    });
});
// }
