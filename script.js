

const form = document.getElementById('textForm');
const input = document.getElementById('textInput');
const output = document.getElementById('output');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const vrijednost = input.value.trim();

    if (vrijednost) {
        output.innerHTML = `<b>${vrijednost}</b>`;
        input.value = '';
    } else {
        output.innerHTML = '<b>Molim unesite neki tekst!</b>';
    }
});