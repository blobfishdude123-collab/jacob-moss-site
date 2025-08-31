document.addEventListener('DOMContentLoaded', () => {
    const galleryImages = document.querySelectorAll('.gallery-grid img');
    const lightbox = document.createElement('div');
    lightbox.classList.add('lightbox');
    document.body.appendChild(lightbox);

    const img = document.createElement('img');
    lightbox.appendChild(img);

    // Create next & prev buttons
    const prevBtn = document.createElement('button');
    prevBtn.textContent = '<';
    prevBtn.classList.add('lightbox-btn', 'prev');
    lightbox.appendChild(prevBtn);

    const nextBtn = document.createElement('button');
    nextBtn.textContent = '>';
    nextBtn.classList.add('lightbox-btn', 'next');
    lightbox.appendChild(nextBtn);

    let currentIndex = 0;

    function showImage(index) {
        currentIndex = index;
        img.src = galleryImages[currentIndex].src;
        lightbox.style.display = 'flex';
    }

    galleryImages.forEach((image, index) => {
        image.addEventListener('click', () => {
            showImage(index);
        });
    });

    prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        img.src = galleryImages[currentIndex].src;
    });

    nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        currentIndex = (currentIndex + 1) % galleryImages.length;
        img.src = galleryImages[currentIndex].src;
    });

    // Click outside image to close
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
});
