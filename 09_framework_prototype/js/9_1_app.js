document.addEventListener('DOMContentLoaded', function() {
    // Shortened form of getElementById() available from framework Prototype
    var btn = $("button");

    btn.addEventListener('click', function() {
        var p = $("par");
        // alert(p.innerHTML);
        // Methods of the Prototype framework:
        // The hide() method adds a style "display: none" to an element
        // p.hide();
        // The remove() method removes an element and returns it.
        alert(p.remove().innerHTML);
    });
});
