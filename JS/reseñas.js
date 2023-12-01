
const info_usuario = document.getElementById("info_usuario")

function mostrarCredenciales () {
  const usuarioLogueado = localStorage.getItem("usuarioLogueado")
  if (usuarioLogueado) {
    const p = document.createElement ("p")
    const boton = document.createElement ("button")
    boton.textContent("cerrar sesion")
    const usuario = JSON.parse(usuarioLogueado)
    p.textContent = `Hola ${usuario.nombre}, correo: ${usuario.email}`
    info_usuario.appendChild(p)
  }
}

mostrarCredenciales()
