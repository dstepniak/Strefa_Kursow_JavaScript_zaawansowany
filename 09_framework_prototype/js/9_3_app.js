document.addEventListener('DOMContentLoaded', function() {
    btn = $("button");
    btn.addEventListener('click', function() {
        /*
        // Arrays
        var numbers = [2,3,6,2,3];
        alert("Wielkość tablicy: " + numbers.size());
        numbers.each(function(n) {
            alert("element: " + n);
        });
        */
        // Strings
        var str = "kurs JS";
        var p = $("par");
        p.innerHTML += "string: " + str + "<br>";
        // The capitalize() method - capitalize string
        p.innerHTML += "capitalized string: " + str.capitalize() + "<br>";
        // The empty() method - check if the string is empty
        p.innerHTML += "string is empty: " + str.empty() + "<br>";
        // The startsWith() method - check if the string starts with specified character or sequence of characters. The method is case-sensitive
        p.innerHTML += "string starts with 'k': " + str.startsWith("k") + "<br>";
        p.innerHTML += "string starts with 'a': " + str.startsWith("a") + "<br>";
        p.innerHTML += "string starts with 'K': " + str.startsWith("K") + "<br>";
        // String wrapped with tag <i></i>
        str = "<i>kurs JS</i>";
        p.innerHTML += "italic string: " + str + "<br>";
        // The stripTags() method delete inner tags from string
        p.innerHTML += "stripped string: " + str.stripTags() + "<br>";
    });

});
