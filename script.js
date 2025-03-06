// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for your message! We’ll get back to you soon.');
    this.reset();
});

// eBook Form Submission
document.getElementById('ebook-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    alert(`Thank you! A download link for the eBook has been sent to ${email}.`);
    this.reset();
    // In a real scenario, trigger a download of images/ebook.pdf here
});