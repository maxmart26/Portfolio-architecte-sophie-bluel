// global
const filtres = document.getElementById("filtre");

// function

async function categories(){
    let url = 'http://localhost:5678/api/categories'
    let displaynumber = 1;
    const res = await fetch(url)
    const datas = await res.json()
    for(let data of datas){
        let display = document.createElement('button')
        display.value = displaynumber
        display.innerHTML = data.name
        display.id = data.name
        display.classList.add("filter")
        filtres.appendChild(display)
        displaynumber++
    } 
};

function displayAll(){
    let url = 'http://localhost:5678/api/works'
        try {
            fetch(url)
        .then(reponse => reponse.json())
        .then((reponse2)=>{
            
            for(let data of reponse2){
                let display =""
                display += `<figure> 
                <img src=${data.imageUrl} alt=${data.title}>
                <figcaption>${data.title}</figcaption>
            </figure>`
            document.querySelector(".gallery").insertAdjacentHTML("beforeend",display)
            }
        })
        .catch((error)=>console.log("indisponible" + error))
        } catch (error) {
            console.log("grosnull" + error)
        }
    }

let url = 'http://localhost:5678/api/works'

function addListener(){
    let buttons = document.querySelectorAll(".filter")
    //console.log(buttons)
    for (const btn of buttons) {
        //console.log(btn.value);
        btn.addEventListener("click",() => {
            supp()
            //console.log(btn.value);
            fetch(url)
            .then(reponse => reponse.json())
            .then((datas)=>{
                if (btn.value == 0){
                    displayAll()
                }
                else {
                    for(let data of datas){
                         if (data.categoryId == btn.value ){
                        let display =""
                        display += `<figure> 
                        <img src=${data.imageUrl} alt=${data.title}>
                        <figcaption>${data.title}</figcaption>
                        </figure>`
                        document.querySelector(".gallery").insertAdjacentHTML("beforeend",display)
                        
                        
                    }else {
                        
                    }
            }}})
        }
        )
    }
}

function supp(){
    let gallery = document.getElementsByClassName("gallery");
    let supp = document.getElementById("gellery");
    while (gallery[0].firstChild) {
        gallery[0].removeChild(gallery[0].firstChild);
    }
}
// function pour apres le login

export function top_nav(){
    let display =""
    display += 
    `<div id="edition">
    <i class="fa-sharp fa-solid fa-pen-to-square"></i>
    <p>Mode édition</p>
    </div>
    <button id="button_edition">publier les changements</button>
    `
    document.querySelector("#top_nav").insertAdjacentHTML("beforeend",display)
}

export function modifier(){
    let display =""
    display += 
    `<button class="modifier_child">
    <i class="fa-sharp fa-solid fa-pen-to-square"></i>
    <p>modifier</p>
    <button>
    `
    document.querySelector(".modifier").insertAdjacentHTML("beforeend",display)
}

export function modifier2(){
    let display =""
    display += 
    `<button class="modifier_child">
    <i class="fa-sharp fa-solid fa-pen-to-square"></i>
    <p>modifier</p>
    <button>
    `
    document.querySelector(".modifier2").insertAdjacentHTML("beforeend",display)
}

export function modifier3(){
    let display =""
    display += 
    `<button class="modifier_child">
    <i class="fa-sharp fa-solid fa-pen-to-square"></i>
    <p>modifier</p>
    </button>
    `
    document.querySelector(".modifier3").insertAdjacentHTML("beforeend",display)
}

// 
//application

await categories()
displayAll()
addListener()

