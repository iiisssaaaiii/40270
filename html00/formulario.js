console.log("inicio")

function muestra(){
    let user = document.getElementById("user")
    let password = document.getElementById("password")

    console.log(user.value)
    console.log(password.value)
}

//Ejemplo de función de callback
const boton = document.getElementById("boton")
// boton.addEventListener("click", muestra)

//Ejemplo de función anónima de tipo arrow
boton.addEventListener("click",
    () => {
        let user = document.getElementById("user")
        let password = document.getElementById("password")
    
        console.log(user.value)
        console.log(password.value)

        user.setAttribute("name", "q")
        password.setAttribute("name", "c")

        let formulario = document.getElementsByTagName("form")
        formulario[0].setAttribute("action","https://www.google.com/search")
        console.log(formulario[0])
        formulario[0].submit()
    }
)
