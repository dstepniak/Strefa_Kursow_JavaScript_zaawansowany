document.addEventListener("DOMContentLoaded", function() {
    // The variable storing element with id="button"
    var btn = document.getElementById("button");
    // The variable storing element with id="link"
    var lk = document.getElementById("link");

    // Event listener for button
    btn.addEventListener("click", function(event) {
        // The stopPropagation() method prevents propagation of event to other elements
        event.stopPropagation();
        // The variable storing an element which triggers the event (source of the event).
        var target = event.target;
        // The variable storing type of the event.
        var type = event.type;
        alert("Element wywołujący event: " + target);
        alert("Typ eventu: " + type);
    });

    // Event listener for link
    lk.addEventListener("click", function(event) {
        // The preventDefault() method prevents executing of default action. It can be applied to button, input submit, link etc.
        event.preventDefault();
        // The variable storing an element which triggers the event (source of the event).
        var target = event.target;
        // The variable storing current target of event
        var currentTarget = event.currentTarget;
        alert("Element wywołujący event: " + target);
        alert("Element, na którym wywołano event: " + currentTarget);
    });

    // Event listener for window
    window.addEventListener("click", function(event) {
        // The variable storing an element which triggers the event (source of the event).
        var target = event.target;
        // The variable storing current target of event
        var currentTarget = event.currentTarget;
        alert("Element wywołujący event: " + target);
        alert("Element, na którym wywołano event: " + currentTarget);
    });
});
