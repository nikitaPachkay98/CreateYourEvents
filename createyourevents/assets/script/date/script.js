setInterval(function () {  
    date = new Date(),  
    h = date.getHours(),  
    m = date.getMinutes(),  
    s = date.getSeconds(),  
    h = (h < 10) ? '0' + h : h,  
    m = (m < 10) ? '0' + m : m,   
    document.getElementById('time').innerHTML = h+1 + ':' + m;  
    }, 1000);   
    var d=new Date();
    var day=d.getDate();
    var month=d.getMonth() + 1;
    var year=d.getFullYear();
    document.getElementById('dateShow').innerHTML = day + "." + month + "." + year;