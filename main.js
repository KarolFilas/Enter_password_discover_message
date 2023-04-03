const input = document.getElementById('pass')
const div = document.querySelector('.message')
const passwords = ['user', 'wiosna', 'ania']
const messages = ['Wyjechałam na zawsze', 'piękna pora roku', 'fajny styl masz']

input.addEventListener('input', function (e) {
    div.textContent = ''
    const text = e.target.value
    passwords.forEach((password, index) => {
        if (password === text) {
            div.textContent = messages[index]
            e.target.value = ''
        }
    })




    // if (password === e.target.value) {
    //     div.textContent = message
    // } else {
    //     div.textContent = ''
    // }
})

input.addEventListener('focus', (e) => {
    e.target.classList.add('active')
})

input.addEventListener('blur', (e) => {
    e.target.classList.remove('active')
})







