# 📮 Consulta CEP – Itanhaém (PWA)

Aplicação **web progressiva (PWA)** criada para facilitar a consulta de **CEPs de ruas e bairros de Itanhaém/SP**, especialmente após as recentes alterações oficiais que fizeram algumas ruas passarem a ter **mais de um CEP**, dependendo da faixa de numeração.

O sistema funciona **offline**, é **instalável** e permite buscar ruas **mesmo sem acentos**, retornando **todos os CEPs correspondentes**.

🔗 Repositório: [https://github.com/SakataWolf/Consulta-CEP-Itanhaem](https://github.com/SakataWolf/Consulta-CEP-Itanhaem)

---

## ✨ Funcionalidades

* 🔍 Busca por nome da rua (com ou sem número)
* 🔤 Normalização de texto (sem acentos e sem diferenciação de maiúsculas)
* 🧩 Suporte a ruas com **mais de um CEP**
* 📋 Botão **Copiar CEP** (rua + CEP + bairro)
* ⚡ Busca otimizada (não trava com entradas genéricas)
* 📱 Aplicativo **PWA instalável**
* 🌐 Funciona **offline**

---

## 🗂 Estrutura de Arquivos

```
/consulta-cep-itanhaem
 ├── index.html          # Interface da aplicação
 ├── style.css           # Estilos visuais
 ├── app.js              # Lógica da aplicação
 ├── manifest.json       # Configuração do PWA
 └── service-worker.js   # Cache e funcionamento offline
```

---

## 🧠 Como funciona a busca

* O texto digitado é **normalizado**
* Palavras muito curtas são ignoradas (`a`, `e`, `de`, etc.)
* A busca é feita por **palavras-chave**
* Todas as correspondências são retornadas
* Caso a rua tenha mais de um CEP, todos são exibidos com suas respectivas faixas

---

## 🚀 Como usar

### 1️⃣ Clonar o repositório

```bash
git clone https://github.com/SakataWolf/Consulta-CEP-Itanhaem
```

### 2️⃣ Executar localmente

Abra os arquivos usando:

* um servidor local (ex: Live Server no VS Code)
* ou hospede no **GitHub Pages**

⚠️ O PWA funciona corretamente apenas em ambiente servido (não via `file://`).

---

### 3️⃣ Instalar como aplicativo

No navegador:

* Clique em **“Instalar aplicativo”**
* O app ficará disponível como um aplicativo nativo
* Funciona offline após o primeiro carregamento

---

## 🛠 Tecnologias utilizadas

* HTML5
* CSS3
* JavaScript (Vanilla)
* PWA (Service Worker + Manifest)
* API Clipboard (copiar CEP)

---

## 📌 Exemplo de texto copiado

```
Rua: José Marques
CEP: 11742-660
Bairro: Savoy
```

---

## 🤝 Contribuições

Sugestões, melhorias e feedbacks são muito bem-vindos!
Sinta-se à vontade para abrir uma **issue** ou **pull request**.

---

## 👨‍💻 Autor

**Alison Bruno (Sakata)**
Desenvolvedor em formação focado em soluções práticas para problemas reais.
