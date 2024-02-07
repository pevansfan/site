document.addEventListener('DOMContentLoaded', function() {
    // Récupère la valeur stockée dans le stockage local
    var storedEmail = localStorage.getItem('email');

    // Affiche la valeur dans le paragraphe avec l'id "resultText"
    document.getElementById('emailAccount').innerText = storedUsername;
});

