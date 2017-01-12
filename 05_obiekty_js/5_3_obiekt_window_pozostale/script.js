window.addEventListener('load',function(){

	// Variable storing button 'open'
	var bopen = document.getElementById('open');

	bopen.addEventListener('click',function() {
		// The open() method opens a new window. Parameters of method (optional) separated with comma: URL, name, features, replace.
		var win = window.open('','nowe okno','height=300,width=300');

		// Modification of window size:
		// The resizeBy() method takes two parameters: deltaX, deltaY - relative change of size
		win.resizeBy(100,100);
		// The resizeTo() method takes two parameters: width, height - new size
		win.resizeTo(400,250);
		// The innerHeight and innerWidth properties - inner size without toolbars and scrollbars
		win.innerHeight = 100;
		win.innerWidth = 200;
		// The outerHeight and outerWidth properties - outer size including toolbars and scrollbars
		win.outerHeight = 250;
		win.outerWidth = 400;

		// Moving away a window:
		// The moveBy() method takes two parameters: deltaX, deltaY - relative movement
		win.moveBy(200,200);
		// The moveTo() method takes two parameters: x, y - new coordinates
		win.moveTo(200,200);

		// Closing a window:
		// The setTimeout() method takes two parameters: function and delay (in ms)
		// The close() method closes the window
		win.setTimeout(function(){this.close()},3000);
	});

});
