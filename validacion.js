// validation.js

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.formcontato__form');

    form.addEventListener('submit', (event) => {
        let valid = true;
        let errorMessage = 'Por favor, completa los siguientes campos requeridos:\n';

        // Validar todos los campos del formulario
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach((input) => {
            if (input.value.trim() === '') {
                valid = false;
                input.classList.add('invalid'); // Agregar una clase para resaltar campos inválidos
                errorMessage += `- ${input.name}\n`; // Agregar el nombre del campo a la lista de errores
            } else {
                input.classList.remove('invalid'); // Eliminar la clase de campos válidos
            }
        });

        const emailInput = document.querySelector('input[name="email"]');
        const emailValue = emailInput.value;

        if (!validateEmail(emailValue)) {
            valid = false;
            emailInput.classList.add('invalid'); // Resaltar el campo de correo electrónico inválido
            errorMessage += '- Email\n'; // Agregar el correo electrónico a la lista de errores
        } else {
            emailInput.classList.remove('invalid'); // Eliminar la clase si el correo es válido
        }

        if (!valid) {
            event.preventDefault(); // Detiene el envío del formulario
            alert(errorMessage); // Mostrar el mensaje de error con los campos requeridos
        }
    });
});
