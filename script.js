window.addEventListener('scroll', function() {
    const layers = document.querySelectorAll('.parallax-layer');
    const scrollTop = window.pageYOffset;
    layers.forEach(layer => {
        const speed = layer.getAttribute('data-speed');
        const yPos = -scrollTop * speed;
        layer.style.transform = `translate3d(0, ${yPos}px, 0)`;
    });
});