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
		let width = window.innerWidth;

		let removeClass = () => {
			sideDraw.classList.remove('open');
			backdropToggle.classList.remove('backdrop');
			mobileCheckBox.checked = false;
		};

		if (sideDraw.classList.contains('open') && width > 799) {
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
	toggleMobileNav();

	const toggleAboutMe = () => {
		let aboutCard = document.getElementById('about-card');
		let aboutMeBtn = document.getElementById('about-me-button');
		let aboutMeCloseBtn = document.getElementById('target');

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
	toggleAboutMe();

	function scrollElement(
		destination,
		duration = 200,
		easing = 'linear',
		callback
	) {
		const easings = {
			linear(t) {
				return t;
			},
			easeInQuad(t) {
				return t * t;
			},
			easeOutQuad(t) {
				return t * (2 - t);
			},
			easeInOutQuad(t) {
				return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
			},
			easeInCubic(t) {
				return t * t * t;
			},
			easeOutCubic(t) {
				return --t * t * t + 1;
			},
			easeInOutCubic(t) {
				return t < 0.5
					? 4 * t * t * t
					: (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
			},
			easeInQuart(t) {
				return t * t * t * t;
			},
			easeOutQuart(t) {
				return 1 - --t * t * t * t;
			},
			easeInOutQuart(t) {
				return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
			},
			easeInQuint(t) {
				return t * t * t * t * t;
			},
			easeOutQuint(t) {
				return 1 + --t * t * t * t * t;
			},
			easeInOutQuint(t) {
				return t < 0.5
					? 16 * t * t * t * t * t
					: 1 + 16 * --t * t * t * t * t;
			}
		};

		const start = window.pageYOffset;
		const startTime =
			'now' in window.performance
				? performance.now()
				: new Date().getTime();

		const documentHeight = Math.max(
			document.body.scrollHeight,
			document.body.offsetHeight,
			document.documentElement.clientHeight,
			document.documentElement.scrollHeight,
			document.documentElement.offsetHeight
		);
		const windowHeight =
			window.innerHeight ||
			document.documentElement.clientHeight ||
			document.getElementsByTagName('body')[0].clientHeight;
		const destinationOffset =
			typeof destination === 'number'
				? destination
				: destination.offsetTop;
		const destinationOffsetToScroll = Math.round(
			documentHeight - destinationOffset < windowHeight
				? documentHeight - windowHeight
				: destinationOffset
		);

		if ('requestAnimationFrame' in window === false) {
			window.scroll(0, destinationOffsetToScroll);
			if (callback) {
				callback();
			}
			return;
		}

		function scroll() {
			const now =
				'now' in window.performance
					? performance.now()
					: new Date().getTime();
			const time = Math.min(1, (now - startTime) / duration);
			const timeFunction = easings[easing](time);
			window.scroll(
				0,
				Math.ceil(
					timeFunction * (destinationOffsetToScroll - start) + start
				)
			);

			if (window.pageYOffset === destinationOffsetToScroll) {
				if (callback) {
					callback();
				}
				return;
			}

			requestAnimationFrame(scroll);
		}

		scroll();
	}
});
