document.addEventListener('DOMContentLoaded', function() {
    var btn = document.getElementById('button');

    btn.addEventListener('click', function() {

        function createObject() {
            return new XMLHttpRequest();
        }

        var req = createObject();
        req.open('GET', 'plik.txt', false);
        req.send(null);
        // Properties and methods of XMLHttpRequest object:
        // responseText - the response data as a string
        alert(req.responseText);
        // status - 200: OK, 404: Page not found
        alert(req.starus);
        // statusText - text of status response: OK, Page not found
        alert(req.starusText);
        // getResponseHeader() - Returns the string containing the text of the specified header, or null if either the response has not yet been received or the header doesn't exist in the response. It takes one parameter: the header.
        // Header: Date - date and time of received response
        alert(req.getResponseHeader('Date'));
        // Header: ContentType - content type of received response
        alert(req.getResponseHeader('ContentType'));
        // getAllResponseHeaders() - Returns all the response headers, separated by CRLF, as a string, or null if no response has been received.
        alert(req.getAllResponseHeaders());
    });
});
