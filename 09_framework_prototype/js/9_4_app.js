document.addEventListener('DOMContentLoaded', function() {

    // Handle an event in framework Prototype
    // The Event.observe() parametrs: an element, type of event, function
    Event.observe($("button"), "click", respondToEvent);

    function respondToEvent(e) {
        alert("Event: " + e);
        alert("Element, na którym wywołano zdarzenie: " + e.element());
        alert("Zdarzenie zostalo wywołane lewym klawiszem myszy: " + e.isLeftClick());
    }

    // The 'click' event for document
    Event.observe(document, "click", respondToEventD);

    function respondToEventD(e) {
        // The pointerX() and pointerY() methods return coordinates x and y
        alert("x = " + e.pointerX() + ", y = " + e.pointerY());
    }
});
