const perguntasTotal = document.querySelectorAll("#questao-0, #questao-1, #questao-2, #questao-3, #questao-4, #questao-5")
const btnGeral = document.querySelectorAll(".btn-pergunta")
const btnCorreto = document.querySelectorAll(".btn-correto");
const botaoTransitar = document.querySelectorAll(".btn-transicao")
let contador = 0;

botaoTransitar[0].addEventListener("click", () => {
    alternarDiv("0", "tela-inicial")
    const duvida = document.querySelector('.btn-ajuda')
    const quizz = document.querySelector('.quiz')
    duvida.style.display = "none"
    quizz.style.marginTop = "3em"
})

for (let i = 1; i < botaoTransitar.length; i++) {
    botaoTransitar[i].addEventListener("click", () => { 
        location.href = "index.html";
    })
    
}

function alternarDiv(exibirQuestao, ocultarQuestao) {

    if (ocultarQuestao == "tela-inicial") {
        document.getElementById("tela-inicial").classList.toggle("desativar");
        perguntasTotal[0].classList.toggle("desativar");
    }
    else if (exibirQuestao == "tela-final") {
        perguntasTotal[perguntasTotal.length - 1].classList.toggle("desativar");
        document.querySelector("#tela-final").classList.toggle("desativar");
    }
    else {
        const questaoAtual = document.getElementById("questao-" + exibirQuestao);
        const proximaQuestao = document.getElementById("questao-" + ocultarQuestao);
        questaoAtual.classList.toggle("desativar");
        proximaQuestao.classList.toggle("desativar");
    }
}

function zerarRespostas(desativarRespostas) {
    const desativar = document.getElementById("questao-" + desativarRespostas);
    desativar.classList.add("desativar");
    document.getElementById("tela-game-over").classList.remove("desativar");
}

function abrirAjuda(){
    const ajuda = document.getElementById ('janela-ajuda')
    ajuda.classList.add('abrir')

    ajuda.addEventListener("click", (e) => {
        if(e.target.id == 'fechar' || e.target.id == 'janela-ajuda')
        ajuda.classList.remove('abrir')
    })
}

for (let i = 0; i < btnGeral.length; i++) {
    for (let j = 0; j < btnGeral.length; j+= 3) {
        btnGeral[i].addEventListener("click", () => {
            zerarRespostas(contador);
            contador++;
        })
    }
}

for (let i = 0; i < btnCorreto.length; i++) {
    btnCorreto[i].addEventListener("click", () => {
        if (i < btnCorreto.length - 1) {
            alternarDiv(i, i+1)
        } else if (i == btnCorreto.length - 1) {
            alternarDiv("tela-final", i)
        }
    })
}