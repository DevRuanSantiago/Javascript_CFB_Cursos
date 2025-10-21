const p_array = document.getElementById("array")
const p_BtnVerificar = document.getElementById("btnVerificar")
const p_resultado = document.getElementById("resultado")


const elementos_array = [21, 25, 19, 20, 90, 18, 0]
p_array.innerHTML = "[" + elementos_array + "]"
p_BtnVerificar.addEventListener("click", (evt) => {
    p_resultado.innerHTML = "Array não conforme"

    const conforme = elementos_array.some((e, i) => {

        if (e < 18) {
            p_resultado.innerHTML = "Array não conforme Na posição == " + i + " e valor -- " + e

        }

        return e >= 18

    })

    if (conforme == true) {
        p_resultado.innerHTML = "OK"
    }




})