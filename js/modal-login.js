var loginLink     = document.querySelector('.login-link')
var loginPopup    = document.querySelector('.modal-login')
var loginClose    = loginPopup.querySelector('.modal-close')
var loginForm     = loginPopup.querySelector('.login-form')
var loginLogin    = loginPopup.querySelector('.login-icon-user')
var loginPassword = loginPopup.querySelector('.login-icon-password')

var isStorageSupport = true
var storage = ''

try {
    storage = localStorage.getItem('login')
} catch (err) {
    isStorageSupport = false
}

loginLink.addEventListener('click', function(e) {
    e.preventDefault()
    loginPopup.classList.add('modal-show')

    if (storage) {
        loginLogin.value = storage
        loginPassword.focus()
    } else {
        loginLogin.focus()
    }
    console.log('okno otkryto', storage)
})

loginClose.addEventListener('click', function(e) {
    e.preventDefault()
    loginPopup.classList.remove('modal-show')
    console.log('okno zakryto', storage)
})

loginForm.addEventListener('submit', function(e) {
    if (!loginLogin.value || !loginPassword.value) {
        e.preventDefault()
    } else {
        localStorage.setItem('login', loginLogin.value)
    }
})

window.addEventListener('keydown', function (e) {
    if (e.code == 'Escape') {
        if (loginPopup.classList.contains('modal-show')) {
            e.preventDefault()
            loginPopup.classList.remove('modal-show')
            console.log('Escape')
        }
    }
})
