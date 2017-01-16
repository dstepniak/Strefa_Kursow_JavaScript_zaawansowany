document.addEventListener('DOMContentLoaded', function() {
    var subBtn = document.getElementById('submit');
    var inputField = document.getElementById('input');

    subBtn.addEventListener('click', function() {
        // The try statement allows to define a block of code to be tested for errors while it is being executed.
        // The throw statement allows to create a custom error.
        // The catch statement allows to define a block of code to be executed, if an error occurs in the try block.
        // The finally statement lets to execute a block of code, after try and catch, regardless of the result.
        try {   // tests if executing of code is possible
            var inputValue = inputField.value;
            if (isNaN(inputValue)) {    // if the value of input is not a number throws an exeption
                throw "Wyjątek: Wartość nie jest liczbą";
            }
            if (!inputValue) {  // if the input is empty throws an exeption
                throw "Wyjątek: Wartość jest pusta";
            }
            if (inputValue.length > 4) {    // if the value of input is longer then 4 characters throws an exeption
                throw "Wyjątek: Wartość jest za długa";
            }
        } catch (e) {   // catches an exeption if it occures
            alert(e);
        } finally { // is executed in any case
            alert("Pozostała część programu");
        }
    });
});
