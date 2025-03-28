<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $gerichte = implode(", ", $_POST['gericht']);

    // Hier könnte man die Bestellung in eine Datenbank einfügen oder eine E-Mail senden
    // Beispiel: Speichern in eine Textdatei
    file_put_contents("bestellungen.txt", "Name: $name\nGerichte: $gerichte\n\n", FILE_APPEND);

    echo "Ihre Bestellung wurde aufgenommen! Vielen Dank!";
}
?>
