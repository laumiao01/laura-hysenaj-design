function sendMail(event) {
    event.preventDefault();
    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let messaggio = document.getElementById("messaggio").value.trim();

    if (!nome || !email || !messaggio) {
        alert("Per favore, compila tutti i campi.");
        return false;
    }

    let parms = { nome, email, messaggio };

    console.log("Parametri inviati:", parms); // Debug

    emailjs.send("service_design", "template_wohwkan", parms)
        .then(function(response) {
            alert("Email inviata con successo!");
            console.log("SUCCESS!", response);
            location.reload();
        }, function(error) {
            alert("Errore nell'invio dell'email. Controlla la console per maggiori dettagli.");
            console.log("FAILED...", error);
        });

    return false; // Evita il refresh della pagina
}
