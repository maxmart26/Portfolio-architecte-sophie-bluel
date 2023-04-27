var emails = document.getElementById("email");
var passwords = document.getElementById("password");
let button = document.getElementById("connection")
var compteur = 0;

button.addEventListener("click", async (e) => {// function pour ce login et demande a l'API
    e.preventDefault()
    let login = {
        email: emails.value,
        password: passwords.value
    }
    console.log(login);
    try {
        const reponse = await fetch("http://localhost:5678/api/users/login", {
            method: "POST",
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(login)
        })
        console.log("succes", reponse.status);
        if(reponse.status == 200)//vas a la page de connection
        {
            const resultat = await reponse.json()
            localStorage.setItem("token", resultat.token)
            window.location.href = "index.html"
        }
        if (reponse.status != 200 )//lui indique que il y a probleme de connection
        {
            compteur++;
            console.log(compteur);
            let display =""
            display += `<div id="erreur"><p>votre email ou votre mot de passe est incorrect</p></div>`
                document.querySelector("#probleme").insertAdjacentHTML("beforeend",display)
        }
        if ( compteur != 1)
        {
            var d = document.getElementById("probleme");
            var d_nested = document.getElementById("erreur");
            var supp = d.removeChild(d_nested)
        }
    }
    catch (error) {
        console.log("grosnull", error)
    }
})
