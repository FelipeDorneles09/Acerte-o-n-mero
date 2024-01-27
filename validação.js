function verificaSeOChutePossuiValorValido (chute){
    const numero =+chute

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML +='<div>valor invalido</div>'
        return
    }

    if (numeroMaiorOuMenor(numero)){
        elementoChute.innerHTML += `<div>Valor invalido: Fale um número entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if (numero === numeroSecreto){
        document.body.innerHTML = `
            <h1>Você acertou!</h1>
            <h3>O número secreto era ${numeroSecreto}</h3>

            <button id = "jogar-novamente" class = "btn-jogar">Jogar Novamente</button>
        `
    }else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor<i class="fa-solid fa-down-long"></i></div>
        `
    }else{
        elementoChute.innerHTML += `
        <div>O número secreto é maior<i class="fa-solid fa-up-long"></i></div>
        `
    }
}

function numeroMaiorOuMenor(numero) {
    return numero > maiorValor || numero < menorValor
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})
