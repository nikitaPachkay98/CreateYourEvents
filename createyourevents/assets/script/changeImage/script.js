    function handleFileSelect(evt) {
    var files = evt.target.files;
    for (var i = 0, f; f = files[i]; i++) {

      if (!f.type.match('image.*')) { // возвращает получившиеся совпадения
        continue;
      } 
      var reader = new FileReader(); 
      reader.onload = (function(theFile) {
        return function(e) {
          var div = document.createElement('div');
          div.innerHTML = ['<img class="profileImage" src="', e.target.result,
                            '" title="', escape(theFile.name), '"/>'].join(''); // возвращает новую строку, в которой определенные символы заменены шестнадцаричной управляющей последовательностью
          document.getElementById('list').insertBefore(div, null);
        };
      })(f);

      reader.readAsDataURL(f); //Метод для чтения содержимого указанного в reader
    }
  }
  document.getElementById('files').addEventListener('change', handleFileSelect, false);