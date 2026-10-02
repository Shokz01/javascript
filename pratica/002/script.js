let area = document.getElementById('area')
let c = 0
let res = document.getElementById('res')
function clique() {
    c += 1
    res.innerHTML = `O total de cliques foi ${c}`
    
}
function apertou() {
    area.style.background = 'green'
}

function soltou() {
    area.style.background = 'cyan'
}