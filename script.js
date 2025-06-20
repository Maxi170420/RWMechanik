function scrollGallery(direction) {
    const container = document.getElementById('galerieScroll');
    const scrollAmount = 320; // entspricht Bildbreite + Abstand
    container.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
}


// Menü öffnen/schließen
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Aktives Menüelement bei Scroll
const links = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 60;
        if (scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    links.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
});

// Menü bei Klick auf Link (mobil) schließen
links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('show');
    });
});

