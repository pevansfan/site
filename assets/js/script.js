document.addEventListener("DOMContentLoaded", function () {
    // Retour en haut de la page lors du clic sur "Accueil" dans la barre de navigation
    const accueilLink = document.querySelector('a[href="#home"]');
    accueilLink.addEventListener("click", function (event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});

function showPopup() {
    document.getElementById('popup').style.display = 'flex';
    setTimeout(function () {
        document.getElementById('popup').style.display = 'none';
    }, 2000);
}

function account() {
    document.querySelector('.btn-signup').style.display = 'none'
    document.querySelector('.user-account').style.display = 'block'
}

function toggleMenu() {
    var navList = document.querySelector('.nav-list');
    navList.classList.toggle('show');
}
