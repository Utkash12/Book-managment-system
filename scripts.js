function onFormSubmit() {
  var formData = readFormData();
  insertNewRecord(formData);
  resetForm();
}

function readFormData() {
  var formData = {};
  formData["name"] = document.getElementById("name").value;
  formData["author"] = document.getElementById("author").value;
  formData["isbn"] = document.getElementById("isbn").value;
  formData["publisher"] = document.getElementById("publisher").value;
  formData["date"] = document.getElementById("date").value;
  formData["genre"] = document.getElementById("genre").value;
  return formData;
}

function insertNewRecord(data) {
  var table = document.getElementById("booklist").getElementsByTagName('tbody')[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.name;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.author;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.isbn;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.publisher;
  cell5 = newRow.insertCell(4);
  cell5.innerHTML = data.date;
  cell6 = newRow.insertCell(5);
  cell6.innerHTML = data.genre;
  cell7 = newRow.insertCell(6);
  cell7.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                    <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
    document.getElementById("publisher").value = "";
    document.getElementById("date").value = "";
    document.getElementById("genre").value = "";
}
 
