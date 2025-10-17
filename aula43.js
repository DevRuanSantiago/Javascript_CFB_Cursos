const caixaCursos = document.querySelector("#CaixaCursos");
const btn_C = [...document.querySelectorAll(".curso")];
const c1_2 = document.querySelector("#c1_2");
const Cursos = ["HTML", "CSS", "JAVA", "PYTHON", "COBOL", "NODE", "ReactNative"]
const btnCursoSelecionado = document.getElementById("btnCursoSelecionado");

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

btnCursoSelecionado.addEventListener("click", (evt) => {
    const todosradios = [...document.querySelectorAll("input[type=radio]")]
    let radioselecionados = todosradios.filter((ele) => {
        return ele.checked
    })
    radioselecionados = radioselecionados[0]
    const cursoSelecionado = radioselecionados.parentNode.parentNode.firstChild.textContent
    console.log(todosradios)
    console.log(radioselecionados)
    console.log(cursoSelecionado)
})