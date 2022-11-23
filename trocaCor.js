let dia = document.querySelector('.dia');
let noite = document.querySelector('.noite');
let body = document.querySelector('body');


noite.addEventListener('click', function(){
   body.style.backgroundColor = '#292C35';
   config.style.color = 'white';
   form1.style.color = 'white';
   form2.style.color = 'white';
   veterinarios.style.color = 'white';
   
   
});
dia.addEventListener('click', function(){
    body.style.backgroundColor = '#FFFFFF';
    config.style.color = 'black';
   form1.style.color = 'black';
   form2.style.color = 'black';
   veterinarios.style.color = 'black';
 });



