const caixaCursos = document.querySelector("#CaixaCursos");
const btn_C = [...document.querySelectorAll(".curso")];
const c1_2 = document.querySelector("#c1_2");
const Cursos = ["HTML", "CSS", "JAVA", "PYTHON", "COBOL", "NODE", "ReactNative"]
const btnCursoSelecionado = document.getElementById("btnCursoSelecionado");
const btnRemoverCurso = document.getElementById("btnRemoverCurso")
const btnAdicionarNovoCursoAntes = document.getElementById("btnAdicionarNovoCursoAntes")
const btnAdicionarNovoCursoDepois = document.getElementById("btnAdicionarNovoCursoDepois")
const nomeCurso = document.getElementById("nomeCurso")


let idc = 0;

const TirarSeleção = () => {
    const cursoSelecionados = [...document.querySelectorAll(".Selecionado")];
    cursoSelecionados.map((evt) => {
        evt.classList.remove("Selecionado")
    })


}

const CriarNovoCurso = (curso) => {

    const novoelement = document.createElement("div")
    novoelement.setAttribute("id", "c" + idc);
    novoelement.setAttribute("class", "curso c1")
    novoelement.innerHTML = curso;
    novoelement.addEventListener("click", (evt) => {
        TirarSeleção()
        evt.target.classList.toggle("Selecionado")

    })
    idc++

    return novoelement

}

Cursos.map((valor, indice) => {

    const CriarNovoElemento = CriarNovoCurso(valor)

    caixaCursos.appendChild(CriarNovoElemento)


})

const CursoSelecionado = () => {
    const cursosSelecionadoss = [...document.querySelectorAll(".Selecionado")]

    return cursosSelecionadoss[0]
}

btnCursoSelecionado.addEventListener("click", (evt) => {


    try {
        alert("Curso Selecionado : " + CursoSelecionado().innerHTML)

    }
    catch (ex) {
        alert("Selecione um Curso ")

    }



})

btnRemoverCurso.addEventListener("click", () => {
    rs = CursoSelecionado()

    if (rs != undefined) {

        rs.remove()
    }
    else {
        alert("Selecione um Curso")
    }


})

btnAdicionarNovoCursoAntes.addEventListener("click", (evt) => {




    try {

        if (nomeCurso.value != "") {

            const CriarNovoElemento = CriarNovoCurso(nomeCurso.value)




            caixaCursos.insertBefore(CriarNovoElemento, CursoSelecionado())

        }
        else {
            alert("digite um curso ")

        }
    }
    catch (ex) {
        alert("Selecione um Curso")

    }


})

btnAdicionarNovoCursoDepois.addEventListener("click", (evt) => {
    try {
        if (nomeCurso.value != "") {
            const cursoSelecionado = CursoSelecionado()
            const CriarNovoElemento = CriarNovoCurso(nomeCurso.value)

            caixaCursos.insertBefore(CriarNovoElemento, cursoSelecionado.nextSibling)
        } else {
            alert("Digite um curso")
        }
    } catch (ex) {
        alert("Selecione um curso")
    }
})