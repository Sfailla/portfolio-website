function loadThenAnimate() {
  document.body.classList.add('bg-loading');
  window.addEventListener('load', showPage, false);

  function showPage() {
    document.body.classList.remove('bg-loading');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // delay animations till after page loads
  loadThenAnimate();
  const backgroundImage = document.querySelector('header');
  const observer = lozad(backgroundImage);
  observer.observe();

  // scrolling functionality
  (function handleScrollEvents() {
    const scrollToElement = (btn, el) => {
      const buttons = document.querySelectorAll(btn);
      const element = document.querySelector(el);

      buttons.forEach(button => {
        button.addEventListener('click', () => {
          element.scrollIntoView({ behavior: 'smooth' });
        });
      });
    };

    const home = scrollToElement('#home-button', '#home');
    const about = scrollToElement('#about-button', '#about');
    const contact = scrollToElement('#contact-button', '#contact');
    const projects = scrollToElement('#project-button', '#projects');

    return [about, home, projects, contact];
  })();

  // toggle events

  (function () {
    const sideDraw = document.querySelector('.side-drawer');
    const backdropToggle = document.querySelector('.toggle-backdrop');
    const backdrop = document.querySelector('a');
    const toggle = document.querySelector('.home__mobile-nav--target');
    const mobileCheckBox = document.querySelector('#checkbox');
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
  })();

  (function () {
    const aboutCard = document.querySelector('#about-card');
    const aboutBtn = document.querySelector('#about-me-button');
    const aboutCloseBtn = document.querySelector('#target');

    aboutBtn.addEventListener('click', () => {
      if (aboutCard.classList.contains('closed')) {
        aboutCard.classList.remove('closed');
      }
    });

    aboutCloseBtn.addEventListener('click', () => {
      if (!aboutCard.classList.contains('closed')) {
        aboutCard.classList.add('closed');
      }
    });
  })();
});
