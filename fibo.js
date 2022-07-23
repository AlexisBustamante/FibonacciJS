console.log(fibonacc(10))
function fibonacc(num) {
    const fib = [0, 1]
    const arrResult = []
    for (let i = 2; i <= num; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]
        arrResult.push(fib[i])
    }
    return arrResult
}

//console.log(fibonacc(1))
//console.log(fibonacc(3))
//console.log(fibonacc(10))