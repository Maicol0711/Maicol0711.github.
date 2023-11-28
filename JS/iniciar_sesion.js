 const login_form = document.getElementById("#login_form");

 function inicio_sesion (event) {
    event.preventDefault()
    console.log(event)
    const formData = new FormData(event.srcEelement)
    const email = formData.get("email")
    const password = formData.get("password")

    if ( email && password ) {
        const userData = localStorage.getItem(email)

        if (!userData) {
            console.log("no hay datos")
            return
        }
        const data = JSON.parse(userData)

        const sameEmail = email === data.email
        const samePassword = password === data.password

        if (sameEmail && samePassword) {
            console.log("correcto")
            const loggedUser = { ...data, login: true}
            localStorage.setItem(email, JSON.stringify(loggedUser))
            redirectTo("./reseñas.html")
        } else {
            console.log("Datos Incorrectos")
        }
    }
 }


 function redirectTo(path) {
    const a = document.createElement("a")
    a.href = path
    a.click()
 }

 login_form.addEventListener("submit",  inicio_sesion )