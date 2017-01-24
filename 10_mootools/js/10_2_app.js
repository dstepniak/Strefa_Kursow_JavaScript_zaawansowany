document.addEvent("DOMContentLoaded", function() {
    // Handle an event in framework MooTools
    // The addEvent() method handle an event.
    $("button").addEvent("click", function(e) {
        $("par").toggleClass("text-info");
        // Event target
        alert(e.target);
        // Checking if shift is down when the button is clicked
        alert("shift is down: " + e.shift);
        // Checking if ctrl is down when the button is clicked
        alert("ctrl is down: " + e.control);
    });
});
