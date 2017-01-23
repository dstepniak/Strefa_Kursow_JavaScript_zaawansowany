Event.observe(document, "DOMContentLoaded", function() {

    Event.observe($('button'), 'click', doReqest);

    // Function sends an Ajax request at every click on button.
    function doReqest() {
        // New object of Ajax request
        new Ajax.Request('data.json', {
            method: 'get',
            onSuccess: successFn,
            onFailure: failureFn
        });
    }
    // Funcjon executed in case of success
    function successFn(response) {
        if (response.status == 200) {
            // Response as a string
            $("par").innerHTML = response.responseText;
            // Response as an object
            $("par").innerHTML += response.responseText.evalJSON(true);
        }
    }
    // Function executed in case of failure
    function failureFn(response) {
        $("par").innerHTML = "Błąd żądania";
    }

});
