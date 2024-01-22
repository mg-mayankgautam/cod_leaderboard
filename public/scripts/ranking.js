getdata();

async function getdata(){
    try{
    let data = await axios.get('/rankings/data');
    console.log('incoming data',data);
    
    addtopage(data.data);
    }
    catch(err){console.log(err);}




}
const scrims_page = document.querySelector('.scrims');

function addtopage(data){

    let scrims = data.allScrims
    let firstScrim=scrims[0].scrimname
  //  console.log('1st scrims',firstScrim);
    
    for(let i=0; i<scrims.length; i++){
        //console.log('scrims',scrims[i].scrimname);
        const div =document.createElement('div');
        div.innerHTML =scrims[i].scrimname;
        scrims_page.appendChild(div);
    
    }
    
    
    console.log('all data',data.allPlayers);
    



}