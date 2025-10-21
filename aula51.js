const valores = [10, 8, 9, 2, 15, 4, 20, 9]
const it_Valores = valores[Symbol.iterator]()
console.log(valores)
console.log(it_Valores.next())