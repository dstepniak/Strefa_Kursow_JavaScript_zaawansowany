document.addEventListener('DOMContentLoaded', function() {
    // Getting element by id - $("id_name")
    var btn = $("button");

    btn.addEventListener("click", function() {
        // Getting elements by tag name - $$("tag_name")
        // The toggleClass() method toggle specified class names
        $$("p").toggleClass("alert alert-warning");

        // Getting element by id - $("id_name")
        $("par").toggleClass("alert alert-info");

        // Getting elements by class name - $$(".class_name")
        $$(".info").toggleClass("alert alert-success");
    });
});
