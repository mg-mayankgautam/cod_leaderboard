
const left_btn= document.querySelector('.left_btn');
const right_btn= document.querySelector('.right_btn');
console.log(left_btn);

left_btn.addEventListener('click', ()=>
{
    left_btn.parentNode.classList.add('leftExpand');
    right_btn.parentNode.classList.add('rightCollapse');
    right_btn.parentNode.style.display='none';

})

right_btn.addEventListener('click', ()=>
{
    right_btn.parentNode.classList.add('rightExpand');
    left_btn.parentNode.classList.add('leftCollapse');
    left_btn.parentNode.style.display='none';

    console.log('left btn clicked');
})


// const container= document.querySelector('.container');
// console.log(container);

// container.addEventListener('click', ()=>{

// })