document.getElementById('search').addEventListener('click',function(){
    const searchTable = document.getElementById('searchItem');
    searchTable.style.display = 'block';
    const titleForm = document.getElementById('eventTitle');
    titleForm.style.display = 'none';
    const errorInput = document.getElementById('error');
    errorInput.style.display = 'none';
    const tableYou = document.getElementById('tableYou');
    tableYou.style.display = 'none';
    const formEvents = document.getElementById('formEvents');
    formEvents.style.display = 'none';
});
document.getElementById('searchBtn').addEventListener('click',function(){
    const searchName = document.getElementById('eventSearch').value;
    const searchAddress = document.getElementById('addressInput').value;
    const searchItem = JSON.parse(localStorage.getItem(searchName + ',' + searchAddress));
    const searchTable = document.getElementById('searchItem');
    const map = document.getElementById('map');
    const searchItemWindow = document.getElementById('searchItemWindow');
    const error = document.getElementById('error');
    const searchItems = document.getElementById('searchItem');

    if (searchItem) {
        let tbl = document.getElementById('searchTable');

        let tr = document.createElement('tr');
        tbl.appendChild(tr);

        let thName = document.createElement('th');
        thName.innerHTML = searchItem.nameForm;
        tr.appendChild(thName);

        let thAddress = document.createElement('th');
        thAddress.innerText = searchItem.city;
        tr.appendChild(thAddress);

        let thDate = document.createElement('th');
        thDate.innerText = searchItem.date;
        tr.appendChild(thDate);

        let thPlaces = document.createElement('th');
        thPlaces.innerText = searchItem.places;
        tr.appendChild(thPlaces);

        let deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'x';
        deleteBtn.className = 'deleteBtn';
        tr.appendChild(deleteBtn);
    
        searchItemWindow.style.display = 'block';
        tbl.style.display = 'block';
        thAddress.addEventListener('click',function() {
            map.style.display = 'block';
        });

        searchTable.style.display = 'none';

        deleteBtn.addEventListener('click',function(){
            tr.style.display = 'none';
        });

        document.getElementById('canselMapBackground').addEventListener('click',function(){
            searchItemWindow.style.display = 'none';
        });
        searchItems.style.display = 'none';
        error.style.display = 'none';
    }else {
        error.style.display = 'block';
        searchItems.style.display = 'none';
    }
});
