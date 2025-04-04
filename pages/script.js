document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('request');
    if (localStorage.getItem('formData')) {
        const savedData = JSON.parse(localStorage.getItem('formData'));
        form.name.value = savedData.name || '';
        form.email.value = savedData.email || '';
        form.phone.value = savedData.phone || '';
        form.message.value = savedData.message || '';
    }
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = {
            name: form.name.value,
            email: form.email.value,
            phone: form.phone.value,
            message: form.message.value
        };
        localStorage.setItem('formData', JSON.stringify(formData));
        alert('Заявка успешно отправлена!');
    });
});