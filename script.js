function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    const modalContent = modal.querySelector('.modal-content');
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Center modal content
    modalContent.style.marginTop = '20px';
    if (window.innerWidth <= 768) {
        modalContent.style.marginTop = '10px';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modals = document.getElementsByClassName('modal');
    for (let modal of modals) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }
}

// Handle resize
window.addEventListener('resize', function() {
    const modals = document.getElementsByClassName('modal');
    for (let modal of modals) {
        if (modal.style.display === 'block') {
            const modalContent = modal.querySelector('.modal-content');
            modalContent.style.marginTop = window.innerWidth <= 768 ? '10px' : '20px';
        }
    }
});

function updateImageSizes() {
    const screenWidth = window.innerWidth;
    const profilePic = document.querySelector('.section__pic-container img');
    const aboutPic = document.querySelector('.about-pic');
    
    const imageSize = screenWidth <= 768 ? '250px' : '400px';
    
    if (profilePic) {
        profilePic.style.width = imageSize;
        profilePic.style.height = imageSize;
    }
    if (aboutPic) {
        aboutPic.style.width = imageSize;
        aboutPic.style.height = imageSize;
    }
}

// Add this to your existing window.onclick function
window.addEventListener('resize', updateImageSizes);
window.addEventListener('load', updateImageSizes);

// Prevent zooming
function preventZooming() {
    // Prevent pinch zoom
    document.addEventListener('touchstart', function(event) {
        if (event.touches.length > 1) {
            event.preventDefault();
        }
    }, { passive: false });
    
    // Prevent double-tap zoom
    let lastTouchEnd = 0;
    document.addEventListener('touchend', function(event) {
        const now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);
}

// Prevent double-tap zoom on iOS
document.addEventListener('dblclick', function(event) {
    event.preventDefault();
}, { passive: false });

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    preventZooming();
    updateImageSizes();
});