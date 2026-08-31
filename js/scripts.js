/**
 * Portfolio Interactive Scripts
 * - Dark Mode Toggle (Default: Light Mode, with LocalStorage persistence)
 * - Active Scrollspy Navigation
 * - Responsive Mobile Drawer Menu
 * - Project Image Modal / Lightbox
 */

// Initialize Dark Mode
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    // Default is light mode as requested
    if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
        updateThemeToggleIcons(true);
    } else {
        document.documentElement.classList.remove('dark');
        updateThemeToggleIcons(false);
    }
}

function updateThemeToggleIcons(isDark) {
    const sunIcons = document.querySelectorAll('.theme-icon-sun');
    const moonIcons = document.querySelectorAll('.theme-icon-moon');
    const themeTexts = document.querySelectorAll('.theme-toggle-text');

    sunIcons.forEach(icon => {
        if (isDark) {
            icon.classList.remove('hidden');
        } else {
            icon.classList.add('hidden');
        }
    });

    moonIcons.forEach(icon => {
        if (isDark) {
            icon.classList.add('hidden');
        } else {
            icon.classList.remove('hidden');
        }
    });

    themeTexts.forEach(text => {
        text.textContent = isDark ? 'Mode Terang' : 'Mode Gelap';
    });
}

function toggleTheme() {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateThemeToggleIcons(isDark);
}

// Modal for Image Preview
function openImageModal(imgSrc, imgAlt) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    if (modal && modalImg) {
        modalImg.src = imgSrc;
        if (modalCaption) modalCaption.textContent = imgAlt || '';
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        document.body.style.overflow = 'hidden';
    }
}

function closeImageModal() {
    const modal = document.getElementById('imageModal');
    if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        document.body.style.overflow = 'auto';
    }
}

// DOM Ready initialization
document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Theme
    initTheme();

    // Attach click listener to all theme toggle buttons
    const themeToggles = document.querySelectorAll('.theme-toggle-btn');
    themeToggles.forEach(btn => {
        btn.addEventListener('click', toggleTheme);
    });

    // 2. Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNavDrawer = document.getElementById('mobileNavDrawer');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    const closeMobileNav = document.getElementById('closeMobileNav');

    function toggleMobileMenu() {
        if (mobileNavDrawer) {
            mobileNavDrawer.classList.toggle('hidden');
            mobileNavDrawer.classList.toggle('flex');
        }
    }

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }
    if (closeMobileNav) {
        closeMobileNav.addEventListener('click', toggleMobileMenu);
    }
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileNavDrawer && !mobileNavDrawer.classList.contains('hidden')) {
                toggleMobileMenu();
            }
        });
    });

    // 3. Scrollspy & Smooth Scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.sidebar-nav-link');

    function onScroll() {
        const scrollY = window.pageYOffset + 120;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop;
            const sectionId = current.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active-nav-link', 'text-sky-600', 'dark:text-sky-400', 'bg-sky-50', 'dark:bg-sky-950/50', 'font-semibold');
                    link.classList.add('text-slate-600', 'dark:text-slate-400');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active-nav-link', 'text-sky-600', 'dark:text-sky-400', 'bg-sky-50', 'dark:bg-sky-950/50', 'font-semibold');
                        link.classList.remove('text-slate-600', 'dark:text-slate-400');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', onScroll);
    onScroll(); // initial trigger

    // 4. Image Lightbox trigger
    const previewableImages = document.querySelectorAll('.project-preview-img');
    previewableImages.forEach(img => {
        img.addEventListener('click', () => {
            openImageModal(img.src, img.alt || img.getAttribute('data-caption') || 'Project Screenshot');
        });
    });

    const modalCloseBtn = document.getElementById('modalCloseBtn');
    const imageModal = document.getElementById('imageModal');
    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', closeImageModal);
    }
    if (imageModal) {
        imageModal.addEventListener('click', (e) => {
            if (e.target === imageModal || e.target.id === 'imageModalBackdrop') {
                closeImageModal();
            }
        });
    }

    // Keyboard ESC to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeImageModal();
        }
    });
});
