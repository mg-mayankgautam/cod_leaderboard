console.log("oo la la");
const scrimslist = document.querySelector('.scrimslist');



async function getScrims() {

    axios.get()
    try{
        let data = await axios.get('/adminhome/getscrims')
        //console.log('get questions aa gaya',data);
        console.log(data.data);
        addtodropdown(data.data);
        }
    catch (e) {console.log("e")}

};


function addtodropdown(data) {
    console.log(scrimslist);
    let scrims = '<option value="ind luci">'
    scrimslist.innerHTML = scrims;
}
getScrims();

// const select = document.querySelector('#scrims)
//              loop
// const option = document.createElement('option');
// option.value = data.scrims 
// select.appendChild(option);
// 