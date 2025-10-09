const caixa1 = document.querySelector("#caixa1");
const colecaoCurs = [...document.querySelectorAll(".curso")];
const c1_2 = document.querySelector(".c1_2");
const novoelement = document.createElement("div");

const Cursos = ["HTML", "CSS", "JAVA", "PYTHON", "COBOL", "NODE", "ReactNative"]
Cursos.map((ele, chave) => {

    const novoelement = document.createElement("div");
    novoelement.setAttribute("id", "c" + chave);
    novoelement.setAttribute("class", "curso c1");
    novoelement.innerHTML = ele;
    caixa1.appendChild(novoelement)
})