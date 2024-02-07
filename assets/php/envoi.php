<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nom = $_POST["name"];
    $prenom = $_POST["firstname"]
    $email = $_POST["email"];
    $message = $_POST["area"];

    $destinataire = "fani.prft@gmail.com";
    $sujet = "Nouveau message depuis le formulaire de contact";

    $corps_message = "Nom: $nom\n";
    $corps_message .= "E-mail: $email\n";
    $corps_message .= "Message:\n$message";

    // En-têtes pour l'e-mail
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Envoi de l'e-mail
    mail($destinataire, $sujet, $corps_message, $headers);

    header("Location: index.html");

    echo "Le message a été envoyé avec succès.";
} else {
    echo "Une erreur s'est produite. Veuillez réessayer.";
}
?>
