
const scrimslist = document.querySelector('.scrimslist');
const modify_team_data_btn = document.querySelector('.modify_team_data_btn')
const select_scrim_btn=document.querySelector('.select_scrim_btn');


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

const selectTeam = document.querySelector('.teams')


function addtoteamsdropdown(data,selectedscrim){
   console.log(selectedscrim);

   const finaldata=data.filter((e)=>{
    if(e.scrimname===selectedscrim) return e})

    console.log(finaldata);

    //const selectTeam = document.querySelector('.teams')
    
    for(let i=0; i<finaldata.length; i++){
        
        const option = document.createElement('option');
        option.value = finaldata[i].teamname;//isme sirf naam dalna hai?
        option.innerText= finaldata[i].teamname;
        selectTeam.appendChild(option);
    }
}




// function addtoteamsdropdown(data){
//     console.log(data);
//     const selectTeam = document.querySelector('.teams')
    
//     for(let i=0; i<data.length; i++){
        
//         const option = document.createElement('option');
//         option.value = data[i].teamname//isme sirf naam dalna hai?
//         option.innerText= data[i].teamname
//         selectTeam.appendChild(option);
//     }

// }

getScrims();
//getTeams();

//console.log(modify_team_data_btn);

// modify_team_data_btn.addEventListener('click', () =>{
//    // e.preventDefault();
//     console.log("clicked");
//     const selected_team = document.querySelector('.selected_team');    
//     selected_team.style.display='block';

// })

select_scrim_btn.addEventListener('click', (e) =>{
e.preventDefault();
selectTeam.innerHTML='';
const scrims2=document.querySelector('.scrims2')

//console.log(scrims2.value);
const select_teamname=document.querySelector('.select_teamname');
select_teamname.style.display='block';

const selected_scrim_name = document.querySelector('.selected_scrim_name');
selected_scrim_name.innerHTML ='SCRIM:'

getTeams(scrims2.value);

});
