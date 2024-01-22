// const axios = require('axios');
const scrimslist = document.querySelector('.scrimslist');
const modify_team_data_btn = document.querySelector('.modify_team_data_btn')
const select_scrim_btn=document.querySelector('.select_scrim_btn');
const add_new_member_btn=document.querySelector('.add_new_member_btn');
const display_add_scrim_btn= document.querySelector('.display_add_scrim_btn');
const add_scrim_div = document.querySelector('.add_scrim_div');
const display_modify_scrim_btn = document.querySelector('.display_modify_scrim_btn');
const modify_scrim_div = document.querySelector('.modify_scrim_div');
const submit_team_btn = document.querySelector('.submit_team_btn');
const teamname_input = document.querySelector('.teamname_input'); 
const selectScrim = document.querySelector('.scrims1')
const manage_team_btn = document.querySelector('.manage_team_btn')
const manage_scrim_btn = document.querySelector('.manage_scrim_btn')
const manage_scrim_div = document.querySelector('.manage_scrim_div');
const manage_team_div = document.querySelector('.manage_team_div');
const register_new_team_btn = document.querySelector('.register_new_team_btn');
const manage_existing_team_btn = document.querySelector('.manage_existing_team_btn')

const register_new_team_div=document.querySelector('.register_new_team_div');
const manage_existing_team_div=document.querySelector('.manage_existing_team_div');
const submit_new_team_btn= document.querySelector('.submit_new_team_btn');
const new_teamname_input = document.querySelector('.new_teamname_input');
const teamshortform_input = document.querySelector('.teamshortform_input');


async function getScrims() {

    axios.get()
    try{
        let data = await axios.get('/adminhome/getscrims')
        //console.log('get questions aa gaya',data);
        //console.log(data.data);
        addtodropdown1(data.data);
        addtodropdown2(data.data);
        }
    catch (e) {console.log(e)}

};

async function postTeams(){
    console.log(selectScrim.value, teamname_input.value)
    // axios.post()
    // try{
    //     const data = await axios.post('/adminhome/addteam', {scrimname: selectScrim.value, teamname: teamname_input.value})
    // }
    // catch (e) {console.log(e)}
}

async function getTeams(selectedscrim) {

    axios.get()
    try{
        let data = await axios.get('/adminhome/getteams')
        //console.log('get questions aa gaya',data);
        console.log(data.data);


        addtoteamsdropdown(data.data,selectedscrim);
        }
    catch (e) {console.log(e)}

};

async function getPlayers(selectedteam, selectedscrim){

    axios.get()
    try{
        let data = await axios.get('/adminhome/getplayerdata')
        //console.log('get questions aa gaya',data);
        // console.log(data.data);
        addtoplayersdropdown(data.data, selectedteam, selectedscrim)      
        }
    catch (e) {console.log(e)}
}

const selectPlayer = document.querySelector('.members');

function addtoplayersdropdown(data, selectedteam, selectedscrim){

    const finaldata=data.filter((e)=>{
        if(e.scrimname===selectedscrim && e.teamname===selectedteam ) return e})
            
        for(let i=0; i<finaldata.length; i++){
            
            const option = document.createElement('option');
            option.value = finaldata[i].member_name;//isme sirf naam dalna hai?
            option.innerText= finaldata[i].member_name;
            selectPlayer.appendChild(option);
        }
}

function addtodropdown1(data) {
    console.log(data);
        
    for(let i=0; i<data.length; i++){
        
        const option = document.createElement('option');
        option.value = data[i].scrimname//isme sirf naam dalna hai?
        option.innerText= data[i].scrimname
        selectScrim.appendChild(option);
    }


}

function addtodropdown2(data) {
    console.log(data);
    const selectScrim = document.querySelector('.scrims2')
    
    for(let i=0; i<data.length; i++){
        
        const option = document.createElement('option');
        option.value = data[i].scrimname//isme sirf naam dalna hai?
        option.innerText= data[i].scrimname
        selectScrim.appendChild(option);
    }


}

const selectTeam = document.querySelector('.teams')


function addtoteamsdropdown(data,selectedscrim){
//    console.log(selectedscrim);

   const finaldata=data.filter((e)=>{
    if(e.scrimname===selectedscrim) return e})

    // console.log(finaldata);

    //const selectTeam = document.querySelector('.teams')
    
    for(let i=0; i<finaldata.length; i++){
        
        const option = document.createElement('option');
        option.value = finaldata[i].teamname;//isme sirf naam dalna hai?
        option.innerText= finaldata[i].teamname;
        selectTeam.appendChild(option);
    }
}






getScrims();
//getTeams();
const scrims2=document.querySelector('.scrims2')

manage_scrim_btn.addEventListener('click',()=>{
    manage_scrim_div.style.display="block";
    manage_team_div.style.display="none";
})

manage_team_btn.addEventListener('click',()=>{
    manage_scrim_div.style.display="none";
    manage_team_div.style.display="block";

})

submit_team_btn.addEventListener('click', (e)=>{
    e.preventDefault();
    // console.log('clicked add team button')
    postTeams();
})

select_scrim_btn.addEventListener('click', (e) =>{
    e.preventDefault();
    selectTeam.innerHTML='';

    //console.log(scrims2.value);
    const select_teamname=document.querySelector('.select_teamname');
    select_teamname.style.display='block';

    const selected_scrim_name = document.querySelector('.selected_scrim_name');
    selected_scrim_name.innerHTML =`SELECTED SCRIM: ${scrims2.value}`

    getTeams(scrims2.value);

});


const teams = document.querySelector('.teams')

modify_team_data_btn.addEventListener('click', (e) =>{
    e.preventDefault();
    selectPlayer.innerHTML="";
    const selected_team = document.querySelector('.selected_team');    
    selected_team.style.display='block';

    const current_team_name = document.querySelector('.current_team_name')
    current_team_name.innerHTML= `SELECTED TEAM: ${teams.value}`

    getPlayers(teams.value, scrims2.value);
})

const add_player_div=document.querySelector('.add_player_div');

add_new_member_btn.addEventListener('click', (e) =>{
    add_player_div.style.display='block';

});

const submit_member_btn=document.querySelector('.submit_member_btn');
const member_name_input =document.querySelector('.member_name_input');

submit_member_btn.addEventListener('click',async (e) =>{
    e.preventDefault();
    selectPlayer.innerHTML="";


    console.log(member_name_input.value,scrims2.value,teams.value);

    try{
       const data = await axios.post('/adminhome/addplayerdata',{member_name:member_name_input.value,
                                         scrimname:  scrims2.value,
                                         teamname: teams.value,
                                         match_wins:0,
                                         position_points:0,
                                         kills:0,
                                         damage:0,total_points:0});
                                         }

    catch(error){console.log(error)}
    getPlayers(teams.value, scrims2.value);

});

const modify_member_data_btn = document.querySelector('.modify_member_data_btn')
const selected_member = document.querySelector('.selected_member')

modify_member_data_btn.addEventListener('click', (e) => {
    e.preventDefault();
    selected_member.style.display = 'block';

})

{/* <input class="match_wins" type="number" placeholder="Match Wins" name="match_wins">
<input class="position_points" type="number" placeholder="Position Points" name="position_points">
<input class="kills" type="number" placeholder="Kills" name="kills">
<input class="damage" type="number" placeholder="Damage" name="damage">
<input class="total_points" type="number" placeholder="Total Points" name="total_points">
<button class="submit_player_data">Submit Team Data</button>
</form> */}


const match_wins=document.querySelector('.match_wins');
const position_points=document.querySelector('.position_points');
const kills=document.querySelector('.kills');
const damage=document.querySelector('.damage');
const total_points=document.querySelector('.total_points');
const submit_player_data_btn=document.querySelector('.submit_player_data_btn');





submit_player_data_btn.addEventListener('click', async(e)=>{
    e.preventDefault();
    console.log(match_wins.value, position_points.value, kills.value, damage.value, total_points.value) 
    
    try{
        const data = await axios.post('/adminhome/addplayerdata',{
                                          member_name:selectPlayer.value,
                                          scrimname:  scrims2.value,
                                          teamname: teams.value,
                                          match_wins:match_wins.value,
                                          position_points:position_points.value,
                                          kills:kills.value,
                                          damage:damage.value,
                                          total_points:total_points.value});
                                          }
 
     catch(error){console.log(error)}
    
}
)



display_add_scrim_btn.addEventListener("click", ()=>{
    add_scrim_div.style.display="block";
    modify_scrim_div.style.display="none";
})

display_modify_scrim_btn.addEventListener("click", ()=>{
    modify_scrim_div.style.display="block";
    add_scrim_div.style.display="none";
})


register_new_team_btn.addEventListener("click", ()=>{
    manage_existing_team_div.style.display="none";
    register_new_team_div.style.display="block"
    
})

manage_existing_team_btn.addEventListener("click", ()=>{
    manage_existing_team_div.style.display="block";
    register_new_team_div.style.display="none"
    
})

submit_new_team_btn.addEventListener("click",async()=>{
    new_teamname_input, teamshortform_input
    try{
        const data = await axios.post('/adminhome/addteamplayer',
        {teamname:new_teamname_input.value, teamshortform:teamshortform_input.value , member_name: 'no players'})
    } 
    catch(error){console.log(error)}
})