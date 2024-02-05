const scrims_page = document.querySelector('.scrims');
const table_data = document.querySelector('.table_data')
const table_data_players = document.querySelector('.table_data_players');
const leaderboard_div = document.querySelector(".leaderboard_div");
const leaderboard_div_players = document.querySelector(".leaderboard_div_players");
const ranking_select_child = document.querySelector('.ranking_select');
const Team_Rankings = document.querySelector('.Team_Rankings');
const player_Rankings = document.querySelector('.player_Rankings');
const white_div = document.querySelector('.white_div');
const black_div = document.querySelector('.black_div');
const logo_div= document.querySelector('.logo_div');
const right_btn = document.querySelector('.right_btn');


const myTimeout = setTimeout(onloood, 100);
const myTimeout2= setTimeout(fade, 1000);
const myTimeout3 =  setTimeout(remove,2000);

function onloood(){
    white_div.classList.add('scaleup');
    black_div.classList.add('scaledown');
    right_btn.classList.add('btn_fade');
}

function fade(){
    black_div.style.opacity='0';
    white_div.style.opacity='0';
    logo_div.style.opacity='0';
    // black_div.style.display='none';
    // white_div.style.display='none';
}

function remove(){
    black_div.style.display='none';
    white_div.style.display='none';
    logo_div.style.display='none';
}

Initial_ReloadData();


async function Initial_ReloadData(){
    try{
    const data = await getScrimData(); 
    //console.log('incoming scrim data',data);
    await addscrimstopage(data.data);
        
    var Selected = document.querySelector('.selected');
    const teamdata = await getTeamsData(Selected.innerText)
    addteamranking(teamdata)
        
    }
    catch(err){console.log(err);}

    // scrims_page.addEventListener('click', (e)=>{
    
    //     addteamranking(e.target.className, data)
    //     //addplayerranking(e.target.className);
    //     changeButton(e)
    // })

}


async function getScrimData(){
    try{
        var data = await axios.get('/rankings/getscrimdata');
        // console.log('incoming team data', data);
    
        }
        catch(err){console.log(err);}
        return data
}

function addscrimstopage(data){

    let scrims = data
   // let firstScrim = scrims[0].scrimname
    
    for(let i=0; i<scrims.length; i++){
        var className = scrims[i].scrimname
        const scrimsdiv =document.createElement('div');
        scrimsdiv.innerHTML =scrims[i].scrimname;
        scrimsdiv.className=className
        if(i===0){scrimsdiv.classList.add('selected')}
        scrims_page.appendChild(scrimsdiv);
    }
    
}

scrims_page.addEventListener('click', async (e)=>{
    // const data = await Initial_ReloadData()   
    // console.log(data);

    await changeButton(e);
    const teamdata = await getTeamsData(e.target.innerText);
    addteamranking(teamdata);
    const playerdata = await getPlayersData(e.target.innerText);
    addplayerranking(playerdata);

})


function changeButton(e){
    var oldSelected = document.getElementsByClassName("selected")
    // console.log(oldSelected)
    for(var i=0; i<oldSelected.length; i++){
        oldSelected[i].classList.remove("selected")
    }
    e.target.classList.add("selected")
}


async function getTeamsData(selectedScrim){
    try{
    var data = await axios.get('/rankings/getteamsdata',{
        params: {
            scrimname: selectedScrim
        }

    });
    // console.log('incoming team data', data);

    }
    catch(err){console.log(err);}
    return data
}



function addteamranking(data) {
    table_data.innerHTML=''
    // console.log(selectedScrim);
    
    //let playerdata = data.data.allPlayers
    let teamdata = data.data
     //console.log(playerdata);
     
    // const ScrimWiseTeam = teamdata.filter( (e)=> {return e.scrimname === selectedScrim} )
   // console.log('scrim wise team',ScrimWiseTeam)


    const teamranking = teamdata.sort((a, b) => parseFloat(b.team_total_pts) - parseFloat(a.team_total_pts));

   console.log('team descending order',teamranking)

  
    for (let i = 0; i < teamranking.length; i++) {
        
        const rank = document.createElement('div');
        rank.innerText  = Number([i])+ Number(1)
        const team = document.createElement('div');
        team.innerText= teamranking[i].teamname
        team.className= 'teamname';
        const matchwins = document.createElement('div');
        matchwins.innerText = teamranking[i].team_wins;
        const played_matches = document.createElement('div');
        played_matches.innerText = teamranking[i].played_matches;
        const positionpts = document.createElement('div');
        positionpts.innerText = teamranking[i].team_position_pts
        const teamkills = document.createElement('div');
        teamkills.innerText = teamranking[i].team_total_kills
        const totalpts = document.createElement('div');
        totalpts.innerText = teamranking[i].team_total_pts
        //const datarow= document.createElement('div');

        if(i%2==0){
        rank.classList.add('odd');
        team.classList.add('odd');
        matchwins.classList.add('odd');
        played_matches.classList.add('odd');
        positionpts.classList.add('odd');
        teamkills.classList.add('odd');
        totalpts.classList.add('odd');
        }
        
        rank.classList.add('entry');
        team.classList.add('entry');
        matchwins.classList.add('entry');
        played_matches.classList.add('entry');
        positionpts.classList.add('entry');
        teamkills.classList.add('entry');
        totalpts.classList.add('entry');


        table_data.appendChild(rank)
        table_data.appendChild(team)
        table_data.appendChild(matchwins)
        table_data.appendChild(played_matches)
        table_data.appendChild(positionpts)
        table_data.appendChild(teamkills)
        table_data.appendChild(totalpts)
        
        // datarow.appendChild(rank)
        // datarow.appendChild(team)
        // datarow.appendChild(matchwins)
        // datarow.appendChild(played_matches)
        // datarow.appendChild(positionpts)
        // datarow.appendChild(teamkills)
        // datarow.appendChild(totalpts)
        // table_data.appendChild(datarow);

        // console.log([i] , 1)
    }

}



async function getPlayersData(selectedScrim){
    try{
    var data = await axios.get('/rankings/getplayersdata',
    {
        params: {
            scrimname: selectedScrim
        }
    });
    // console.log('incoming player data',data);
    //addplayerranking(data);
    }
    catch(err){console.log(err);}
    return data
}


function addplayerranking(data){
    
    table_data_players.innerHTML='';
    console.log("addplayer func", data);

    const playerdata = data.data

    // const ScrimWisePlayers = playerdata.filter( (e)=> {return e.scrimname === selectedScrim} )
 
    const playerranking = playerdata.sort((a, b) => parseFloat(b.kills) - parseFloat(a.kills));

   console.log('descending order',playerranking)

  
    for (let i = 0; i < playerranking.length; i++) {
        
        const rank = document.createElement('div');
        rank.innerText  = Number([i])+ Number(1);
        const player = document.createElement('div');
        player.innerText= playerranking[i].member_name;
        player.className='playername';
        const teamname = document.createElement('div');
        teamname.innerText = playerranking[i].teamname;
        teamname.className= 'teamname';
        const kills = document.createElement('div');
        kills.innerText = playerranking[i].kills;
        const damage = document.createElement('div');
        damage.innerText = playerranking[i].damage;

        table_data_players.appendChild(rank);
        table_data_players.appendChild(player);
        table_data_players.appendChild(teamname);
        table_data_players.appendChild(kills);
        table_data_players.appendChild(damage);

        // console.log([i] , 1)
    }


}




ranking_select_child.addEventListener('click',async(e)=>{

    // console.log(e.target.parentNode.parentNode.firstElementChild.firstElementChild.nextElementSibling);

    var Selected = document.querySelector('.selected');
    //console.log('wuuhuu',Selected.innerText);
    

    if(e.target.value=='player rankings'){
      const data = await getPlayersData(Selected.innerText);
      addplayerranking(data);
 //   console.log(Team_Rankings,player_Rankings)
        Team_Rankings.style.display = 'none';
        player_Rankings.style.display = 'block';
        leaderboard_div.style.display = 'none';
        leaderboard_div_players.style.display='block'
         
    }

    if(e.target.value=='team rankings'){
      //  console.log(Team_Rankings,player_Rankings)
      const data = await getTeamsData(Selected.innerText);
        addteamranking(data)
        Team_Rankings.style.display = 'block';
        player_Rankings.style.display = 'none';
        leaderboard_div.style.display = 'block';
        leaderboard_div_players.style.display='none'
    }



})


// table_data.addEventListener('mouseover', async(e)=>{
//    if(e.target.className==='teamname'){

//     const div = await addplayerinfohover(e.target);
//     div.style.display = 'flex';

//    }
//    else{
//     // const player_info= document.getElementsByClassName('teamplayer_info');
//     // player_info.style.display='none'
// }
// });


// async function addplayerinfohover(team){
//     var selected= document.querySelector('.selected');
//     const data = await getPlayersData(selected.innerText);
    
//     const playerdata = data.data.filter( (p)=> {return p.teamname === team.innerText} )

//     const player_info= document.createElement('div');
//     player_info.className='teamplayer_info';
//     player_info.id= team.innerText;
    
//     for(let i=0; i<playerdata.length; i++){
//         const player = document.createElement('div');
//         player.innerText=playerdata[i].member_name;
//         player_info.appendChild(player);
//     }

//     team.appendChild(player_info);
//     return player_info;
// }


// table_data.addEventListener('mouseout', async(e)=>{ 
   
        
//  });
