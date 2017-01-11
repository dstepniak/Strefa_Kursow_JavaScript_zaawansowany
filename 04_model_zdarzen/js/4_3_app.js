document.addEventListener("DOMContentLoaded", function() {
    var img = document.getElementById("image");
    var div = document.getElementById("content");

    img.addEventListener("click", function(event) {
        // The stopPropagation() method prevents propagation of event to elements located higher in hierarchy.
        event.stopPropagation();
        alert("img");
    });

    div.addEventListener("click", function(event) {
        // The stopPropagation() method prevents propagation of event to elements located higher in hierarchy.
        event.stopPropagation();
        alert("div");
    });

    window.addEventListener("click", function(event) {
        alert("window");
    });
});
