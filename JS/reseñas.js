
const info_usuario = document.getElementById("info_usuario")

function mostrarCredenciales () {
  const usuarioLogueado = localStorage.getItem("usuarioLogueado")
  if (usuarioLogueado) {
    const p = document.createElement ("p")
    const boton = document.createElement ("button")

    boton.textContent = `cerrar sesion`
    boton.id = "cerrar-sesion"

    const usuario = JSON.parse(usuarioLogueado)
    p.textContent = `Hola ${usuario.nombre}, correo: ${usuario.email}`
    function infoVerificada () {
      const a = document.createElement("a")
      a.href = "./registrarse.html"
      a.click()
      p.textContent = ""
      localStorage.removeItem("usuarioLogueado")
    }
    boton.addEventListener("click",  infoVerificada)
    info_usuario.appendChild(p)
    info_usuario.appendChild(boton)
  }
}




mostrarCredenciales()



