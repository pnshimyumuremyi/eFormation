document.getElementById('trainingRequestForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire
    
    let hasError = false;

    // Réinitialiser les messages d'erreur
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(function(message) {
        message.style.display = 'none';
    });

    // Validation du nom de l'employé
    const employeeName = document.getElementById('employeeName');
    if (employeeName.value === "") {
        document.getElementById('employeeNameError').textContent = "Veuillez sélectionner un nom d'employé.";
        document.getElementById('employeeNameError').style.display = 'block';
        hasError = true;
    }

    // Validation du gestionaire
    const gestionaire = document.getElementById('gestionaire');
    if (gestionaire.value === "") {
        document.getElementById('gestionaireError').textContent = "Veuillez sélectionner un gestionaire.";
        document.getElementById('gestionaireError').style.display = 'block';
        hasError = true;
    }

    // Validation du fournisseur
    const provider = document.getElementById('provider');
    if (provider.value === "") {
        document.getElementById('providerError').textContent = "Veuillez saisir le fournisseur tierce partie.";
        document.getElementById('providerError').style.display = 'block';
        hasError = true;
    }

    // Validation du code du cours
    const courseCode = document.getElementById('courseCode');
    if (courseCode.value === "") {
        document.getElementById('courseCodeError').textContent = "Veuillez saisir le code du cours.";
        document.getElementById('courseCodeError').style.display = 'block';
        hasError = true;
    }

    // Validation du titre du cours
    const courseTitle = document.getElementById('courseTitle');
    if (courseTitle.value === "") {
        document.getElementById('courseTitleError').textContent = "Veuillez saisir le titre du cours.";
        document.getElementById('courseTitleError').style.display = 'block';
        hasError = true;
    }

    // Validation de la date limite d'inscription
    const deadline = document.getElementById('deadline');
    if (deadline.value === "") {
        document.getElementById('deadlineError').textContent = "Veuillez saisir la date limite d'inscription.";
        document.getElementById('deadlineError').style.display = 'block';
        hasError = true;
    }

    // Validation de la catégorie
    const category = document.getElementById('category');
    if (category.value === "") {
        document.getElementById('categoryError').textContent = "Veuillez sélectionner une catégorie.";
        document.getElementById('categoryError').style.display = 'block';
        hasError = true;
    }

    // Validation de la modalité pédagogique
    const modality = document.getElementById('modality');
    if (modality.value === "") {
        document.getElementById('modalityError').textContent = "Veuillez sélectionner une modalité pédagogique.";
        document.getElementById('modalityError').style.display = 'block';
        hasError = true;
    }

    // Validation de la langue du cours
    const language = document.getElementById('language');
    if (language.value === "") {
        document.getElementById('languageError').textContent = "Veuillez sélectionner une langue.";
        document.getElementById('languageError').style.display = 'block';
        hasError = true;
    }

    // Validation de la durée du cours
    const duration = document.getElementById('duration');
    if (duration.value === "" || duration.value <= 0) {
        document.getElementById('durationError').textContent = "Veuillez saisir la durée du cours en heures.";
        document.getElementById('durationError').style.display = 'block';
        hasError = true;
    }

    // Validation des frais du cours
    const fees = document.getElementById('fees');
    if (fees.value === "" || fees.value <= 0) {
        document.getElementById('feesError').textContent = "Veuillez saisir les frais du cours en CAD.";
        document.getElementById('feesError').style.display = 'block';
        hasError = true;
    }

    // Validation de la date de début du cours
    const startDate = document.getElementById('startDate');
    if (startDate.value === "") {
        document.getElementById('startDateError').textContent = "Veuillez saisir la date de début du cours.";
        document.getElementById('startDateError').style.display = 'block';
        hasError = true;
    }

    if (!hasError) {
        document.getElementById('successMessage').style.display = 'block';
        alert("Bonjour Arold Tiajio  a soumi une demande de formation merci de bien vouloir la consulter!");
        setTimeout(function() {
            document.getElementById('successMessage').style.display = 'none';
          }, 3000);
    }
});