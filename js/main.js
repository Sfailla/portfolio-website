document.addEventListener('DOMContentLoaded', () => {
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
});
