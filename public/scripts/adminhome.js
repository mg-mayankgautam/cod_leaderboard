console.log("oo la la");
const scrimslist = document.querySelector('.scrimslist');



async function getScrims() {

    axios.get()
    try{
        let data = await axios.get('/adminhome/getscrims')
        //console.log('get questions aa gaya',data);
        console.log(data.data);
        addtodropdown1(data.data);
        addtodropdown2(data.data);
        }
    catch (e) {console.log("e")}

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

async function getTeams() {

    axios.get()
    try{
        let data = await axios.get('/adminhome/getscrims')
        //console.log('get questions aa gaya',data);
        console.log(data.data);
        addtodropdown(data.data);
        }
    catch (e) {console.log("e")}

};

getScrims();

// const select = document.querySelector('#scrims) ??? where
//          ->bad naming sahikrna   loop
// const option = document.createElement('option');
// option.value = data.scrims //this is array ka data?
// select.appendChild(option);
// 