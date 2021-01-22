var mapLink  = document.querySelector('.contacts-button-map')
var mapPopup = document.querySelector('.modal-map')
var mapClose = mapPopup.querySelector('.modal-close')

mapLink.addEventListener('click', function(e) {
    e.preventDefault()
    mapPopup.classList.add('modal-show')
})

mapClose.addEventListener('click', function(e) {
    e.preventDefault()
    mapPopup.classList.remove('modal-show')
})