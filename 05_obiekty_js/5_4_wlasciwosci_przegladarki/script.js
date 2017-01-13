window.addEventListener('load',function() {

	// Variable storing the 'open' button
	var bopen = document.getElementById('open');

	bopen.addEventListener('click',function() {
		// Properties of object navigator
		// appCodeName - name of browser application
		var appCodeName = navigator.appCodeName;
		// appVersion - version of browser application
		var appVersion = navigator.appVersion;
		// platform - platform for browser application
		var platform = navigator.platform;
		// cookieEnabled - informs whether cookie files are enabled
		var cookieEnabled = navigator.cookieEnabled;
		// userAgent - agent info: application name, version of application, platform, engine
		var info = navigator.userAgent;
		alert("Nazwa aplikacji: " + appCodeName);
		alert("Wersja przeglądarki: " + appVersion);
		alert("Platforma przeglądarki: " + platform);
		alert("Włączona obsługa plików cookie: " + cookieEnabled);
		alert("Dane przeglądarki: " + info);
	});

});
