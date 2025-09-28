const cursotodos = [...document.getElementsByClassName("curso")]
const cursosc1 = [...document.getElementsByClassName("c1")]
const cursosc2 = [...document.getElementsByClassName("c2")]
console.log(cursotodos)
console.log(cursosc2)

cursosc1.map((ele) => {
    ele.classList.add("destaque")
})

