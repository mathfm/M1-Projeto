let btnResposta = document.querySelectorAll("#questao-0 .btn-pergunta")
let questaoUm = document.getElementById("questao-0")
let questaoDois = document.getElementById("questao-1")
let perguntasTotal = document.querySelectorAll("#questao-0, #questao-1, #questao-2, #questao-3, #questao-4, #questao-5")
let btnGeral = document.querySelectorAll(".btn-pergunta")


//let auxBtn = 0;





function alternarDiv(exibirQuestao, ocultarQuestao) {
    let questaoAtual = document.getElementById("questao-" + exibirQuestao)
    let proximaQuestao = document.getElementById("questao-" + ocultarQuestao);

    questaoAtual.classList.remove("desativar");
    proximaQuestao.classList.add("desativar")
}

function abrirAjuda(){
    const ajuda = document.getElementById ('janela-ajuda')
    ajuda.classList.add('abrir')

    ajuda.addEventListener("click", (e) => {
        if(e.target.id == 'fechar' || e.target.id == 'janela-ajuda')
        ajuda.classList.remove('abrir')
    })
}








/*
for (let i = 0; i < perguntasTotal.length; i++) {
    
    for (let j = 0; j < btnGeral.length/perguntasTotal.length; j++) {
        
        

    }
    
}



for (let i = 0; i < btnResposta.length; i++) {
    
    btnResposta[i].addEventListener("click", () => {
        questaoUm.classList.toggle('desativar')
        questaoDois.classList.toggle('desativar')
    }
    
)}


for (let i = 0; i < perguntasTotal.length; i++) {
    for (let j = 0; j < btnGeral.length; j++) {
        auxBtn++;
        if (j < 4) {
            if (i == 0) {
                btnGeral[j].addEventListener("click", () => {
                    perguntasTotal[i].classList.toggle("desativar")
                    perguntasTotal[i+1].classList.toggle("desativar")
                })
            } 
        }
    }
    
}
*/






