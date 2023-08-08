const perguntasTotal = document.querySelectorAll("#questao-0, #questao-1, #questao-2, #questao-3, #questao-4, #questao-5")
const btnGeral = document.querySelectorAll(".btn-pergunta")
const btnCorreto = document.querySelectorAll(".btn-correto");

function alternarDiv(exibirQuestao, ocultarQuestao) {

    if (exibirQuestao == "tela-final") {
        document.querySelector("#questao-5").classList.toggle("desativar");
        document.querySelector("#tela-final").classList.toggle("desativar");
    } else {
        const questaoAtual = document.getElementById("questao-" + exibirQuestao);
        const proximaQuestao = document.getElementById("questao-" + ocultarQuestao);
        questaoAtual.classList.toggle("desativar");
        proximaQuestao.classList.toggle("desativar");
    }
}

function abrirAjuda(){
    const ajuda = document.getElementById ('janela-ajuda')
    ajuda.classList.add('abrir')

    ajuda.addEventListener("click", (e) => {
        if(e.target.id == 'fechar' || e.target.id == 'janela-ajuda')
        ajuda.classList.remove('abrir')
    })
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

const botaoIniciar = document.getElementById("iniciarBtn")
botaoIniciar.addEventListener("click", )