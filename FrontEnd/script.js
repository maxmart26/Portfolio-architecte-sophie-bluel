

let Tous = document.getElementById("Tous");
Tous.addEventListener("click", function Tous(){
let url = 'http://localhost:5678/api/works'
    try {
        fetch(url)
    .then(reponse => reponse.json())
    .then((reponse2)=>{
        supp();
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
})

categories();
async function categories(){
    let url = 'http://localhost:5678/api/categories'
    try {
        await fetch(url)
        fetch(url)
        .then(reponse3 => reponse3.json())
        .then((reponse3)=>{
            for(let data of reponse3){
                let display =""
                display += `<button id=${data.name}  value=${data.id}>${data.name}</button>`
                document.querySelector("#filtre").insertAdjacentHTML("beforeend",display)
            }
        })
    } catch (error) {
        console.log("no categories" + error)
    }
};

function supp(){
    let gallery = document.getElementsByClassName("gallery");
    let supp = document.getElementById("gellery");
    while (gallery[0].firstChild) {
        gallery[0].removeChild(gallery[0].firstChild);
    }
}

fetch('http://localhost:5678/api/categories')
    .then(function(response){
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    });

fetch('http://localhost:5678/api/works')
    .then(function(response){
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    });

let filtres = document.getElementById("filtre");
filtres.addEventListener("click", function filtres(){
    let url = 'http://localhost:5678/api/works'
        try {
            supp()
            fetch(url)
            .then(reponse => reponse.json())
            .then((reponse2)=>{
            for(let data of reponse2){
                    if (data.categoryId == 1){
                        let display =""
                        display += `<figure> 
                        <img src=${data.imageUrl} alt=${data.title}>
                        <figcaption>${data.title}</figcaption>
                        </figure>`
                        document.querySelector(".gallery").insertAdjacentHTML("beforeend",display)
                    }else {
                        
                    }
            }}
            )
        } catch (error) {
            console.log("grosnull" + error)
        }
});