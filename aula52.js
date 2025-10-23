
const caixa = document.getElementById("caixa");
let cores = ["azul", "verde", "vermelho"]
let cursos = ["HTML", "CSS", "JAVASCRIPT", ...cores]

cursos.push("c++")
cursos.push("python")
cursos.pop()
cursos.unshift("cobol")
cursos.push("Python")
cursos.push(10)
cursos.unshift(40)
cursos.shift()
console.log(cursos[0])
cursos.unshift("python")
cursos.unshift("unshift = adiciona na priemira casa")



cursos.map((el) => {
    let p = document.createElement("p")
    p.innerHTML = el
    caixa.appendChild(p)


})

console.log(cursos)
