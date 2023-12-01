 const login_form = document.querySelector("#login_form");

 function info_verificada (event){
    event.preventDefault()
    console.log(event)
    const formData = new FormData(event.srcElement)
    const email = formData.get('email')
    const password = formData.get('password')

    if (email && password) { 
        const userData = localStorage.getItem(email)
        if (!userData){
            console.log("No hay datos")
            return
        }
        const data = JSON.parse(userData)

        console.log(data)
        const emailVerificado = email === data.email
        const passwordlVerificada = password === data.password

        if ( emailVerificado && passwordlVerificada){
            console.log("correcto")
            const usuarioLogeado = {...data, login: true}
            const info_string = JSON.stringify(usuarioLogeado)
            localStorage.setItem(email, info_string)
            if ( passwordlVerificada){
                localStorage.setItem("usuarioLogueado", info_string )
            }
            infoVerificada("./reseñas.html")
        } else {
            window.alert("la contraseña esta incorrecta")
            console.log("datos incorrectos")
        }

    }

 }

 function infoVerificada (path) {
    const a = document.createElement("a")
    a.href = path
    a.click()
}









 login_form.addEventListener('submit', info_verificada)