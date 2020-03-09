document.getElementById('optionBtn').addEventListener('click',function(){
    const modal = document.getElementById('modalBackground');
    const modalForm = document.getElementById('modalForm');
    modal.style.display = 'block';
    document.getElementById('canselModal').addEventListener('click',function(){
        modal.style.display = 'none';
    });
    modal.addEventListener('click', function(){
        modal.style.display = 'none';
    });
    modalForm.addEventListener('click',function(){
        event.stopPropagation();
    });
});
document.getElementById('colorHeaderBtn').addEventListener('click',function(){
    const headerInput = document.getElementById('colorHeader').value;
    const headerColor = document.getElementById('headerColor');
    if (!headerInput) {
        headerColor.style.backgroundColor = '#979784';
    } else {
        headerColor.style.backgroundColor = headerInput;
    }
});
document.getElementById('colorAttachmentBtn').addEventListener('click',function(){
    const sectionInput = document.getElementById('colorAttachment').value;
    const sectionColor = document.getElementById('sectionColor');
    if (!sectionInput) {
        sectionColor.style.backgroundColor = '#979784';
    } else {
        sectionColor.style.backgroundColor = sectionInput;
    }
});
document.getElementById('colorAccountInfoBtn').addEventListener('click',function(){
    const accountInput = document.getElementById('colorAccountInfo').value;
    const profileColor = document.getElementById('profileColor');
    if (!accountInput) {
        profileColor.style.backgroundColor = '#979784';
    } else {
        profileColor.style.backgroundColor = accountInput;
    }
});
document.getElementById('fullNameBtn').addEventListener('click',function(){
    const fullNameInput = document.getElementById('fullNameInput').value;
    const fullname = document.getElementById('name');
    const fullNameStorage = localStorage.getItem('fullName');
    if (!fullNameInput) {
        fullname.value = fullNameStorage;
    } else {
        fullname.value = fullNameInput;
    }
});
document.getElementById('yearsBtn').addEventListener('click',function(){
    const yearsInput = document.getElementById('yearsInput').value;
    const years = document.getElementById('years');
    const yearsStorage = localStorage.getItem('years');
    if (!yearsInput) {
        years.value = yearsStorage;
    } else {
        years.value = yearsInput;
    }
});
function information() {
    let name = document.getElementById('name');
    let years = document.getElementById('years');
    let nameStorage = localStorage.getItem('fullName');
    let yearsStorage = localStorage.getItem('years');
    name.value = nameStorage;
    years.value = yearsStorage;
}
information();