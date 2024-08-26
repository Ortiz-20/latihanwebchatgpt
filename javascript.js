document.getElementById('contactForm').addEventListener('submit', function(event) {
    let isValid = true;

    // Clear previous errors
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('messageError').textContent = '';

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validate name
    if (name === '') {
        document.getElementById('nameError').textContent = 'Nama harus diisi.';
        isValid = false;
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        document.getElementById('emailError').textContent = 'Email harus diisi.';
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Format email tidak valid.';
        isValid = false;
    }

    // Validate message
    if (message === '') {
        document.getElementById('messageError').textContent = 'Pesan harus diisi.';
        isValid = false;
    }

    // Prevent form submission if not valid
    if (!isValid) {
        event.preventDefault();
    }
});
</script>