// global
const filtres = document.getElementById("filtre");
const gallery_modal = document.getElementById("gallery-modal");

// function

export function alerte () {alert ("coucou");
}

async function categories(){//pour afficher les categories de l'API
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

function displayAll(){ // pour afficher toute les images de l'API
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

function addListener(){// function pour afficher les images avec la bonne categorie selectionner 
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

function supp(){// pour supprimer les photos afficher mais sans les supp de l'API
    let gallery = document.getElementsByClassName("gallery");
    let supp = document.getElementById("gellery");
    while (gallery[0].firstChild) {
        gallery[0].removeChild(gallery[0].firstChild);
    }
}
//pour le token
const token = localStorage.getItem("token");
console.log(token);
after_login()
logout()
// function pour apres le login
function after_login(){
    if (token != null)
    {
        const login = document.getElementById("login")
        const logout = document.getElementById("logout")
        const add_projets = document.getElementById("add-projets")
        const add_projets2 = document.getElementById("add-projets2")
        const target = document.querySelector(".js-modal")
        const top = document.getElementById("top-add-pickture")
        target.style.display = null
        login.style.display = "none"
        logout.style.display = null
        top.style.display = null
        add_projets.style.display = null
        add_projets2.style.display = null
    }
}
function logout(){// pour afficher logout sur l'index
    const top = document.getElementById("top-add-pickture")
    const logout = document.getElementById("logout")
    const login = document.getElementById("login")
    const target = document.querySelector(".js-modal")
    logout.addEventListener("click",() => {
        window.localStorage.clear();
        target.style.display = "none"
        login.style.display = null
        logout.style.display = "none"
        top.style.display = "none"
        token = null


})}

//pour la modal
let modal = null

const openModal = function (e) {// affiche la modal pour supprimer 
    e.preventDefault()
    const target = document.querySelector(e.target.getAttribute('href'))
    target.style.display = null
    target.removeAttribute('aria-hidden')
    target.setAttribute('aria-modal','true')
    modal = target
    modal.addEventListener('click', closeModal)
    modal.querySelector('.js-modal-close').addEventListener('click', closeModal)
    modal.querySelector('.js-modal-stop').addEventListener('click', stopPropagation)
    //console.log(target);
}
const openModal_add = function (e) {// affiche la modal pour add une image
    e.preventDefault()
    const target2 = document.getElementById('modal2')
    target2.style.display = null
    target2.removeAttribute('aria-hidden')
    target2.setAttribute('aria-modal','true')
    modal = target2
    modal.addEventListener('click', closeModal)
    modal.querySelector('.js-modal-close').addEventListener('click', closeModal)
    modal.querySelector('.js-modal-stop').addEventListener('click', stopPropagation)
}
const closeModal = function (e) {// pour fermer la premiere modal
    if (modal === null) return
    e.preventDefault()
    const target = document.getElementById('modal1')
    const target2 = document.getElementById('modal2')
    target2.style.display = "none"
    target.style.display = "none"
    target.setAttribute('aria-hidden', 'true')
    target.removeAttribute('aria-modal')
    target.removeEventListener('click', closeModal)
    target.querySelector('.js-modal-close').removeEventListener('click', closeModal)
    target.querySelector('.js-modal-stop').removeEventListener('click', stopPropagation)
    modal = null
}
const close_Modal_add = function (e){ //pour fermer la premiere modal
    const target2 = document.getElementById('modal2')
    target2.style.display = "none"
} 
const stopPropagation = function (e) { // pour que quand on clique a l'exterieur de la modal on la ferme
    e.stopPropagation()
}
document.querySelectorAll('.js-modal').forEach(a => {//ouvre la modal
    a.addEventListener('click', openModal)
})

document.querySelectorAll('#button-back').forEach(a => {// ferme la deuxieme modal
    a.addEventListener('click', close_Modal_add)
})

document.querySelectorAll('.js-add-pickture').forEach(a => { //ouvre la deuxieme modal pour l'add
    a.addEventListener('click', openModal_add)  
})
document.querySelectorAll('.js-modal-close').forEach(a => { //ferme la premiere modal
        a.addEventListener('click', closeModal)
})


async function displayAll_modal(){//pour afficher les images pour selectionner si on veut en supp une 
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
            pictogramme.value = data.id
            display1.src = data.imageUrl
            i.value = displaynumber
            display1.classList.add("gallery-modal")
            figure.appendChild(display1)
            figure.appendChild(pictogramme)
            gallery_modal.appendChild(figure)
            pictogramme.appendChild(i)
            displaynumber++
            }
            supp_img()
}


function supp_img() {//pour savoir sur quelle image un a selectionner et envoyer son id a la function delete_img
    let gallery = document.querySelectorAll(".figcaption")
    for (let btn of gallery){
        btn.addEventListener('click',() => {
            console.log(btn.value);
            let id = btn.value
            delete_img(id)
        })
    }
   
}
function delete_img(id) {//pour supprimer l'image de l'API
    fetch(`http://localhost:5678/api/works/${id}`, {
    method: "DELETE",
    headers: { "Authorization": `Bearer ${token}` }
  })
}
window.addEventListener('keydown', function (e) {//pour fermer les modals quand on appuis sur echap ou espace
    if (e.key === "Escape" || e.key === "Esc") {
        closeModal(e)
    }
})
// pour la modal add
const selectImage = document.querySelector('.select-image');
const inputFile = document.querySelector('#file-input')
const imgArea = document.querySelector('#block_pickture')

selectImage.addEventListener('click', function(e) {
    e.preventDefault()
    inputFile.click();
})

inputFile.addEventListener('change', function() {// pour afficher l'image avant de l'ajouter
    const image = this.files[0]
    console.log(image);
    const reader = new FileReader();
    reader.onload = ()=> {
        const allImg = imgArea.querySelectorAll('img')
        allImg.forEach(item => item.remove())
        const imgUrl = reader.result;
        const img = document.createElement('img')
        img.src = imgUrl;
        imgArea.appendChild(img);
        imgArea.classList.add('active')
    }
    reader.readAsDataURL(image);
})

var valide = document.getElementById("valider")

valide.addEventListener("click",  async (e) => {// pour ajouter une image a l'API
    e.preventDefault()
    var img = document.getElementById('file-input');
    var title = document.getElementById("title");
    var categorie = document.getElementById("Categorie");
    const formData = new FormData
    formData.append("image", img.files[0]);
    formData.append("title", title.value);
    formData.append("category", categorie.value)
    let url = 'http://localhost:5678/api/works'
    console.log(formData);
    debugger
    console.log(img.files[0]);
    console.log(title.value);
    console.log(categorie.value);
    await fetch(url,{
        method: "POST",
        headers: {"Authorization": `Bearer ${token}`},
        body: formData,
    })
    .then((response) => {
    if (response.ok) {
    console.log("requete acceptée");
    response.push(formData);
    }
    else {
        console.log("erreur dans la récupération des donnés de l'API");
    }})
    console.log(fetchData);
})
//application

await categories()
displayAll()
addListener()
displayAll_modal();
