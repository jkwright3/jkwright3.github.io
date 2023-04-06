cont toggleButton = document.getElementsByClassName('toggle-button')[0]
cont navbarlinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListner('click', () => {
	navbarLinks.classList.toggle('active')
})