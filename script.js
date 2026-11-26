const d = new Date(2027, 5, 26);

function dopiszZero(x) {
    if (x < 10) {
        return "0" + x;
    }
    return String(x);
}

function pokazZegar() {
    const teraz = new Date();
    const g = dopiszZero(teraz.getHours());
    const m = dopiszZero(teraz.getMinutes());
    const s = dopiszZero(teraz.getSeconds());
    document.getElementById("zegar").textContent = g + ":" + m + ":" + s;
}

function pokazDate() {
    const teraz = new Date();
    document.getElementById("data").textContent = teraz.toLocaleDateString("pl-PL");
}

function policz(a, b) {
    const r = b - a;
    return Math.ceil(r / 86400000);
}

function pokazDni() {
    document.getElementById("dni").textContent = policz(new Date(), d);
}

function powitanie(godzina) {
    if (godzina >= 18 || godzina < 5) {
        return "Dobry wieczór!";
    }
    return "Dzień dobry!";
}

const godzina = new Date().getHours();
document.getElementById("powitanie").textContent = powitanie(godzina);

pokazDate();
pokazZegar();
pokazDni();
setInterval(pokazZegar, 1000);