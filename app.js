// Base de dados exemplo (pode ser expandida com o PDF real)
const enderecos = [
  { "rua": "Rua João Mariano", "cep": "11740-970", "faixa": "115 - Centro" },
  { "rua": "Avenida Flacides Ferreira", "cep": "11740-973", "faixa": "775 - Balneário São Jorge" },
  { "rua": "Avenida Harry Forssell", "cep": "11740-972", "faixa": "1505 - Sabaúna" },
  { "rua": "Rua Emídio de Souza", "cep": "11740-975", "faixa": "2600 - Jardim Oásis" },
  { "rua": "Rua Américo Nicolini", "cep": "11740-971", "faixa": "160 - Vila São Paulo" },
  { "rua": "Avenida José Batista Campos", "cep": "11740-976", "faixa": "1314 - Laranjeiras" },
  { "rua": "Rua João Mariano", "cep": "11740-959", "faixa": "115 Clique e Retire Correios - Centro" },
  { "rua": "Avenida José Batista Campos", "cep": "11742-959", "faixa": "1314 - Laranjeiras" },
  { "rua": "Rua Radamés Incontri Filho", "cep": "11740-991", "faixa": "60" },
  { "rua": "Rua Doze", "cep": "11740-994", "faixa": "1452" },
  { "rua": "Estrada do Raminho", "cep": "11740-993", "faixa": "1995" },
  { "rua": "A (Est Ipanema)", "cep": "11752-288", "faixa": "av - Jd Anchieta" },
  { "rua": "A (Est Ipanema)", "cep": "11752-278", "faixa": "r - Jd Anchieta" },
  { "rua": "A (Pq Evelyn)", "cep": "11751-554", "faixa": "r - Jd Anchieta" },
  { "rua": "A Direita", "cep": "11743-466", "faixa": "av - Guapurá" },
  { "rua": "A Esquerda", "cep": "11743-464", "faixa": "av - Guapurá" },
  { "rua": "Abel Francisco Canjais", "cep": "11742-628", "faixa": "r - Savoy" },
];

// Normaliza texto (remove acentos, maiúsculas etc) - VERSÃO ÚNICA
function normalizar(texto) {
  if (!texto) return "";
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9 ]/g, "")
    .trim();
}

function consultarCEP() {
  const input = document.getElementById("endereco").value;
  const resultado = document.getElementById("resultado");

  resultado.innerHTML = "";

  if (!input) {
    resultado.innerText = "Digite um endereço.";
    return;
  }

  const busca = normalizar(input);

  // Busca no array de endereços
  const encontrados = enderecos.filter(e => 
    normalizar(e.rua).includes(busca)
  );

  if (encontrados.length === 0) {
    resultado.innerText = "CEP não encontrado na base local.";
    return;
  }

  // Mostra TODOS os CEPs encontrados
  encontrados.forEach(e => {
    const div = document.createElement("div");
    div.style.marginTop = "10px";
    div.innerHTML = `
      <strong>${e.rua}</strong><br>
      CEP: <strong>${e.cep}</strong><br>
      ${e.faixa ? `<small>${e.faixa}</small>` : ""}
      <hr>
    `;
    resultado.appendChild(div);
  });
}

// Registro do Service Worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("service-worker.js")
      .then(registration => {
        console.log("Service Worker registrado com sucesso:", registration);
      })
      .catch(error => {
        console.log("Falha ao registrar Service Worker:", error);
      });
  });
}
