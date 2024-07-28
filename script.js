const options = {
    root: null, // use the document's viewport as the container
    rootMargin: '0px', // % or px - offsets added to each side of the intersection 
    threshold: 0.5 // percentage of the target element which is visible
  }

const startAnimation = function(entries) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
			entry.target.classList.add('animate');
		} else {
			entry.target.classList.remove('animate');		
		}

	});

};

let observer = new IntersectionObserver(startAnimation, options);


document.querySelectorAll('footer')
	.forEach(elem => { observer.observe(elem) });

document.querySelectorAll('header')
	.forEach(elem => { observer.observe(elem) });

document.querySelectorAll('.elem-project')
	.forEach(elem => { observer.observe(elem) });