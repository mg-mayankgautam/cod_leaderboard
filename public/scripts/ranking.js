const scrims_page = document.querySelector('.scrims');
const table_data = document.querySelector('.table_data')

getdata();


async function getdata(){
    try{
    var data = await axios.get('/rankings/getdata');
    //console.log('incoming scrim data',data);
    
    addtopage(data.data);
    }
    catch(err){console.log(err);}

    scrims_page.addEventListener('click', (e)=>{
        console.log(e.target.className);
       
        
       // const selectedScrim = e.target.className
       // console.log(selectedScrim);
       addteamranking(e.target.className,data)
    })



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
    
    // console.log(className)
    // const selectedScrim = document.querySelector(`.${className}`)
    
    
}





function addteamranking(selectedScrim, data) {
    
    console.log(selectedScrim);
    
    let playerdata = data.data.allPlayers
    let teamdata = data.data.allTeams
    console.log(playerdata);
     
    const ScrimWiseTeam = teamdata.filter( (e)=> {return e.scrimname === selectedScrim} )
    console.log('scrim wise team',ScrimWiseTeam)

    

     const teamWisePlayers = playerdata.filter( (e)=> {return e.teamname === ScrimWiseTeam.teamname})
     console.log('team wise players',teamWisePlayers)

    // for (let i = 0; i < teamWisePlayers.length; i++) {
    //     console.log(teamWisePlayers[i].kills)
        
    // }
}