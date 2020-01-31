import { scrollElement } from './scroll.js';

function loadThenAnimate() {
	document.body.classList.add('bg-loading');
	window.addEventListener('load', showPage, false);

	function showPage() {
		document.body.classList.remove('bg-loading');
	}
}

document.addEventListener('DOMContentLoaded', () => {
	// logic for delaying animations till after page loads
	loadThenAnimate();
	const backgroundImage = document.querySelector('header');
	const observer = lozad(backgroundImage);
	observer.observe();
	// logic for all toggle events
	const handleToggleEvents = () => {
		const toggleMobileNav = () => {
			const sideDraw = document.querySelector('.side-drawer');
			const backdropToggle = document.querySelector(
				'.toggle-backdrop'
			);
			const backdrop = document.querySelector('a');
			const toggle = document.querySelector(
				'.home__mobile-nav--target'
			);
			const mobileCheckBox = document.getElementById('checkbox');
			const width = window.innerWidth;

			const removeClass = () => {
				sideDraw.classList.remove('open');
				backdropToggle.classList.remove('backdrop');
				mobileCheckBox.checked = false;
			};

			if (sideDraw.classList.contains('open') && width > 999) {
				sideDraw.addEventListener('change', removeClass);
			}

			backdrop.addEventListener('click', () => {
				removeClass();
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

		const toggleAboutMe = () => {
			const aboutCard = document.getElementById('about-card');
			const aboutMeBtn = document.getElementById('about-me-button');
			const aboutMeCloseBtn = document.getElementById('target');

			aboutMeBtn.addEventListener('click', () => {
				if (aboutCard.classList.contains('closed')) {
					aboutCard.classList.remove('closed');
				}
			});

			aboutMeCloseBtn.addEventListener('click', () => {
				if (!aboutCard.classList.contains('closed')) {
					aboutCard.classList.add('closed');
				}
			});
		};

		return [ toggleMobileNav(), toggleAboutMe() ];
	};
	// logic for all scroll effects
	const handleScrollEffect = () => {
		// function to scroll to a particular element on the page
		const scrollToElement = (scrollStart, scrollEnd) => {
			let button = document.querySelectorAll(scrollStart);
			button.forEach(btn => {
				if (btn) {
					btn.addEventListener('click', () => {
						scrollElement(
							document.querySelector(scrollEnd),
							1000,
							'easeOutQuad'
						);
					});
				} else {
					return;
				}
			});
		};

		const about = scrollToElement('#about-button', '#about');
		const project = scrollToElement('#project-button', '#projects');
		const home = scrollToElement('#home-button', '#home');
		const contact = scrollToElement('#contact-button', '#contact');

		return [ about, project, home, contact ];
	};

	return [ handleScrollEffect(), handleToggleEvents() ];
});
