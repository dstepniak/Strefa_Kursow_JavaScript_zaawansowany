document.addEventListener('DOMContentLoaded', function() {
    var numbers = [4,1,5,3,2,10,15,20];

    // By default, the sort() method sorts the values as strings in alphabetical and ascending order. If numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
    numbers.sort();

    // It's possible to change this incorrect result when sorting numbers by providing a "compare function". A function that defines an alternative sort order. The function should return a negative, zero, or positive value, depending on the arguments, like: function(a, b){return a-b}. When the sort() method compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.
    // Ascending (up) order - the sort() method should return a-b
    numbers.sort(function(a,b) {
        return a - b;
    });
    // Descending (down) order - the sort() method should return b-a
    numbers.sort(function(a,b) {
        return b - a;
    })

    alert(numbers);
});
