// Überprüft den Admin-Code und zeigt den Admin-Bereich an
function checkAdminLogin() {
    const code = document.getElementById("adminCode").value;
    if (code === "123") {
        document.getElementById("adminPanel").style.display = "block";
        document.getElementById("adminLogin").style.display = "none";
    } else {
        alert("Falscher Code!");
    }
}

// Funktion zum Aktualisieren des Gerichts in der Benutzeransicht
function updateGericht(tag) {
    const inputElement = document.getElementById("essen" + tag + "Input");
    const gericht = inputElement.value;

    // Aktuelle Auswahl in der Benutzeransicht aktualisieren
    document.getElementById("essen" + tag + "User").innerText = gericht;

    // Wenn du auch die Auswahl speichern möchtest, kannst du localStorage verwenden:
    localStorage.setItem(tag, gericht);
}

// Funktion, die beim Laden die gespeicherten Gerichte anzeigt
function loadGerichte() {
    const tage = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"];
    tage.forEach(tag => {
        const gespeichertesGericht = localStorage.getItem(tag);
        if (gespeichertesGericht) {
            document.getElementById("essen" + tag + "User").innerText = gespeichertesGericht;
            document.getElementById("essen" + tag + "Input").value = gespeichertesGericht;
        }
    });
}

// Lädt die gespeicherten Gerichte beim Start der Seite
window.onload = function() {
    loadGerichte();
}

