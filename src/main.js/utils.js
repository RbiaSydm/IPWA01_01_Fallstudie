// Funktion, die gefährliche Zeichen aus der Eingabe entfernt
function safeInput(input) {
    // Ersatz gefährliche Zeichen durch Platzhalter
    return input.replace(/[<>"'\/]/g, '');
}

// Eine Funktion, die die DataTable mit einer sicheren Suche einrichtet
function setupSearch(tableId, searchInputId) {
    // Initialisiere die DataTable
    const table = $(tableId).DataTable();

    // Eingabe in die Suchleiste durch Nutzer
    $(searchInputId).on('input', function () {
        // Die Eingabe wird bereinigt
        const cleanInput = safeInput($(this).val());

        // Die bereinigte Eingabe wird anschließend zum Suchen verwendet
        table.search(cleanInput).draw();
    });
}

// Warten, bis die Seite fertig geladen ist
document.addEventListener('DOMContentLoaded', function () {
    // Suche für die Emissionen-Tabelle einrichten
    setupSearch('#table', '#datatable-search');
});