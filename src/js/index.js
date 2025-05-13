
const nomeDoUsuario = document.getElementById("nome-usuario")

const emailDoUsuario = document.getElementById("email-usuario")

const telefoneDoUsuario = document.getElementById("telefone-usuario")

const mensagemDoUsuario = document.getElementsByClassName("txa-mensagem")

const btnDeEnviar = document.getElementById("btn-enviar")

const msgAviso = document.getElementsByClassName("msg-aviso")

let dadosDoUsuario = [nomeDoUsuario, emailDoUsuario, telefoneDoUsuario, mensagemDoUsuario]
let mensagemQueOhUsuarioDigitou = mensagemDoUsuario[0].value
function verificandoNome(){
    if (dadosDoUsuario[0].value <= 0) {
        dadosDoUsuario[0].setAttribute("required", "")
        dadosDoUsuario[0].classList.add("nao-validado")
        msgAviso[0].classList.add("msg-aparecendo")
    }
}

function verificandoEmail() {
    if (dadosDoUsuario[1].value <= 0) {
        dadosDoUsuario[1].setAttribute("required", "")
        dadosDoUsuario[1].classList.add("nao-validado")
        msgAviso[1].classList.add("msg-aparecendo")
    }
}

function validandoNumero() {
    if (dadosDoUsuario[2].value <= 0) {
        dadosDoUsuario[2].setAttribute("required", "")
        dadosDoUsuario[2].classList.add("nao-validado")
        msgAviso[2].classList.add("msg-aparecendo")
    }

function validandoAhMensagemDoUsuario() {
    if (mensagemDoUsuario[0].value <= 0) {
    mensagemDoUsuario[0].setAttribute("required", "")
    mensagemDoUsuario[0].classList.add("nao-validado")
    msgAviso[3].classList.add("msg-aparecendo")
}
}
 validandoAhMensagemDoUsuario()
}
function verificandoForm() {
    verificandoNome();
    verificandoEmail();
    validandoNumero();
}

btnDeEnviar.addEventListener("click", () => {
    verificandoForm()
    validandoAhMensagemDoUsuario()
})



