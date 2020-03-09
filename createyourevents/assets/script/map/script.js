ymaps.ready(init);
function init() {
    var inputSearch = new ymaps.control.SearchControl({
        options: {
            size: 'large',
            provider: 'yandex#search'            
        }
    }),
    myMap = new ymaps.Map('map', {
        zoom: 17,
        center: [53.90893459999999, 27.5227235],
        controls: [inputSearch]
    });
    document.getElementById('addressBtn').addEventListener('click',function(){
        const searchName = document.getElementById('eventSearch').value;
        const searchAddress = document.getElementById('addressInput').value;
        const searchItem = JSON.parse(localStorage.getItem(searchName + ',' + searchAddress));
        inputSearch.search(searchItem.city);
    });
}