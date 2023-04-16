// global
const filtres = document.getElementById("filtre");
const gallery_modal = document.getElementById("gallery-modal");

// function

export function alerte () {alert ("coucou");
}

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
            console.log(reponse2);
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
    Mode édition
    </div>
    <button id="button_edition">publier les changements</button>
    `
    document.querySelector("#top_nav").insertAdjacentHTML("beforeend",display)
}

export function modifier(){
    let display =""
    display += 
    `<a href="#modal1" class="js-modal">
    <i class="fa-sharp fa-solid fa-pen-to-square"></i>
    modifier
    </a>
    `
    document.querySelector(".modifier").insertAdjacentHTML("beforeend",display)
}

export function modifier2(){
    let display =""
    display += 
    `<a href="#modal1" class="js-modal">
    <i class="fa-sharp fa-solid fa-pen-to-square"></i>modifier
    </a>
    `
    document.querySelector(".modifier2").insertAdjacentHTML("beforeend",display)
}

export function modifier3(){
    let display =""
    display += 
    `<a href="#modal1" class="js-modal" id="test">
    <i class="fa-sharp fa-solid fa-pen-to-square"></i>
    modifier
    </a>
    `
    document.querySelector(".modifier3").insertAdjacentHTML("beforeend",display)
}

//pour la modal
let modal = null

const openModal = function (e) {
    e.preventDefault()
    const target = document.querySelector(e.target.getAttribute('href'))
    target.style.display = null
    target.removeAttribute('aria-hidden')
    target.setAttribute('aria-modal','true')
    modal = target
    modal.addEventListener('click', closeModal)
    modal.querySelector('.js-modal-close').addEventListener('click', closeModal)
    modal.querySelector('.js-modal-stop').addEventListener('click', stopPropagation)
    console.log(target);
}
const openModal_add = function (e) {
    e.preventDefault()
    const target2 = document.getElementById('modal2')
    console.log(target2);
    target2.style.display = null
    target2.removeAttribute('aria-hidden')
    target2.setAttribute('aria-modal','true')
    modal = target2
    modal.addEventListener('click', closeModal)
    modal.querySelector('.js-modal-close').addEventListener('click', closeModal)
    modal.querySelector('.js-modal-stop').addEventListener('click', stopPropagation)
    console.log(target2);
}

const closeModal = function (e) {
    if (modal === null) return
    e.preventDefault()
    modal.style.display = "none"
    modal.setAttribute('aria-hidden', 'true')
    modal.removeAttribute('aria-modal')
    modal.removeEventListener('click', closeModal)
    modal.querySelector('.js-modal-close').removeEventListener('click', closeModal)
    modal.querySelector('.js-modal-stop').removeEventListener('click', stopPropagation)
    modal = null
}
const all_closeModal = function(e){
    if (modal === null) return
    e.preventDefault()
    modal.style.display = "none"
    modal.setAttribute('aria-hidden', 'true')
    modal.removeAttribute('aria-modal')
    modal.removeEventListener('click', closeModal)
    modal = null
    closeModal()
} 
const stopPropagation = function (e) {
    e.stopPropagation()
}
document.querySelectorAll('.js-modal').forEach(a => {
    a.addEventListener('click', openModal)
})

document.querySelectorAll('#button-back').forEach(a => {
    a.addEventListener('click', closeModal)
})

document.querySelectorAll('.js-add-pickture').forEach(a => { 
    a.addEventListener('click', openModal_add)  
})
document.querySelectorAll('.js-modal-close').forEach(a => { 
    
        a.addEventListener('click', all_closeModal)
})


async function displayAll_modal(){
    let url = 'http://localhost:5678/api/works'
            let displaynumber = 1;
            const res = await fetch(url)
            const datas = await res.json()
            for(let data of datas){
            let figure = document.createElement('figure')
            let pictogramme = document.createElement('button')
            let i = document.createElement('i')
            let display1 = document.createElement('img')
            pictogramme.classList.add("figcaption") 
            i.classList.add("fa-regular")
            i.classList.add("fa-trash-can")
            i.classList.add("supp")
            pictogramme.value = displaynumber
            display1.src = data.imageUrl
            i.value = displaynumber
            display1.classList.add("gallery-modal")
            figure.appendChild(display1)
            figure.appendChild(pictogramme)
            gallery_modal.appendChild(figure)
            pictogramme.appendChild(i)
            displaynumber++
            }
            
}

function supp_img_modal(){
    let buttons = document.querySelectorAll(".figcaption")
    //console.log(buttons)
    for (const btn of buttons) {
        //console.log(btn.value);
        btn.addEventListener("click",() => {
            //console.log(btn.value)
                        let display =""
                        display += `iciiiiii`
                        document.querySelector(".figcaption").insertAdjacentHTML("beforeend",display)
                        //console.log(btn.value);
                    })
     }  
    }

    
function add_img_modal(){
    let url = 'http://localhost:5678/api/works'
    let add_img = {
        title: emails.value,
        imageUrl: passwords.value,
        categoryId: categorie.value
    }
    console.log(add_img);
    try {
        const reponse = fetch(url, {
            method: "POST",
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(add_imd)
        })
}
catch (error) {
    console.log("grosnull", error)
}
}


window.addEventListener('keydown', function (e) {
    if (e.key === "Escape" || e.key === "Esc") {
        closeModal(e)
    }
})
//application

await categories()
displayAll()
addListener()
displayAll_modal();
//pour les tests
    top_nav();
    modifier();
    modifier2();
    modifier3();
    