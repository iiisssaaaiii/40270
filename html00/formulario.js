console.log("inicio")

function muestra(){
    let user = document.getElementById("user")
    let password = document.getElementById("password")

    console.log(user.value)
    console.log(password.value)

}

//Ejemplo de funcion de callback
//Cuando la funcion es de callback no lleva parentesis

const boton = document.getElementById("boton")
/* boton.addEventListener("click", muestra) */

// Ejemplo de fucion anonima de tipo arrow
boton.addEventListener("click", 
    ()=>{
        let user = document.getElementById("user")
        let password = document.getElementById("password")

        console.log(user.value)
        console.log(password.value)
    }
)