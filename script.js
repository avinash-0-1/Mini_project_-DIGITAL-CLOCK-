const cl = document.querySelector('.clock');


setInterval(function(){
    let d = new Date();
    cl.innerHTML= d.toLocaleTimeString();
}, 1000);