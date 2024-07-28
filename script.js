const startAnimation = function(entries, observer) {
    entries.forEach(entry => {
        entry.target.classList.toggle("animation", entry.isIntersecting);
      });
};

const observer = new IntersectionObserver(startAnimation);
const options = { root: null, rootMargin: '0px', threshold: 1 }; 

const elements = document.querySelectorAll('footer');
elements.forEach(el => {
  observer.observe(el, options);
});