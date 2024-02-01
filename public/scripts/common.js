const burger_icon = document.querySelector('.burger_icon');
const mobile_nav = document.querySelector('.mobile_nav');
const close_icon = document.querySelector('.close_icon');


burger_icon.addEventListener('click',() =>{
    mobile_nav.style.display = 'flex';
    
})

close_icon.addEventListener('click',() =>{
    mobile_nav.style.display = 'none';
});

