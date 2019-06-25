function loadThenAnimate() {
	document.body.classList.add('bg-loading');

	window.addEventListener('load', showPage, false);

	function showPage() {
		document.body.classList.remove('bg-loading');
	}
}

document.addEventListener('DOMContentLoaded', () => {
	loadThenAnimate();

	let backgroundImage = document.querySelector('header');

	const observer = lozad(backgroundImage);
	observer.observe();

	const toggleMobileNav = () => {
		let sideDraw = document.querySelector('.side-drawer');
		let backdropToggle = document.querySelector('.toggle-backdrop');
		let backdrop = document.querySelector('a');
		let toggle = document.querySelector('.home__mobile-nav--target');
		let mobileCheckBox = document.getElementById('checkbox');

		backdrop.addEventListener('click', () => {
			sideDraw.classList.remove('open');
			backdropToggle.classList.remove('backdrop');
			mobileCheckBox.checked = false;
		});

		toggle.addEventListener('click', () => {
			backdropToggle.classList.toggle('backdrop');
			sideDraw.classList.toggle('open');
			if (sideDraw.classList.contains('open')) {
				mobileCheckBox.checked = false;
			} else if (!sideDraw.classList.contains('open')) {
				mobileCheckBox.checked = true;
			}
		});
	};
	toggleMobileNav();

	const toggleAboutMe = () => {
		let aboutCard = document.getElementById('about-card');
		let aboutMeBtn = document.getElementById('about-me-button');
		let aboutMeCloseBtn = document.getElementById('target');

		aboutMeBtn.addEventListener('click', () => {
			aboutCard.classList.toggle('closed');
		});
		aboutMeCloseBtn.addEventListener('click', () => {
			if (!aboutCard.classList.contains('closed')) {
				aboutCard.classList.add('closed');
			}
		});
	};
	toggleAboutMe();
});
