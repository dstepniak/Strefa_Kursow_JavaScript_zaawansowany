window.addEventListener('load',function() {

	// Variable storing the button
	var btn = document.getElementById('button');

	btn.addEventListener('click',function() {
		// Properties of object location
		// href - returns the entire URL (of the current page)
		var href = location.href;
		// host - returns the name of the internet host (of the current page)
		var host = location.host;
		// pathname - returns the path name of the current URL (of the current page)
		var pathname = location.pathname;
		// protocol - returns the web protocol of the current URL (of the current page)
		var protocol = location.protocol;
		// search - sets or returns the querystring part of a URL, including the question mark (?). The querystring part is the part of the URL after the question mark (?).
		var search = location.search;

		alert("href: " + href);
		alert("host: " + host);
		alert("pathname: " + pathname);
		alert("protocol: " + protocol);
		alert("search: " + search);

		// Methods of object location
        // reload() - reloads the current document
		var reload = location.reload();
        // assign() - loads a new document. Required parameter: the URL of the page to navigate to.
		var assign = location.assign('http://strefakursow.pl');
        // replace() - replaces the current document with a new one. Required parameter: the URL of the page to navigate to. The replace() method removes the URL of the current document from the document history, meaning that it is not possible to use the "back" button to navigate back to the original document
		var replace = location.replace('http://strefakursow.pl');

	});

});
