const caixaCursos = document.querySelector("#CaixaCursos");
const btn_C = [...document.querySelectorAll(".curso")];
const c1_2 = document.querySelector("#c1_2");
const Cursos = ["HTML", "CSS", "JAVA", "PYTHON", "COBOL", "NODE", "ReactNative"]
const btnCursoSelecionado = document.getElementById("btnCursoSelecionado");
const btnRemoverCurso = document.getElementById("btnRemoverCurso")

Cursos.map((valor, indice) => {
    const novoelement = document.createElement("div")
    novoelement.setAttribute("id", "c" + indice);
    novoelement.setAttribute("class", "curso c1")
    novoelement.innerHTML = valor;


    const comandos = document.createElement("div");
    comandos.setAttribute("class", "comandos");

    const rb = document.createElement("input")
    rb.setAttribute("type", "radio")
    rb.setAttribute("name", "rb_curso")

    comandos.appendChild(rb)
    novoelement.appendChild(comandos)
    caixaCursos.appendChild(novoelement)

})

const radioCursoSelecionados = () => {
    const todosradios = [...document.querySelectorAll("input[type=radio]")]
    let RadioSelecionados = todosradios.filter((ele) => {
        return ele.checked
    })
    return RadioSelecionados[0]
}

btnCursoSelecionado.addEventListener("click", (evt) => {
    const rs = radioCursoSelecionados()

    if (rs != undefined) {
        const cursoSelecionado = rs.parentNode.parentNode.firstChild.textContent
        alert("Curso Selecionado : " + cursoSelecionado)

    }
    else {
        alert("Selecione um Curso ")

    }



})

btnRemoverCurso.addEventListener("click", () => {
    const rs = radioCursoSelecionados()
    try {

        const cursoSelecionado = rs.parentNode.parentNode
        cursoSelecionado.remove()
    }
    catch (ex) {
        alert("Selecione um Curso ")
    }


})