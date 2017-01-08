document.addEventListener("DOMContentLoaded", function() {
    var requiredFieldsIds = ['email', 'url', 'phone'];
	var inputFields = document.getElementsByTagName('input');
	var message = document.getElementById('message');

    // Function checking if the field is required. It takes two arguments: array of required fields, the field. If the field is required, the function returns true, otherwise it returns false.
    function fieldIsRequired(requiredFieldsIds, theField) {
        for (var i = 0; i < requiredFieldsIds.length; i++) {
            var fieldId = theField.id;
            // If element of requiredFieldsIds array and field id are equal, function returns true
            if(requiredFieldsIds[i] == fieldId) {
                return true;
            }
        }
        return false;
    }

    // Event onsubmit for form. If the field is required and its value is empty string, appropriate message appears and default action of submit is prevented (the function returns false).
    document.contact_form.onsubmit = function(e){
		for (var i = 0; i < inputFields.length; i++) {
            var theField = inputFields[i];
            var fieldId = theField.id;
            if (fieldIsRequired(requiredFieldsIds, theField) && (theField.value == '')) {
                message.innerText = "Wymagane pole " + fieldId + " jest puste";
                return false;
            }
		}
		return true;
	}

});
