window.addEventListener('load', function(){

	// Variables storing html elements
	var bopen = document.getElementById('open');
	var bprint = document.getElementById('print');
	var bprompt = document.getElementById('prompt');
	var bconf = document.getElementById('confirm');

	bopen.addEventListener('click', function() {
		// The open() method opens a new window. Parameters are optional.
		// window.open(); - opens an empty window
		// with URL parameter - opens a new window in this location
		window.open('http://strefakursow.pl');
	});

	bprint.addEventListener('click', function() {
		// The print() method prints current window.
		window.print();
	});

	bprompt.addEventListener('click', function() {
		// The prompt() method displays a dialog box that prompts the visitor for input. It takes two parameters: the text to display in the dialog box (required), the default input text (optional). The prompt() method returns the input value if the user clicks "OK". If the user clicks "cancel" the method returns null.
		var output = window.prompt('Wprowadź wartość');
		alert('Wprowadzona wartość to: ' + output);
	});

	bconf.addEventListener('click', function () {
		// The confirm() method displays a dialog box with a specified message, along with an OK and a Cancel button.
		var output = window.confirm('Czy na pewno zamknąć okno?');
		alert('Odpowiedź to: ' + output);
	});

});
