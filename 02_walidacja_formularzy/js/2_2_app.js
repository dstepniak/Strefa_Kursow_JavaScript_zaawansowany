// window.onload = function(e) {
document.addEventListener("DOMContentLoaded", function(e) {

    // Event onchange for input user_url
    // document.getElementById("user_url").onchange = function(e) {
    document.getElementById("user_url").addEventListener("change", function(e) {
        // value of field user_url
        var theUrl = document.getElementById("user_url").value;

        // If theUrl doesn't start from "http://" or "https://", appropriate prompt appears in message paragraph
        if (theUrl.indexOf("http://") == 0 || theUrl.indexOf("https://") == 0) {
            document.getElementById("message").innerText = "";
        } else {
            document.getElementById("message").innerText = "URL musi zaczynać się od http:// lub https://";
        }
    };
});
// }
