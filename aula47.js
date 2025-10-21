const p_array = document.getElementById("array")
const p_pesquisar = document.getElementById("txt_pesquisar")
const p_BtnPesquisar = document.getElementById("btnPesquisar")
const p_resultado = document.getElementById("resultado")

const elementos_array = [21, 25, 19, 20, 16, 20, 18]
p_array.innerHTML = "[" + elementos_array + "]"





p_BtnPesquisar.addEventListener("click", (evt) => {
    const ret = elementos_array.find((e, i) => {
        p_resultado.innerHTML = "Valor não encontrado"

        if (e.toUpperCase() == p_pesquisar.value.toUpperCase()) {
            p_resultado.innerHTML = "Valor pesquisado == " + e.toUpperCase() + " Na posição " + i
            return e
        }

    })


    console.log(ret)
})