document.addEventListener('DOMContentLoaded', function() {
    // Shortened form of getElementById() available from framework Prototype
    var btn = $("button");

    btn.addEventListener('click', function() {
        var p = $("par");

        // Methods of the Prototype framework:
        /*
        // The addClassName() method adds new name of class to element
        p.addClassName("alert alert-info");

        var output = "<p>Nowy akapit</p>";
        // The replace() method replace an element into specified innerHTML
        p.replace(output);

        var content = $("content");
        // The childElements() method gets child elements of 'content' element and assign them to an array.
        var elements = content.childElements();

        elements.each(function(node) {
            alert(node.nodeName);
        });
        */

        // The insert() method inserts specified innerHTML to element p. By defalut this inserted element is situated at the end of p (inside p)
        p.insert("<hr>");
        // To change defautl position of inserted element it's necessary to apply following notation:
        p.insert({before: "<hr>"}); // location before p
        p.insert({after: "<hr>"});  // location after p
    });
});
