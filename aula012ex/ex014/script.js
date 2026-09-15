function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} Horas!`
    if (hora >= 0 && hora < 12) {
        //bomdia
        img.src = 'manha.png'
        document.body.style.background = 'yellow'
    } else if (hora >= 12 && hora < 18) {
        //boatarde
        img.src = 'tarde.png'
        document.body.style.background = 'orange'
    } else {
        //boanoiti
        img.src = 'noite.png'
        document.body.style.background = 'blue'
    }

}
