
const left_btn= document.querySelector('.left_btn');
const right_btn= document.querySelector('.right_btn');
const logo= document.querySelector('.logo');
console.log(logo)

left_btn.addEventListener('click', ()=>
{
    left_btn.parentNode.classList.add('leftExpand');
    right_btn.parentNode.classList.add('rightCollapse');
      
    logo.classList.add('rotate');
    right_btn.parentNode.innerHTML='';
    left_btn.parentNode.innerHTML='';

    // left_btn.parentNode.innerHTML="coming soon";
    const h1 = document.createElement('h1');
    h1.innerText="Coming Soon";
    h1.classList.add('slide');
    // left_btn.parentNode.appendChild(h1);
    
})

right_btn.addEventListener('click', async ()=>{
    
    
    
    right_btn.parentNode.classList.add('rightExpand');
    left_btn.parentNode.classList.add('rightCollapse');   
    
    left_btn.parentNode.innerHTML='';

    logo.classList.add('rotate');  

      
    right_btn.parentNode.innerHTML='';
    
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





