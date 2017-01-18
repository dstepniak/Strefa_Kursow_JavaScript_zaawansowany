document.addEventListener('DOMContentLoaded', function() {
    var btn = document.getElementById('button');
    var nameSpan = document.getElementById('product_name');

    btn.addEventListener('click', function() {
        // function creates and returns XMLHttpRequest object. The XMLHttpRequest object can be used to request data from a web server.
        function createObject() {
            return new XMLHttpRequest();
        }

        // variable storing the new XMLHttpRequest object
        var req = createObject();
        // The open(method, url, async) method specifies the type of request. Parameters: method - the type of request (GET or POST), url - the file location, async - true (asynchronous) or false (synchronous)
        req.open('GET', 'produkty.xml', false);
        // The send() method sends a request to the server (used for GET)
        req.send(null);
        // The responseXML property - the response data as an XML document
        var doc = req.responseXML;
        // Assigning text to span:
        // doc is an XML document
        nameSpan.innerText = doc;
        // doc.getElementsByTagName('product') - array of tags 'product'
        // doc.getElementsByTagName('product')[0].getElementsByTagName('name') - array of tags 'name' contained in the first 'procuct' element.
        // doc.getElementsByTagName('product')[0].getElementsByTagName('name')[0].childNodes[0].nodeValue - value of the first child node of the first 'name' tag of the first 'product' tag.
        // Name of the first product
        nameSpan.innerText = doc.getElementsByTagName('product')[0].getElementsByTagName('name')[0].childNodes[0].nodeValue;
        // Name of the second product
        nameSpan.innerText = doc.getElementsByTagName('product')[1].getElementsByTagName('name')[0].childNodes[0].nodeValue;
        // Link of the second product
        nameSpan.innerText = doc.getElementsByTagName('product')[1].getElementsByTagName('link')[0].childNodes[0].nodeValue;
    });
});
