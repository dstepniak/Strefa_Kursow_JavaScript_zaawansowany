window.addEventListener('load', createTable, false);
function createTable() {
    // Variable storing div with id='content'
    var content = document.getElementById('content');

    // Creating elements of table
    // The createElement() method creates an Element Node with the specified name. After the element is created, it's necessary to use the element.appendChild() or element.insertBefore() method to insert it to the document.
    var table  = document.createElement('table');
    var tableBody = document.createElement('tbody');

    // Outer loop - Creating and appending rows
    for (var i = 1; i <= 5; i++) {
        var row = document.createElement('tr');

        // Inner loop - creating and appending cells
        for (var j = 1; j <= 7; j++) {
            var cell = document.createElement('td');
            // The createTextNode() method creates a Text Node with the specified text. After the Text Node is created, it's necessary to use the element.appendChild() or element.insertBefore() method to append it to an element.
            var cellContent = document.createTextNode('row: ' + i + ', column: ' + j);

            // Appending text to cells
            cell.appendChild(cellContent);
            // Appending cells to row
            row.appendChild(cell);
            cell.style.textAlign = "center";
        }

        // Appending rows to table body
        tableBody.appendChild(row);
    }

    // Appending table body to table
    table.appendChild(tableBody);
    // Appending table to div 'content'
    content.appendChild(table);
    // Setting classes to element table
    table.setAttribute('class', 'table table-bordered');
}
