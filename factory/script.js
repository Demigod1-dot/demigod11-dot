document.getElementById('contact-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message sent! We will get back to you soon.');
    e.target.reset();
});


const images = ['food1.jpg', 'food2.jpg', 'food3.jpg'];
let currentImage = 0;
const hero = document.querySelector('.hero');
setInterval(() => {
    currentImage = (currentImage + 1) % images.length;
    hero.style.backgroundImage = linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url({imagescurrentImage });
}, 5000);
