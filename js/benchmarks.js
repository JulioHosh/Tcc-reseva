const tierGPU = {
    "RTX 3050": 1.0,
    "RTX 3060": 1.3,
    "RTX 4060": 1.8,
    "RTX 4070": 2.3,
    "RTX 4090": 3.8
};

const tierCPU = {
    "i3": 0.8,
    "i5": 1.0,
    "i7": 1.3,
    "i9": 1.6
};

const tierRAM = {
    "8 GB": 0.7,
    "16 GB": 1.0,
    "32 GB": 1.2,
    "64 GB": 1.4
};

function calcularFPS(pesoJogo) {
    let gpu = document.getElementById("gpu").value;
    let cpu = document.getElementById("cpu").value;
    let ram = document.getElementById("ram").value;

    let poder =
        tierGPU[gpu] * 60 +
        tierCPU[cpu] * 20 +
        tierRAM[ram] * 15;

    let fpsCalc = Math.max(10, Math.floor(poder - pesoJogo));

    let qualidade =
        fpsCalc >= 120 ? "Ultra" :
        fpsCalc >= 90  ? "Alta"  :
        fpsCalc >= 60  ? "Média" :
        fpsCalc >= 30  ? "Baixa" :
        "Muito Baixa";

    document.getElementById("fps").innerText = fpsCalc + " FPS";
    document.getElementById("qualidade").innerText = "Qualidade: " + qualidade;
}
