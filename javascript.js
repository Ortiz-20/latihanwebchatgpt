function validateForm() {
    // Ambil elemen form
    const form = document.getElementById('contactForm');

    // Ambil nilai field
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Ambil elemen error
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');

    // Reset pesan error
    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';

    let isValid = true;

    // Validasi nama
    if (name === '') {
        nameError.textContent = 'Nama harus diisi.';
        isValid = false;
    }

    // Validasi email
    if (email === '') {
        emailError.textContent = 'Email harus diisi.';
        isValid = false;
    } else if (!validateEmail(email)) {
        emailError.textContent = 'Format email tidak valid.';
        isValid = false;
    }

    // Validasi pesan
    if (message === '') {
        messageError.textContent = 'Pesan harus diisi.';
        isValid = false;
    }

    return isValid;
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
