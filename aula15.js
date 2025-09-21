function canal() {
    let n1 = 23.5;
    let n2 = 2;
    let res = n1 * n2;
    if (res % 2 == 0) {
        return "par"
    }
    else {
        return "impár"
    }

}

let num = 0;
for (let i = 0; i <= 3; i++) {
    console.log(canal())
    num = canal()
    console.log("valor de num")
    console.log(num)

}
