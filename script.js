/**
 * Dopisuje zero
 * @param(number) zmienna liczba
 * @return(number) dodaje zero do liczby
 * @author Filip Bąk
 */

function dopiszZero(liczba) {
    if (liczba < 10) {
        return "0" + liczba;
    }
    return String(liczba);
} 

const DATA_WAKACJI = new Date(2027,5,26);
function powitanie(godzina) {
    if(godzina>=18 || godzina < 5) {
        return "Dobry Wieczór!";
    }
    return "Dzień Dobry!";
}


/**
 * Pokazuje zegar
 * @author Filip Bąk
 */

function pokazZegar() {
    const teraz = new Date();
    const godziny = dopiszZero(teraz.getHours());
    const minuty = dopiszZero(teraz.getMinutes());
    const sekundy = dopiszZero(teraz.getSeconds());
    document.getElementById("zegar").textContent = godziny + ":" + minuty + ":" + sekundy; 

}

/**
 * Pokazuje date
 * @author Filip Bąk
 */

function pokazDate() {
    const teraz = new Date();
    document.getElementById("data").textContent = teraz.toLocaleDateString("pl-PL");
    document.getElementById("dzien").textContent = teraz.toLocaleDateString("pl-PL",{
        weekday: "long"
    });
}

/**
 * Oblicza dni do daty
 * @param (number) zmienna DataOd - początkowa data
 * @param(number) zmienna DataDo - końcowa data
 * @author Filip Bąk
 */


function ileDniDo(DataOd,DataDo) { 
    const roznicaMs = DataDo - DataOd;
    return Math.ceil(roznicaMs / 86400000);
}

console.log(ileDniDo(new Date(), DATA_WAKACJI));

function pokazDni() {
    document.getElementById("dni").textContent = ileDniDo(new Date(), DATA_WAKACJI);
}

pokazDate();
pokazZegar();
pokazDni();
setInterval(pokazZegar, 1000);

const godzina = new Date().getHours();
document.getElementById("powitanie")
    .textContent = powitanie(godzina);