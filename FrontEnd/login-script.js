
var emails = document.getElementById("email");
var passwords = document.getElementById("password");
let button = document.getElementById("connection")


button.addEventListener("click", async (e) => {
    e.preventDefault()
    let login = {
        email: emails.value,
        password: passwords.value
    }
    console.log(login);
    try {
        supp()
        const reponse = await fetch("http://localhost:5678/api/users/login", {
            method: "POST",
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(login)
        })
        console.log("succes", reponse.status);
        if(reponse.status == 200)//vas a la page de connection
        {

        }
        else if (reponse .status == 401)//lui indique que un probleme de connection
        {
            let display =""
            display += `votre email ou votre mot de passe est incorrect`
                document.querySelector("#erreur").insertAdjacentHTML("beforeend",display)
        }
    }
    catch (error) {
        console.log("grosnull", error)
    }
})

function supp(){ 
    let erreur = document.getElementById("erreur");
    while (erreur[0].firstChild) {
        erreur[0].removeChild(erreur[0].firstChild);
    }
}
