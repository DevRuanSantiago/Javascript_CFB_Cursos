const c3 = document.getElementById("c3")

c3.addEventListener("click", (ele) => {
    alert("voce clicou no id c3")
    const mudacor = ele.target
    mudacor.classList.add("destaque")
})

const c4 = document.getElementById("c4")

c4.addEventListener("click", (el) => {
    alert("voce clicou no id c4")
    const transferecor = el.target
    transferecor.classList.add("destaque")

})
