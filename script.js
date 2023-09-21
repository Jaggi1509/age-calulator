document.addEventListener('DOMContentLoaded', function () {
    const calculateButton = document.getElementById('calculate');
    const birthdateInput = document.getElementById('birthdate');
    const ageResult = document.getElementById('age');

    calculateButton.addEventListener('click', calculateAge);

    function calculateAge() {
        const birthdate = new Date(birthdateInput.value);
        const currentDate = new Date();
        const age = currentDate.getFullYear() - birthdate.getFullYear();
        ageResult.textContent = age;
    }
});
