const scrims_page = document.querySelector('.scrims');
const table_data = document.querySelector('.table_data')

getdata();


async function getdata(){
    try{
    var data = await axios.get('/rankings/getdata');
    //console.log('incoming scrim data',data);
    
    addscrimstopage(data.data);
    addteamranking(data.data.allScrims[0].scrimname, data)

    }
    catch(err){console.log(err);}

    scrims_page.addEventListener('click', (e)=>{
        // console.log(e.target.className);
    //    const selectedscrim = e.target
       e.target.classlist.add('selected');
       addteamranking(e.target.className, data)
    })

}

function addscrimstopage(data){

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
      table_data.innerHTML=''
    console.log(selectedScrim);
    
    let playerdata = data.data.allPlayers
    let teamdata = data.data.allTeams
    // console.log(playerdata);
     
    const ScrimWiseTeam = teamdata.filter( (e)=> {return e.scrimname === selectedScrim} )
    console.log('scrim wise team',ScrimWiseTeam)


    const teamranking = ScrimWiseTeam.sort((a, b) => parseFloat(b.team_total_pts) - parseFloat(a.team_total_pts));

    console.log('descending order',teamranking)

  
    for (let i = 0; i < teamranking.length; i++) {
        
        const rank = document.createElement('div');
        rank.innerText  = Number([i])+ Number(1)
        const team = document.createElement('div');
        team.innerText= teamranking[i].teamname
        const matchwins = document.createElement('div');
        matchwins.innerText = teamranking[i].team_wins
        const positionpts = document.createElement('div');
        positionpts.innerText = teamranking[i].team_position_pts
        const teamkills = document.createElement('div');
        teamkills.innerText = teamranking[i].team_total_kills
        const totalpts = document.createElement('div');
        totalpts.innerText = teamranking[i].team_total_pts

        table_data.appendChild(rank)
        table_data.appendChild(team)
        table_data.appendChild(matchwins)
        table_data.appendChild(positionpts)
        table_data.appendChild(teamkills)
        table_data.appendChild(totalpts)

        // console.log([i] , 1)
    }

}