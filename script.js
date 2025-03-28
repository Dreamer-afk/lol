// Lade die gespeicherte Umfrage beim Start
window.onload = function() {
    if (window.location.pathname.includes("admin.html")) {
        return;
    }
    
    let frage = localStorage.getItem("frage") || "Was ist deine Lieblingsfarbe?";
    let option1 = localStorage.getItem("option1") || "Blau";
    let option2 = localStorage.getItem("option2") || "Rot";

    document.getElementById("frage").innerText = frage;

    let antwortDiv = document.getElementById("antworten");
    antwortDiv.innerHTML = `
        <input type="radio" name="umfrage" value="1"> ${option1} <br>
        <input type="radio" name="umfrage" value="2"> ${option2} <br>
    `;
};

// Speichert die Antwort des Users
function speichereAntwort() {
    let antwort = document.querySelector('input[name="umfrage"]:checked');
    if (antwort) {
        document.getElementById("ergebnis").innerText = "Danke für deine Stimme!";
    } else {
        alert("Bitte wähle eine Option aus!");
    }
}

// Admin-Login prüfen
function checkLogin() {
    let code = document.getElementById("code").value;
    if (code === "123") {
        document.getElementById("adminPanel").style.display = "block";
    } else {
        alert("Falscher Code!");
    }
}

// Neue Umfrage speichern
function speichereUmfrage() {
    let frage = document.getElementById("neueFrage").value;
    let option1 = document.getElementById("option1").value;
    let option2 = document.getElementById("option2").value;

    if (frage && option1 && option2) {
        localStorage.setItem("frage", frage);
        localStorage.setItem("option1", option1);
        localStorage.setItem("option2", option2);
        alert("Neue Umfrage gespeichert!");
    } else {
        alert("Bitte fülle alle Felder aus!");
    }
}
