function parimpar(n) {
    if (n % 2 == 0) {
        return 'Par!'
    } else {
        return 'Ímpar'
    }
}

function soma (n1=0, n2=0) {
    return n1 + n2
}

let v = function(x) {
    return x*2
}

function fatorial(n) {
    let fat = 1
    for (let c = n; c > 1; c = c - 1) {
        fat = fat * c
    }
    return fat
}

function fatorial_recursivo(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}


