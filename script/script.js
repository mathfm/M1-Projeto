let btnResposta = document.querySelectorAll("#questao-1 .resposta")
let questaoUm = document.getElementById("questao-1")
let questaoDois = document.getElementById("questao-2")


for (let i = 0; i < btnResposta.length; i++) {
    
    btnResposta[i].addEventListener("click", () => {
        questaoUm.classList.toggle('desativar')
        questaoDois.classList.toggle('desativar')
    }
    
)}





