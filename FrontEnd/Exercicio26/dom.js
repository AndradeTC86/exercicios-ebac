"use strict";
const campoNome = document.getElementById("nome");
const formulario = document.getElementsByTagName("form")[0];
const botaoEnviar = document.getElementById("enviar");
botaoEnviar === null || botaoEnviar === void 0 ? void 0 : botaoEnviar.addEventListener('click', (evento) => {
    evento.preventDefault();
});
