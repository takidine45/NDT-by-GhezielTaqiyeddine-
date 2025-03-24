document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Empêche l'envoi du formulaire

    // Récupérer les valeurs des champs
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Réinitialiser les messages
    document.getElementById('successMessage').textContent = '';
    document.getElementById('successMessage').style.display = 'none';
    document.getElementById('errorMessage').textContent = '';
    document.getElementById('errorMessage').style.display = 'none';

    // Validation côté client
    if (name.trim() === '' || email.trim() === '' || subject.trim() === '' || message.trim() === '') {
        document.getElementById('errorMessage').textContent = 'Veuillez remplir tous les champs.';
        document.getElementById('errorMessage').style.display = 'block';
        return;
    }

    // Simuler l'envoi du formulaire (remplacez par une requête AJAX ou un appel API)
    setTimeout(() => {
        document.getElementById('successMessage').textContent = 'Votre message a été envoyé avec succès !';
        document.getElementById('successMessage').style.display = 'block';
        document.getElementById('contactForm').reset(); // Réinitialiser le formulaire
    }, 1000);
});