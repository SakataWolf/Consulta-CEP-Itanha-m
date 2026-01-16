// Base de dados exemplo (pode ser expandida com o PDF real)
const enderecos = [
{ rua: "Avenida Rui Barbosa", cep: "11740-000" },
{ rua: "Rua Cunha Moreira", cep: "11740-120" },
{ rua: "Rua Antônio Olívio de Araújo", cep: "11740-210" }
];


function normalizar(texto) {
return texto.toLowerCase().normalize("NFD").replace(/[^a-z0-9 ]/g, "");
}


function consultarCEP() {
const input = document.getElementById("endereco").value;
const resultado = document.getElementById("resultado");


if (!input) {
resultado.innerText = "Digite um endereço.";
return;
}


const busca = normalizar(input);


const encontrado = enderecos.find(e => busca.includes(normalizar(e.rua)));


if (encontrado) {
resultado.innerText = `CEP encontrado: ${encontrado.cep}`;
} else {
resultado.innerText = "CEP não encontrado na base local.";
}
}


// Registro do Service Worker
if ('serviceWorker' in navigator) {
navigator.serviceWorker.register('service-worker.js');
}