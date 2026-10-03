let num = document.getElementById('inum')
let iadd = document.getElementById('iadd')
iadd.addEventListener('click', add)
let res = document.getElementById('res')

let numbers = []
function add(){
    let n = Number(num.value)
    if (!numbers.includes(n) && n <= 100){
        numbers.push(n)
        res.innerHTML += `<p>Numero ${n}</p>`
    } else if (n > 100) {
        alert('maior q 100')
        // Maior que 100
    } else {
        alert('ja tem')
        // Ja tem na Array
    }
}