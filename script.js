document.addEventListener("DOMContentLoaded", function () {
    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('mouseover', () => {
        ctaButton.style.transform = 'scale(1.1)';
    });
    ctaButton.addEventListener('mouseout', () => {
        ctaButton.style.transform = 'scale(1)';
    });
});
