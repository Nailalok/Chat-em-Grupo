//Login
const form = document.querySelector(".card_login");
const telaLogin = document.querySelector(".tela_login");
const nome = document.querySelector("#nome");

//Chat
const geral = document.querySelector(".geral");
const telaMensagens = document.querySelector(".tela_mensagens");
const texto = document.querySelector("#texto");
const enviar = document.querySelector("#img_enviar");
const notification = document.querySelector("#notific");
const notificMsg = document.querySelector("#notific_msg");

let ht = 35;
let pb = 45;
let ch = 34;

const handleSubmit = (e) => {
    e.preventDefault();
    if(nome.value.length > 1){
        telaLogin.style.display = "none";
        geral.style.display = "flex";
        notification.style.display = "flex";
        notificMsg.innerHTML = nome.value+" "+"juntou-se!";
        setTimeout(function() {
            notification.style.display = "none";
        }, 2000);
    }
    else{
        nome.placeholder = "Preencha";
    }
}
let dn = "eu";
const enviarMsg = () => {
    if(dn === "eu"){
        if(texto.value.length > 0){
            const minhaMsg = document.createElement("div");
            minhaMsg.classList.add("minha_mensagem");
            let horas = new Date().getHours();
            if(horas < 10){
                horas = "0"+horas;
            }
            let minutos = new Date().getMinutes();
            if(minutos < 10){
                minutos = "0"+minutos;
            }
            minhaMsg.innerHTML = `<span id="msg">${texto.value}<span>`
            telaMensagens.appendChild(minhaMsg);
            texto.value = "";
            texto.style.height = 35+"px";
            telaMensagens.style.paddingBottom = 45+"px";
        }
        ht = 35;
        pb = 45;
        dn = "outro";
    }
}

const receberMsg = () => {
    if(dn === "outro" && texto.value.length > 0){
        const msgAlheia = document.createElement("div");
        msgAlheia.classList.add("mensagem_alheia");
        let horas = new Date().getHours();
        if(horas < 10){
            horas = "0"+horas;
        }
        let minutos = new Date().getMinutes();
        if(minutos < 10){
            minutos = "0"+minutos;
        }
        msgAlheia.innerHTML = `<span id="nome_alheio">${nome.value}</span><span id="msg">${texto.value}</span>`
        telaMensagens.appendChild(msgAlheia);
        texto.value = "";
        texto.style.height = 35+"px";
        telaMensagens.style.paddingBottom = 45+"px";
        ht = 35;
        pb = 45;
        dn = "eu";
    }
    
}

enviar.addEventListener("click", enviarMsg);
enviar.addEventListener("click", receberMsg);
texto.addEventListener("keypress", (e) => {
    if(e && ht < 120 || texto.value.length > ch){
        ch += 34;
        ht += 17;
        pb += 17;
        telaMensagens.style.paddingBottom = pb+"px";
        texto.style.height = ht+"px";
    }
    
})
texto.addEventListener("input", () => {

    if(texto.value.length > ch && ht < 120){
        ch += 34;
        ht += 17;
        pb += 17;
        telaMensagens.style.paddingBottom = pb+"px";
        texto.style.height = ht+"px";
    }
    
});

form.addEventListener("submit", handleSubmit);