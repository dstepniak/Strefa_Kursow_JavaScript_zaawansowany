window.addEventListener('load', function() {
    // Variable storing the button
    var btn = document.getElementById('button3');

    btn.addEventListener('click', function() {
        // Properties and Methods of object history
        // The length property returns the number of URLs in the history list
        var length = history.length;
        alert('Długość historii: ' + length);

        // The back() method loads the previous URL in the history list. back() = history.go(-1)
        // var back = history.back();

        // The forward() method loads the next URL in the history list. forward() = history.go(1)
        // var forward = history.forward();

        // The go() method loads a specific URL from the history list
        var go = history.go(-2);
    });
});
