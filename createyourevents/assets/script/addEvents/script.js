document.getElementById('add').addEventListener('click',function(){
    const titleForm = document.getElementById('eventTitle');
    titleForm.style.display = 'block';
    const tableEvents = document.getElementById('tableYou');
    tableEvents.style.display = 'none';
    const searchTable = document.getElementById('searchItem');
    searchTable.style.display = 'none';
    const error = document.getElementById('error');
    error.style.display = 'none';
});
document.getElementById('addForm').addEventListener('click',function(){
    const titleForm = document.getElementById('eventTitle');
    const eventName = document.getElementById('eventName').value;
    const nameForm = document.getElementById('nameForm');
    const formEvents = document.getElementById('formEvents');
    const searchTable = document.getElementById('searchItem');
    searchTable.style.display = 'none';
    nameForm.value = eventName;
    formEvents.style.display = 'block'
    titleForm.style.display = 'none';
});
document.getElementById('addBtn').addEventListener('click',function() {
    const nameForm = document.getElementById('nameForm').value;
    const city = document.getElementById('city').value;
    const date = document.getElementById('date').value;
    const places = document.getElementById('places').value;
    const formEvents = document.getElementById('formEvents');
    let eventObj = {nameForm,city,date,places}
    const searchTable = document.getElementById('searchItem');
    searchTable.style.display = 'none';
    localStorage.setItem(nameForm + ',' + city,JSON.stringify(eventObj));
    formEvents.style.display = 'none';
});
document.getElementById('yourEventBtn').addEventListener('click',function(){
    const nameForm = document.getElementById('nameForm').value;
    const city = document.getElementById('city').value;
    const date = document.getElementById('date').value;
    const places = document.getElementById('places').value;
    let tbl = document.getElementById('tableYou');
    const titleForm = document.getElementById('eventTitle');
    const searchTable = document.getElementById('searchItem');
    searchTable.style.display = 'none';
    titleForm.style.display = 'none';

    let tr = document.createElement('tr');
        tbl.appendChild(tr);
    if (!nameForm) {
        return false
    } else {
        var thName = document.createElement('th');
        thName.innerHTML = nameForm;
        tr.appendChild(thName);
    }

    let thCity = document.createElement('th');
        thCity.innerText = city;
        tr.appendChild(thCity);

    let thDate = document.createElement('th');
        thDate.innerText = date;
        tr.appendChild(thDate);

    let thPlace = document.createElement('th');
        thPlace.innerText = places;
        tr.appendChild(thPlace);

    let deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'x';
        deleteBtn.className = 'deleteBtn';
        tr.appendChild(deleteBtn);

    tbl.style.display = 'block';

    deleteBtn.addEventListener('click',function(){
        tr.style.display = 'none';
        localStorage.removeItem(thName.innerText + ',' + thCity.innerText);
    });
    document.getElementById('canselTable').addEventListener('click',function(){
        tbl.style.display = 'none';
    });
});