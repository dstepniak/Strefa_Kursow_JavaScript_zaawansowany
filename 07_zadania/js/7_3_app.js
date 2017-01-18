document.addEventListener('DOMContentLoaded', function() {
    var btn = document.getElementById('button');

    btn.addEventListener('click', function() {
        // function creates and returns XMLHttpRequest object. The XMLHttpRequest object can be used to request data from a web server.
        function createObject() {
            return new XMLHttpRequest();
        }

        // variable storing the new XMLHttpRequest object
        var req = createObject();
        // The open(method, url, async) method specifies the type of request. Parameters: method - the type of request (GET or POST), url - the file location, async - true (asynchronous) or false (synchronous)
        req.open('GET', 'plik.txt', true);
        // The send() method sends a request to the server (used for GET)
        req.send(null);
        // The onreadystatechange event is triggered every time the readyState changes.
        req.onreadystatechange = function() {
            // The readyState property holds the status of the XMLHttpRequest. During a server request, the readyState changes from 0 to 4. When readyState is 4, the response is ready.
            if (req.readyState === 4) {
                alert(req.responseText);
            }
        }
    });
});
