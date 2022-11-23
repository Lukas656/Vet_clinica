// Busca por categorias
let logo = document.querySelector('.logo');
let conteiner = document.querySelector('.conteiner');
let grid = document.querySelector('.grid');
let imgVet = document.querySelector('.imgVet');
let pets = document.querySelector('.pet');
let user = document.querySelector('.user');
let vet = document.querySelector('.vet');
let settings = document.querySelector('.settings');



let menu = document.getElementById('menu');
let busca = document.getElementById('divBusca');
let idGrid = document.getElementById('grid');
let idPets = document.getElementById('pets');
let idUser = document.getElementById('user');
let idVet = document.getElementById('vets');
let idSettings = document.getElementById('settings');
let logOut = document.getElementById('logout');

//  Evento de esconder e Mostrar o Menu (Sidebar)
menu.addEventListener('click', function() {
    if(logo.style.display == 'none'){
        logo.style.display = 'block';
        conteiner.style.width = '250px';
        conteiner.style.height = '100vh';
        busca.style.display = 'block';
        grid.style.marginTop = 'auto';
        idGrid.style.display = 'block';
        idPets.style.display = 'block';     
        idUser.style.display = 'block';     
        idVet.style.display = 'block';     
        idSettings.style.display = 'block';     
        imgVet.style.display = 'flex';     
        logOut.style.display = 'none';     

    
    }else{
        logo.style.display = 'none';
        conteiner.style.width = '100px';
        busca.style.display = 'none';
        idGrid.style.display = 'none';
        busca.style.position = 'initial';
        grid.style.marginTop = '5em';
        idPets.style.display = 'none';
        idUser.style.display = 'none';
        idVet.style.display = 'none';
        idSettings.style.display = 'none';
        imgVet.style.display = 'none';
        logOut.style.display = 'flex';
    };

});



// Chamando novas classes para popular o centro da página
const cards = document.querySelector('.cards');
const buttons = document.querySelector('.buttons');
let usuario = document.querySelector('.usuario');
let btn1 = document.getElementById('btn1');
let form1 = document.querySelector('.btn1');
let btn2  = document.getElementById('btn2');
let form2 = document.querySelector('.btn2');
let animais = document.querySelector('.animais1');
let veterinarios = document.querySelector('.sectionVet');
let config = document.querySelector('.config');
// Configuração de Tema Claro e Escuro 
let dia = document.querySelector('.dia');
let noite = document.querySelector('.noite');
let body = document.querySelector('body');
// Cards do Dashboad
let card = document.querySelector('.card');
let card2 = document.querySelector('.card2');
let card3 = document.querySelector('.card3');
let card4 = document.querySelector('.card4');
let mapa = document.querySelector('.mapa');

// Eventos Do menu Dashboad
grid.addEventListener('click', function(){
    cards.style.display = 'flex';
    buttons.style.display = 'none';
    form1.style.display = 'none';
    form2.style.display = 'none';
    animais.style.display = 'none';
    usuario.style.display = 'none';
    veterinarios.style.display = 'none';
    config.style.display = 'none';
    mapa.style.display = 'none';   
   
});
idGrid.addEventListener('click', function(){
    cards.style.display = 'flex';
    buttons.style.display = 'none';
    form1.style.display = 'none';
    form2.style.display = 'none';
    animais.style.display = 'none';
    usuario.style.display = 'none';
    veterinarios.style.display = 'none';
    config.style.display = 'none';
    mapa.style.display = 'none';   
   
})

// Eventos Do menu Pets
pets.addEventListener('click', function(){
    buttons.style.display = 'flex';
    cards.style.display = 'none';
    form1.style.display = 'none';
    form2.style.display = 'none';
    animais.style.display = 'block';
    usuario.style.display = 'none';
    veterinarios.style.display = 'none';
    config.style.display = 'none';
    mapa.style.display = 'none';   
   
});
idPets.addEventListener('click', function(){
    buttons.style.display = 'flex';
    cards.style.display = 'none';
    form1.style.display = 'none';
    form2.style.display = 'none';
    animais.style.display = 'block';
    usuario.style.display = 'none';
    veterinarios.style.display = 'none';
    config.style.display = 'none';
    mapa.style.display = 'none';   
   
});

// Eventos dos botoes


btn1.addEventListener('click', function(){
    form1.style.display = 'block';
    form2.style.display = 'none';
    animais.style.display = 'block';
    usuario.style.display = 'none';
    veterinarios.style.display = 'none';
    config.style.display = 'none';
    mapa.style.display = 'none';   
   
});
btn2.addEventListener('click', function(){
    form2.style.display = 'block';
    form1.style.display = 'none';
    animais.style.display = 'block';
    usuario.style.display = 'none';
    veterinarios.style.display = 'none';
    config.style.display = 'none';
    mapa.style.display = 'none';   
   
});

// Evento tela de Usuario

user.addEventListener('click', function(){
    usuario.style.display = 'block';
    buttons.style.display = 'none';
    cards.style.display = 'none';
    form2.style.display = 'none';
    form1.style.display = 'none';
    animais.style.display = 'none';
    veterinarios.style.display = 'none';
    config.style.display = 'none';
    mapa.style.display = 'none';   
   
});
idUser.addEventListener('click', function(){
    usuario.style.display = 'block';
    buttons.style.display = 'none';
    cards.style.display = 'none';
    form2.style.display = 'none';
    form1.style.display = 'none';
    animais.style.display = 'none';
    veterinarios.style.display = 'none';
    config.style.display = 'none';
    mapa.style.display = 'none';   
   
});

// Evento Vet

vet.addEventListener('click' , function(){
    veterinarios.style.display = 'flex';
    usuario.style.display = 'none';
    buttons.style.display = 'none';
    cards.style.display = 'none';
    form2.style.display = 'none';
    form1.style.display = 'none';
    animais.style.display = 'none';
    config.style.display = 'none';
    mapa.style.display = 'none';   
   
});
idVet.addEventListener('click' , function(){
    veterinarios.style.display = 'flex';
    usuario.style.display = 'none';
    buttons.style.display = 'none';
    cards.style.display = 'none';
    form2.style.display = 'none';
    form1.style.display = 'none';
    animais.style.display = 'none';
    config.style.display = 'none';
    mapa.style.display = 'none';   
   
});

// Evento Configurações

settings.addEventListener('click', function(){
    config.style.display = 'block';
    veterinarios.style.display = 'none';
    usuario.style.display = 'none';
    buttons.style.display = 'none';
    cards.style.display = 'none';
    form2.style.display = 'none';
    form1.style.display = 'none';
    animais.style.display = 'none';
    mapa.style.display = 'none';   
   
});

idSettings.addEventListener('click', function(){
    config.style.display = 'block';
    veterinarios.style.display = 'none';
    usuario.style.display = 'none';
    buttons.style.display = 'none';
    cards.style.display = 'none';
    form2.style.display = 'none';
    form1.style.display = 'none';
    animais.style.display = 'none';
    mapa.style.display = 'none';   
   
});


// Configuração de Tema Claro e Escuro 

noite.addEventListener('click', function(){
   body.style.backgroundColor = '#292C35';
   config.style.color = 'white';
   form1.style.color = 'white';
   form2.style.color = 'white';
   veterinarios.style.color = 'white';
   mapa.style.display = 'none';   
   
});
dia.addEventListener('click', function(){
    body.style.backgroundColor = '#FFFFFF';
    config.style.color = 'black';
   form1.style.color = 'black';
   form2.style.color = 'black';
   veterinarios.style.color = 'black';
   mapa.style.display = 'none';
 });

 
// Cards do Dashboad

card.addEventListener('click', function(){
    let modal = document.querySelector('.modal').style.display = 'flex';
    mapa.style.display = 'none';

 });
let btnModal = document.querySelector('.btn-modal');
btnModal.addEventListener('click', function(){
    let modal = document.querySelector('.modal').style.display = 'none';
    mapa.style.display = 'none';

 });

 card2.addEventListener('click', function(){
    form1.style.display = 'block';
    cards.style.display = 'none';
    form2.style.display = 'none';
    animais.style.display = 'block';
    usuario.style.display = 'none';
    veterinarios.style.display = 'none';
    config.style.display = 'none';
    mapa.style.display = 'none';   
    mapa.style.display = 'none';
 });
 card3.addEventListener('click', function(){
    mapa.style.display = 'block';
    
 });
 card4.addEventListener('click', function(){
    form2.style.display = 'block';
    cards.style.display = 'none';
    form1.style.display = 'none';
    animais.style.display = 'block';
    usuario.style.display = 'none';
    veterinarios.style.display = 'none';
    config.style.display = 'none';
    mapa.style.display = 'none';   
     
 });

