window.addEventListener('load', function(){

	// Properties of the window object:
	// screenX - distance between the left edge of the window and the screen (in pixels)
	var x = window.screenX;
	// screenY - distance between the top edge of the window and the screen (in pixels)
	var y = window.screenY;
	// outerWidth - outer width of window (including toolbars/scrollbars) (in pixels)
	var outerWidth = window.outerWidth;
	// outerHeight - outer height of window (including toolbars/scrollbars) (in pixels)
	var outerHeight = window.outerHeight;
	// innerWidth - inner width of window (without toolbars/scrollbars) (in pixels)
	var innerWidth = window.innerWidth;
	// innerHeight - inner height of window (without toolbars/scrollbars) (in pixels)
	var innerHeight = window.innerHeight;

	// name - name of the window. It's necessary to set the name.
	window.name = "Okno";
	var windowName = window.name;

	alert("Przesunięcie poziome okna względem ekranu: " + x);
	alert("Przesunięcie pionowe okna względem ekranu: " + y);
	alert("Zewnętrzna szerokość okna: " + outerWidth);
	alert("Wewnętrzna szerokość okna: " + innerWidth);
	alert("Zewnętrzna wysokość okna: " + outerHeight);
	alert("Wewnętrzna wysokość okna: " + innerHeight);
	alert("Nazwa okna: " + windowName);

});
