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

    const btn_lixeira = document.createElement("Img")
    btn_lixeira.setAttribute("src", "https://cdn-icons-png.flaticon.com/512/73/73806.png")
    btn_lixeira.setAttribute("class", "btn_lixeira")
    novoelement.appendChild(btn_lixeira)
    btn_lixeira.addEventListener("click", (evt) => {
        caixa1.removeChild(evt.target.parentNode)
    })
    caixa1.appendChild(novoelement)

})