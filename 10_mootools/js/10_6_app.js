document.addEvent("DOMContentLoaded", function() {
    // Creating a cookie storing username "Strefakursow"
    // var c = Cookie.write("username", "Strefakursow");
    // Creating a cookie storing username "Strefakursow" with duration 7 days
    var c = Cookie.write("username", "Strefakursow", {duration: 7});

    $("button").addEvent("click", function() {
        // Reading a content of cookie
        var output = Cookie.read("username");
        alert(output);
    });

    $("remove").addEvent("click", function() {
        if(Cookie.read("username") == "Strefakursow") {
            // Deleting the cookie
            c.dispose();
        }
    });
});
