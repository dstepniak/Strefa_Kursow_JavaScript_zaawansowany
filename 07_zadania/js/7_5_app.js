document.addEventListener('DOMContentLoaded', function() {
    var btn = document.getElementById('button');
    var list = document.getElementById('list');

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

        // doc is an XML document
        // doc.getElementsByTagName('product') - array of tags 'product'
        // doc.getElementsByTagName('product')[0].getElementsByTagName('name') - array of tags 'name' contained in the first 'procuct' element.
        // doc.getElementsByTagName('product')[0].getElementsByTagName('name')[0].childNodes[0].nodeValue - value of the first child node of the first 'name' tag of the first 'product' tag.

        var produsts = doc.getElementsByTagName('product');
        for (var i = 0; i < produsts.length; i++) {
            var pName = produsts[i].getElementsByTagName('name')[0].childNodes[0].nodeValue;
            // Creating list items
            // The createElement() method creates an Element Node with the specified name. After the element is created, it's necessary to use the element.appendChild() or element.insertBefore() method to insert it to the document.
            var li = document.createElement('li');
            // The createTextNode() method creates a Text Node with the specified text. After the Text Node is created, it's necessary to use the element.appendChild() or element.insertBefore() method to append it to an element.
            var textNode = document.createTextNode(pName);
            // Appending text to list the items
            li.appendChild(textNode);
            // Appending list items to the list
            list.appendChild(li);
        }
    });
});
