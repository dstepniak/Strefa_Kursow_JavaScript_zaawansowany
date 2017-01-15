window.addEventListener('load', addRow(4, 'Kurs JAVA'), false);

function addRow(id, name) {
    // Variable storing a table
    var table = document.getElementById('table');
    // The insertRow() method creates an empty <tr> element and adds it to a table. The insertRow() method inserts the new row(s) at the specified index in the table. A <tr> element must contain one or more <th> or <td> elements. A number that specifies the position of the row to insert (starts at 0). The value of 0 results in that the new row will be inserted at the first position. The value of -1 can also be used, this results in a new row being inserted at the last position.
    var newRow = table.insertRow(-1);

    // The insertCell() method inserts a cell into the current row.
    var idCell = newRow.insertCell(0);
    var nameCell = newRow.insertCell(1);

    // The createTextNode() method creates a Text Node with the specified text. After the Text Node is created, it's necessary to use the element.appendChild() or element.insertBefore() method to append it to an element.
    var idText = document.createTextNode(id);
    var nameText = document.createTextNode(name);

    // Appending text to cells
    idCell.appendChild(idText);
    nameCell.appendChild(nameText);
}
