const form = document.querySelector('#formulario_de_contacto'); 


function info_guardada (event) {
    event.preventDefault()
    console.log(event)
    const formData = new FormData(event.srcElement)
    const nombre = formData.get('nombre')
    const apellido = formData.get('apellido')
    const email = formData.get('email')
    const password = formData.get('password')

    if (nombre && apellido && email && password) { 
        const userData = { nombre, email, email, password ,login: false }
        console.log(userData)
        const str = JSON.stringify(userData)
        console.log(str)
        localStorage.setItem(email, str)

        redirectTo("./iniciar_sesion.html")
    }
}


function redirectTo (path) {
    const a = document.createElement("a")
    a.href = path
    a.click()
}


form.addEventListener('submit', info_guardada)

