let maior = 0
for(let i =1; i<= 100; i++){
    if(i % 7 == 0){
        if (i > maior) {
            maior = i
        }
    }
}

console.log(maior)