const caixa1 = document.querySelector("#caixa1")
const caixa2 = document.querySelector("#caixa2")
const btn = document.querySelector("#btn_copiar")

const todoscursos = [...document.querySelectorAll(".curso")]

todoscursos.map((ele) => {
    ele.addEventListener("click", (evt) => {
        const targetado = evt.target
        targetado.classList.toggle("selecionado")


    })
})
btn.addEventListener("click", () => {
    const CursosSelecionados = [..document.querySelectorAll(".selecionado")]
    console.log(CursosSelecionados)
    CursosSelecionados.map((ele) => {
        caixa2.appendChild(el)
    })

})