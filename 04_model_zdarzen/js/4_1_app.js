document.addEventListener("DOMContentLoaded", function() {
    // The variable storing button with id="button".
    var btn = document.getElementById('button');
    // Event listener for button. It takes 3 parameters: type of event, listener - function, user capture (optional, usually false).
    btn.addEventListener('click', showAlert, false);

    function showAlert() {
        // Window alert
        alert("Kurs JS");
        // Removing Event Listener type 'click' for btn.
        btn.removeEventListener('click', showAlert, false);
    }
});
