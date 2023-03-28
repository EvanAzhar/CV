const menuToggle = document.querySelector('.menu-toggle a');
const nav = document.querySelector('nav ul');
const navbar = document.querySelector('nav')
const menuToggle2 = document.querySelector('.menu-toggle');
const menuToggleChange = document.querySelector('.menu-toggle a i');

// menu toggle
menuToggle.addEventListener('click', function(){
    nav.classList.toggle('slide');
    menuToggleChange.classList.toggle('change');
});


// // klik diiluar untuk off function
document.addEventListener('click',function(e){
    if(!menuToggle.contains(e.target) && !nav.contains(e.target)){
    nav.classList.remove('slide')
    menuToggleChange.classList.remove('change');
    
    }
})

document.addEventListener('click',function(e){
    if(!menuToggle.contains(e.target) && !nav.contains(e.target)){
    menuToggle2.classList.remove('input')
    }
})

