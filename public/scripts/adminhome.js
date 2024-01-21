
const scrimslist = document.querySelector('.scrimslist');
const modify_team_data_btn = document.querySelector('.modify_team_data_btn')



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

async function getTeams() {

    axios.get()
    try{
        let data = await axios.get('/adminhome/getteams')
        //console.log('get questions aa gaya',data);
       // console.log(data.data);
        addtoteamsdropdown(data.data);
        }
    catch (e) {console.log(e)}

};

function addtodropdown1(data) {
    console.log(data);
    const selectScrim = document.querySelector('.scrims1')
    
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

function addtoteamsdropdown(data){
   console.log(data);
    const selectTeam = document.querySelector('.teams')
    
    for(let i=0; i<data.length; i++){
        
        const option = document.createElement('option');
        option.value = data[i].teamname;//isme sirf naam dalna hai?
        option.innerText= data[i].teamname;
        selectTeam.appendChild(option);
    }

}



function addtoteamdropdown(data){
    console.log(data);
    const selectTeam = document.querySelector('.teams')
    
    for(let i=0; i<data.length; i++){
        
        const option = document.createElement('option');
        option.value = data[i].teamname//isme sirf naam dalna hai?
        option.innerText= data[i].teamname
        selectTeam.appendChild(option);
    }

}

getScrims();
getTeams();

console.log(modify_team_data_btn);

modify_team_data_btn.addEventListener('click', () =>{
   // e.preventDefault();
    console.log("clicked");
    const selected_team = document.querySelector('.selected_team');    
    selected_team.style.display='block';

})
// const select = document.querySelector('#scrims) ??? where
//          ->bad naming sahikrna   loop
// const option = document.createElement('option');
// option.value = data.scrims //this is array ka data?
// select.appendChild(option);
// 