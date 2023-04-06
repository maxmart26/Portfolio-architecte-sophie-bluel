
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
        const reponse = await fetch("http://localhost:5678/api/users/login", {
            method: "POST",
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(login)
        })
        const result = reponse.json()
        console.log("succes", result);
    }
    catch (error) {
        console.log("grosnull", error)
    }
})


