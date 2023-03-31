const input = document.getElementById('pass')
const div = document.querySelector('.message')
const password = 'user'
const message = 'Wyjechałam na zawsze'


input.addEventListener('input', (e) => {
    console.log(e.target.value);
    if (password === e.target.value) {
        div.textContent = message

    } else {
        div.textContent = ''
    }
})