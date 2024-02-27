window.addEventListener('scroll', function() {
    var nav = document.querySelector('nav');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 50) { // Adjust the scroll position as needed
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});
