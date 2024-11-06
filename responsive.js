// Screen size breakpoints
const BREAKPOINTS = {
    mobile: 768,
    tablet: 1024
};

function handleResponsiveness() {
    const screenWidth = window.innerWidth;
    
    // Handle navigation
    const desktopNav = document.getElementById('desktop-nav');
    const hamburgerNav = document.getElementById('hamburger-nav');
    
    if (screenWidth <= BREAKPOINTS.mobile) {
        desktopNav.style.display = 'none';
        hamburgerNav.style.display = 'flex';
        
        // Center about section image
        const aboutPicContainer = document.querySelector('.section__pic-container');
        if (aboutPicContainer) {
            aboutPicContainer.style.display = 'flex';
            aboutPicContainer.style.justifyContent = 'center';
        }
        
        // Hide arrows
        const arrows = document.querySelectorAll('.arrow');
        arrows.forEach(arrow => arrow.style.display = 'none');
    } else {
        desktopNav.style.display = 'flex';
        hamburgerNav.style.display = 'none';
        
        // Reset about section image
        const aboutPicContainer = document.querySelector('.section__pic-container');
        if (aboutPicContainer) {
            aboutPicContainer.style.display = 'flex';
            aboutPicContainer.style.justifyContent = 'flex-start';
        }
        
        // Show arrows
        const arrows = document.querySelectorAll('.arrow');
        arrows.forEach(arrow => arrow.style.display = 'block');
    }
    
    handleAboutSection();
}

function handleAboutSection() {
    const screenWidth = window.innerWidth;
    
    // Handle section container
    const sectionContainer = document.querySelector('.section-container');
    const picContainer = document.querySelector('.section__pic-container');
    const aboutPic = document.querySelector('.about-pic');
    const aboutDetailsContainer = document.querySelector('.about-details-container');
    
    if (screenWidth <= 768) {
        // Mobile layout
        if (sectionContainer) {
            sectionContainer.style.flexDirection = 'column';
            sectionContainer.style.alignItems = 'center';
            sectionContainer.style.gap = '2rem';
        }
        
        if (picContainer) {
            picContainer.style.width = screenWidth <= 480 ? '250px' : '300px';
            picContainer.style.height = screenWidth <= 480 ? '250px' : '300px';
            picContainer.style.margin = '0 auto';
        }
        
        if (aboutPic) {
            aboutPic.style.width = '50%';
            aboutPic.style.height = '100%';
            aboutPic.style.objectFit = 'cover';
        }
        
        if (aboutDetailsContainer) {
            aboutDetailsContainer.style.width = '100%';
            aboutDetailsContainer.style.padding = '0 0rem';
        }
    } else {
        // Desktop layout
        if (sectionContainer) {
            sectionContainer.style.flexDirection = 'row';
            sectionContainer.style.gap = '4rem';
            sectionContainer.style.alignItems = 'flex-start';
        }
        
        if (picContainer) {
            picContainer.style.width = '400px';
            picContainer.style.height = '400px';
            picContainer.style.margin = 'auto 0';
        }
        
        if (aboutDetailsContainer) {
            aboutDetailsContainer.style.width = 'auto';
            aboutDetailsContainer.style.padding = '0';
        }
    }
}

// Initialize and add event listeners
window.addEventListener('load', handleResponsiveness);
window.addEventListener('resize', handleResponsiveness);
window.addEventListener('load', handleAboutSection);
window.addEventListener('resize', handleAboutSection);