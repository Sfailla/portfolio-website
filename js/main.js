let sideDraw = document.querySelector('.side-drawer');

let toggle = document.querySelector('.home__mobile-nav--target');

toggle.addEventListener('click', () => {
	console.log('clicked');
	sideDraw.classList.toggle('open');
});
