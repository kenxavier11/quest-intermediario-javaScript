
const nomeDoUsuario = document.getElementById("nome-usuario")

const emailDoUsuario = document.getElementById("email-usuario")

const telefoneDoUsuario = document.getElementById("telefone-usuario")

const mensagemDoUsuario = document.getElementById("txa-mensagem")

const btnDeEnviar = document.getElementById("btn-enviar")

const msgAviso = document.getElementsByClassName("msg-aviso")





let dadosDoUsuario = [nomeDoUsuario, emailDoUsuario, telefoneDoUsuario, mensagemDoUsuario]


function verificandoNome(){
    if (dadosDoUsuario[0].value <= 0) {
        dadosDoUsuario[0].setAttribute("required", "")
        dadosDoUsuario[0].classList.add("nao-validado")
        msgAviso[0].classList.add("msg-aparecendo")
    }else{
        dadosDoUsuario[0].classList.add("validado")
    }
}

function verificandoEmail() {
    if (dadosDoUsuario[1].value <= 0) {
        dadosDoUsuario[1].setAttribute("required", "")
        dadosDoUsuario[1].classList.add("nao-validado")
        msgAviso[1].classList.add("msg-aparecendo")
    }else{
        dadosDoUsuario[0].classList.add("validado")
    }
}

function validandoNumero() {
    if (dadosDoUsuario[2].value <= 0) {
        dadosDoUsuario[2].setAttribute("required", "")
        dadosDoUsuario[2].classList.add("nao-validado")
        msgAviso[2].classList.add("msg-aparecendo")
    }else{
        dadosDoUsuario[0].classList.add("validado")
    }
}

btnDeEnviar.addEventListener("click", () => {
    verificandoNome()
    verificandoEmail()
    validandoNumero()
})



