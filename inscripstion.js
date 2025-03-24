document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Empêche l'envoi du formulaire

    // Récupérer les valeurs des champs
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Réinitialiser le message d'erreur
    document.getElementById('errorMessage').textContent = '';
    document.getElementById('errorMessage').style.display = 'none';

    // Validation côté client
    if (password !== confirmPassword) {
        document.getElementById('errorMessage').textContent = 'Les mots de passe ne correspondent pas.';
        document.getElementById('errorMessage').style.display = 'block';
        return;
    }

    if (username.length < 3) {
        document.getElementById('errorMessage').textContent = 'Le nom d\'utilisateur doit contenir au moins 3 caractères.';
        document.getElementById('errorMessage').style.display = 'block';
        return;
    }

    if (password.length < 6) {
        document.getElementById('errorMessage').textContent = 'Le mot de passe doit contenir au moins 6 caractères.';
        document.getElementById('errorMessage').style.display = 'block';
        return;
    }

    // Si tout est valide, afficher un message de succès
    alert('Inscription réussie !');
    // Rediriger vers une autre page ou effectuer une action
    window.location.href = 'login.html'; // Exemple de redirection vers la page de connexion
});