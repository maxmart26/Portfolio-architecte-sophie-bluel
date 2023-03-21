test()

async function test(){
let url = 'http://localhost:5678/api/works'
    try {
        await fetch(url)
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

gggg
fetch('http://localhost:5678/api/')
    .then(function(response){
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    });
/*const test2 = fetch("http://localhost:5678/api/categories");

/*test2
    .then((reponse3) => {
        console.log(reponse3);

        const userData = response.json();

        console.log(userData);

        usersData.then((response) => {
            console.log(response3);
        });
    })
    .catch((err) => console.log(err));*/
/*test2()
function test2(){
    fetch('http://localhost:5678/api/categories')
    .then(reponse3 => reponse3.json())
    .then(reponse3 => console.log(reponse3))
}*/
