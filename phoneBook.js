let phoneBook = [];


phoneBook.add = function(_name, _phone, _email)
{
    phoneBook.push({name: _name, phone: _phone, email: _email});
    if(_name === '' || _phone === '' || _email === '' )
        alert('Unable to add empty contact');
    else
    {
        phoneBook.showTable();
    }
}

let btnAdd = document.getElementById('btnAdd');
btnAdd.onclick = function ()
{
    let name = document.getElementById('inputName').value;
    let number = document.getElementById('inputNumber').value;
    let email = document.getElementById('inputEmail').value;
    phoneBook.add(name, number, email);
}

/*
phoneBook.find = function (searchItem)
{
    let foundI;
    for (let i = 0; i <= phoneBook.length; i++)
    {
        foundI = phoneBook.find(phoneBook => phoneBook.name[i] === searchItem ||
            phoneBook.phone[i] === searchItem ||
            phoneBook.email[i] === searchItem)
        console.log()
    }
}

let btnSearch = document.getElementById('btnSearch');
btnSearch.onclick = function ()
{
    let searchItem = document.getElementById('searchInput').value;
    phoneBook.find(searchItem);
}*/

phoneBook.remove = function(id) {
    document.getElementById(id).remove();
    phoneBook.splice(id, 1);
}

phoneBook.showTable = function () {
    let tbody = document.getElementsByTagName("TBODY")[0];
    while (tbody.firstChild)
        tbody.removeChild(tbody.firstChild)

    // cells creation
    for (let j = 0; j <= phoneBook.length; j++) {
        // table row creation
        let row = document.createElement("tr");
        row.id = j.toString();

        let cell = document.createElement("td");
        let cellText = document.createTextNode(phoneBook[j].name);
        let btnDelete = document.createElement("Button");
        btnDelete.className="btn btn-danger btn-sm btn-close";
        btnDelete.id = j.toString();
        btnDelete.type="button";

        cell.appendChild(cellText);
        row.appendChild(cell);

        cell = document.createElement("td");
        cellText = document.createTextNode(phoneBook[j].phone)

        cell.appendChild(cellText);
        row.appendChild(cell);

        cell = document.createElement("td");
        cellText = document.createTextNode(phoneBook[j].email)

        cell.appendChild(cellText);
        row.appendChild(cell);

        cell = document.createElement("td");

        cell.appendChild(btnDelete);
        row.appendChild(cell);
        //row added to end of table body
        tbody.appendChild(row);


        btnDelete.onclick = function (){
            phoneBook.remove(this.id);
            console.log(this.id);
            return this.id;
        }
    }

}
