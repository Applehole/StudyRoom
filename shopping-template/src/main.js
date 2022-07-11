function getData (){
    return fetch("data/data.json")
    .then((res)=>res.json())
    .then((json)=>json.items)
}

function displayItems(data){
    const container = document.querySelector(".storageContainer")
    container.innerHTML = data.map((el)=>{ return createDetail(el)
    })
}

function createDetail(data){
    return `
    <div class="clothesContainer">
        <img class="clothesPicture" src="${data.image}" alt="picture">
        <div class="clothesDetail">${data.gender} ${data.type}, ${data.size} ${data.color}</div>
    </div>
    `;
}

function clickTshrit(data){
    return data.filter((el)=>el.type==="tshirt")
}

function onButtonClick(event, data){
    let key = event.target.dataset.key
    let value = event.target.dataset.value
    if(key==="type"){
        data = data.filter((el)=> el.type===value)
        displayItems(data)
        return;
    }
    if(key ==="color"){
        data = data.filter((el)=>el.color===value)
        displayItems(data)
        return;
    }
}   

function setEventListner(data){
    const buttons = document.querySelector(".button")
    const logo = document.querySelector(".logo")
    buttons.addEventListener("click", event => onButtonClick(event,data));
    logo.addEventListener("click", ()=>displayItems(data))
}

getData()
  .then(data=>{
    displayItems(data)
    setEventListner(data)
  })