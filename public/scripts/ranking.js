const scrims_page = document.querySelector('.scrims');
const table_data = document.querySelector('.table_data')

getdata();

async function getdata(){
    try{
    let data = await axios.get('/rankings/getdata');
    console.log('incoming scrim data',data);
    
    addtopage(data.data);
    }
    catch(err){console.log(err);}

}

function addtopage(data){

    let scrims = data.allScrims
    // let firstScrim=scrims[0].scrimname
    // console.log('1st scrims',firstScrim);
    
    for(let i=0; i<scrims.length; i++){
        var className = scrims[i].scrimname
        const scrimsdiv =document.createElement('div');
        scrimsdiv.innerHTML =scrims[i].scrimname;
        scrimsdiv.className=className
        scrims_page.appendChild(scrimsdiv);
    }
    
    let playerdata = data.allPlayers
    let teamdata = data.allTeams
    // console.log(className)
    // const selectedScrim = document.querySelector(`.${className}`)
    
    scrims_page.addEventListener('click', (e)=>{
        // console.log()
        const selectedScrim = e.target.className
        console.log(selectedScrim)
        addteamranking(e.target.className, playerdata, teamdata)
    })
}


function addteamranking(selectedScrim, playerdata, teamdata) {
    console.log(selectedScrim,playerdata,teamdata);
}