document.addEventListener("DOMContentLoaded", () => {
    const sideMenu = document.getElementById("sideMenu");
    const openBtn = document.getElementById("openMenuBtn");
    const closeBtn = document.getElementById("closeMenuBtn");
    
    // Variabile per memorizzare il timer della pulsazione
    let pulseTimeout;

    // All'avvio della pagina, aggiungiamo subito la classe per farla pulsare
    if (openBtn) {
        openBtn.classList.add("pulsing");
    }

    if (openBtn && sideMenu) {
        openBtn.addEventListener("click", (e) => {
            // 1. Apre il menu
            sideMenu.style.left = "0";
            e.stopPropagation();
            
            // 2. Ferma la pulsazione rimuovendo la classe
            openBtn.classList.remove("pulsing");
            
            // 3. Cancella eventuali timer precedenti (utile se l'utente clicca velocemente più volte)
            clearTimeout(pulseTimeout);
            
            // 4. Imposta un timer per far ripartire la pulsazione dopo 10 secondi (10000 millisecondi)
            pulseTimeout = setTimeout(() => {
                openBtn.classList.add("pulsing");
            }, 10000);
        });
    }

    // Chiusura del menu tramite la X
    if (closeBtn && sideMenu) {
        closeBtn.addEventListener("click", () => {
            sideMenu.style.left = "-250px";
        });
    }

    // Chiusura del menu cliccando fuori da esso
    document.addEventListener("click", (e) => {
        if (sideMenu && !sideMenu.contains(e.target) && sideMenu.style.left === "0px") {
            sideMenu.style.left = "-250px";
        }
    });
});