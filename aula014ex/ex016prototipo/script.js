

function contar(){
    var inicio = document.getElementById('ini')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('pas')

    var res = document.getElementById('res')

    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)

    for(i;i <= f;i+=p) {
        res.innerHTML += i
    }
}