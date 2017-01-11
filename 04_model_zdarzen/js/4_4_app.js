document.addEventListener("DOMContentLoaded", function() {
    var img = document.getElementById("image");

    img.addEventListener("click", function(event) {
        // The altKey property returns true when the alt key is down, otherwise it returns false.
        var altKeyIsDown = event.altKey;
        // The ctrlKey property returns true when the ctrl key is down, otherwise it returns false.
        var ctrlKeyIsDown = event.ctrlKey;
        // The button property returns the button of mouse (number of button) which is clicked.
        var mouseButton = event.button;
        // The clientX property returns a distance from the left edge of window.
        var x = event.clientX;
        // The clientX property returns a distance from the top edge of window.
        var y = event.clientY;
        // The clientX property returns a distance from the left edge of screen.
        var x1 = event.screenX;
        // The clientX property returns a distance from the top edge of screen.
        var y1 = event.screenY;

        alert("Wciśnięty przycisk alt: " + altKeyIsDown + ". Wciśnięty przycisk ctrl: " + ctrlKeyIsDown);
        alert("Zdarzenie wywołane przez przycisk myszy nr: " + mouseButton);
        alert("Odległość od lewej krawędzi okna: " + x + ". Odległość od lewej krawędzi ekranu: " + x1);
        alert("Odległość od górnej krawędzi okna: " + y  + ". Odległość od górnej krawędzi ekranu: " + y1);
    });
});
