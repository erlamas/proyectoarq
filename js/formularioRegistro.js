// Mostrar el formulario de registro cuando se hace clic en el enlace
        document.getElementById('showRegisterForm').addEventListener('click', function(event) {
            event.preventDefault();
            document.getElementById('loginForm').style.display = 'none';
            document.getElementById('registerForm').style.display = 'block';
        });