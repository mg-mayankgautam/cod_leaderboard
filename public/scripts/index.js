
const left_btn= document.querySelector('.left_btn');
const right_btn= document.querySelector('.right_btn');
console.log(left_btn);

left_btn.addEventListener('click', ()=>
{
    left_btn.parentNode.classList.add('leftExpand');
    right_btn.parentNode.classList.add('rightCollapse');
    right_btn.parentNode.style.display='none';

})

right_btn.addEventListener('click', async ()=>
{
    right_btn.parentNode.classList.add('rightExpand');
    left_btn.parentNode.classList.add('leftCollapse');
    left_btn.parentNode.style.display='none';

    
    
    try {
        let  data  = await axios.get('/rankings');
        //newTask will be recieved in app.js
        console.log(data);//data is the response recieved from app.js,through get request.
       
				 // addToList(data);//send the recieved data to function to display on page
    }
    catch (err) {
        console.log(err);
    }  
     


})


// const container= document.querySelector('.container');
// console.log(container);

// container.addEventListener('click', ()=>{

// })





