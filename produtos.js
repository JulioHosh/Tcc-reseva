// BASE DE DADOS DOS JOGOS
const jogos = {
    "enigma": {
        nome: "Enigma do Medo",
        preco: "65,00",
        descricao: "Um jogo brasileiro de investigação paranormal com atmosfera intensa.",
        imagens: [
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjhmh4miSysrXEPDFvkJlvXKFmkWfUdVbRWPH4fOvZYJ-xuIMxQ8ARazIFtBi9gJfF8dlSUxA7ogS2CH0bzl3nX5hTruHbj0R3BWlgzsAjcHlrY29lyzfreWBEJYVN3im_zdrkPTNGkMHHROUOiYzZc3cf9zt4-ZFwhhHLb0aHuctBXgvCCeqqxaDq4PF4/s616/capsule_616x353_brazilian.jpg"
        ]
    },

    "rdr2": {
        nome: "Red Dead Redemption 2",
        preco: "74,97",
        descricao: "A obra-prima da Rockstar Games. Explore o velho oeste com gráficos incríveis.",
        imagens: [
            "https://tse2.mm.bing.net/th/id/OIP.PAMAYcXmDJERYIxPowXyYAHaEq"
        ]
    }
};


// --- PEGAR ID DA URL ---
const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const jogo = jogos[id];

// --- PREENCHER A PÁGINA ---
document.getElementById("titulo").innerText = jogo.nome;
document.getElementById("descricao").innerText = jogo.descricao;
document.getElementById("preco").innerText = jogo.preco;

// Galeria
document.getElementById("main-img").src = jogo.imagens[0];

const thumbs = document.getElementById("thumbs");
jogo.imagens.forEach(img => {
    const t = document.createElement("img");
    t.src = img;
    t.className = "thumb";
    t.onclick = () => document.getElementById("main-img").src = img;
    thumbs.appendChild(t);
});


// --- SISTEMA DE BENCHMARK ---
function calcularFPS() {
    const gpu = document.getElementById("gpu").value;
    const cpu = document.getElementById("cpu").value;
    const ram = parseInt(document.getElementById("ram").value);

    let base = 40; // FPS padrão

    // GPU influencia mais
    if (gpu === "3050") base += 20;
    if (gpu === "3060") base += 35;
    if (gpu === "4060") base += 55;
    if (gpu === "1070") base += 10;
    if (gpu === "1650") base -= 10;

    // CPU
    if (cpu === "i5") base += 10;
    if (cpu === "i7") base += 20;

    // RAM
    if (ram >= 16) base += 10;
    if (ram >= 32) base += 15;

    document.getElementById("resultado-fps").innerText = 
        `Estimativa: ~${base} FPS em média`;
}
