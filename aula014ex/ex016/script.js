

function contar(){
    var inicio = document.getElementById('ini')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('pas')

    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)

    for(i;f;p) {
        alert(i)
    }
}