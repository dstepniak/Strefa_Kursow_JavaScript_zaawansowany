document.addEvent("DOMContentLoaded", function() {
    $("button").addEvent("click", function(e) {

        // String
        alert("Unikalny identyfikator: " + String.uniqueID());
        var str = "kurs JavaScript";
        var reg1 = "k";
        var reg2 = "w";
        alert("String zawiera literę k: " + str.test(reg1));
        alert("String zawiera literę w: " + str.test(reg2));
        str = "      kurs JavaScript        ";
        alert("String: " + str);
        alert("String bez dodatkowych spacji na początku i końcu: " + str.trim());


        // Number
        var str = "12";
        // Concatenation - result is a string
        alert("Wynik konkatenacji: " + str + 2);
        // Number.from(string) - converts string to number
        alert(Number.from(str) + 2);
        // Number.random() - returns a random value in specified range
        alert("Losowa liczba z zakresu od 1 do 100: " + Number.random(1,100));    // values between 1 and 100


        // Array
        var numbers = [3,4,5,2,1];
        // The contains() method checks if the array contains a specified element
        var test = numbers.contains(1);
        alert("Tablica zawiera 1: " + test);
        test = numbers.contains(7);
        alert("Tablica zawiera 7: " + test);
        // The getLast() method returns the last element of array
        test = numbers.getLast();
        alert("Ostatni element tablicy: " + test);
        // The getRandom() method returns a random element of array
        test = numbers.getRandom();
        alert("Losowy element tablicy: " + test);
    });
});
