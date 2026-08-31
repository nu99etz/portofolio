/**
 * Portfolio Interactive Scripts
 * - Dual Language Support (Indonesian ID <-> English EN) with LocalStorage persistence
 * - Dark Mode Toggle (Default: Light Mode, with LocalStorage persistence)
 * - Active Scrollspy Navigation
 * - Responsive Mobile Drawer Menu
 * - Project Image Modal / Lightbox
 */

// Translation Dictionary
const translations = {
    id: {
        // Navigation
        navAbout: "Tentang Saya",
        navEducation: "Pendidikan",
        navExperience: "Pengalaman",
        navSkills: "Keahlian",
        navProjects: "Proyek",
        navInterests: "Minat & Hobi",
        navAwards: "Penghargaan",
        themeDark: "Mode Gelap",
        themeLight: "Mode Terang",
        langThemeLabel: "Tema Tampilan:",
        langSelectLabel: "Bahasa:",

        // Profile & About
        roleTitle: "Fullstack Developer",
        roleDegree: "S1 Sistem Informasi (ITATS)",
        statusBadge: "Fullstack Developer • 5+ Tahun Pengalaman",
        location: "Jl. Jojoran 3E Dlm 18B, Surabaya",
        bioText: `<strong class="text-slate-900 dark:text-white font-semibold">Full-Stack Developer</strong> (<span class="text-brand-600 dark:text-brand-400 font-semibold">5+ Tahun Pengalaman</span>) yang memadukan keahlian backend performa tinggi (<strong class="text-slate-800 dark:text-slate-100">PHP, Go, Node.js</strong>), antarmuka web & mobile modern (<strong class="text-slate-800 dark:text-slate-100">React.js, Vue.js, Flutter</strong>), serta otomasi DevOps (<strong class="text-slate-800 dark:text-slate-100">Docker, Linux, GCP</strong>) untuk membangun produk digital berskala besar yang cepat, aman, dan mudah di-<em>maintain</em>.`,
        btnContact: "Hubungi Saya",
        btnProjects: "Lihat Portofolio",

        // Education
        eduHeading: "Pendidikan (Education)",
        eduSubheading: "Riwayat studi akademik dan kualifikasi",
        eduDegree: "Sarjana Komputer (S1)",
        eduMajor: "Sistem Informasi",
        eduGpa: "IPK / GPA: <strong>3.73 / 4.00</strong>",
        eduFocus: "Fokus: Rekayasa Perangkat Lunak, Basis Data, dan Sistem Informasi Manajemen.",

        // Experience
        expHeading: "Pengalaman Kerja (Experience)",
        expSubheading: "Rekam jejak profesional & proyek software engineering",
        expFullTime: "Full-Time",
        expSelfEmployed: "Self-Employed",
        expMamoraTitle: "Software Engineer",
        expMamoraDate: "2022 – Sekarang",
        expMamoraB1: "Mengembangkan dan memelihara arsitektur sistem backend dan frontend untuk platform Human Resource.",
        expMamoraB2: "Membangun aplikasi absensi dan pengelolaan Human Resource berbasis web serta mobile Android.",
        expMamoraB3: "Mengelola proses deployment proyek ke server VPS dan Google Cloud Platform (GCP) serta pemeliharaan server lokal kantor.",
        expMamoraB4: "Menganalisis kebutuhan klien serta merancang aplikasi kustom sesuai dengan spesifikasi yang diminta.",

        expFreelanceTitle: "Freelance Full-Stack Developer",
        expFreelanceCompany: "Self-Employed / Independent Projects",
        expFreelanceDate: "2020 – Sekarang",
        expFreelanceB1: "Merancang dan merilis aplikasi mini ERP yang disesuaikan untuk operasional bisnis percetakan dan pemasaran.",
        expFreelanceB2: "Mengembangkan sistem aplikasi pre-order kustom untuk kebutuhan laboratorium/klinik dental.",
        expFreelanceB3: "Mengembangkan aplikasi manajemen dan operasional bisnis pegadaian.",

        expSevimaTitle: "Internship Web Programmer",
        expSevimaDate: "Januari 2020 – April 2020",
        expSevimaB1: "Mengembangkan modul pada Sistem Informasi Akademik Perguruan Tinggi.",
        expSevimaB2: "Melakukan pengujian sistem (testing) serta perbaikan bug (bug fixing) pada aplikasi akademik.",
        expSevimaB3: "Menambahkan modul pelaporan dinamis (Export Excel, Word, PDF, dan HTML).",

        // Skills
        skillsHeading: "Keahlian Teknis (Technical Skills)",
        skillsSubheading: "Teknologi backend, frontend, mobile, dan infrastruktur cloud",
        skillsCat1: "Bahasa & Backend Framework",
        skillsCat2: "Frontend & Mobile Dev",
        skillsCat3: "DevOps & Infrastructure",

        // Projects
        projectsHeading: "Proyek Portofolio (Projects)",
        projectsSubheading: "Hasil karya sistem informasi dan aplikasi web yang telah dibangun",
        p1Tag: "Sistem Informasi Web",
        p1Title: "Sistem Informasi Pendaftaran Kursus Mobil Airlangga",
        p1Desc: "Sistem pendaftaran kursus mobil berbasis web untuk mengelola registrasi peserta, konfirmasi berkas pemohon, hingga pengelolaan jadwal kursus oleh admin.",

        p2Tag: "Keuangan & Pegadaian",
        p2Title: "Sistem Informasi Pegadaian Jaya Group Bima",
        p2Desc: "Sistem informasi pegadaian berbasis web untuk pendataan barang gadai, perpanjangan masa gadai, hitung bunga transaksi, hingga lelang barang jatuh tempo.",

        p3Tag: "Manufaktur & Laboratorium",
        p3Title: "Dental Barokah Laboratory",
        p3Desc: "Sistem manufaktur dental untuk menangani pre-order pembuatan gigi tiruan, monitoring tahapan produksi laboratorium, dan rekapitulasi tagihan dokter gigi.",

        p4Tag: "Sistem Pakar • AI",
        p4Title: "Sistem Pakar Pendeteksi Penyakit Kucing",
        p4Desc: "Aplikasi sistem pakar berbasis web untuk mendiagnosis jenis penyakit pada kucing berdasarkan gejala klinis menggunakan metode Forward Chaining.",

        p5Tag: "Data Mining & Optimasi",
        p5Title: "Sistem Informasi Optimasi Data Latih (PSO & Naive Bayes)",
        p5Desc: "Sistem informasi optimasi data latih berbasis web yang mengkombinasikan dua metode algoritma cerdas, yaitu Particle Swarm Optimization (PSO) untuk reduksi atribut dan Naive Bayes untuk klasifikasi data.",

        // Interests
        interestsHeading: "Minat & Hobi (Interests)",
        interestsSubheading: "Aktivitas dan kegemaran di luar waktu coding",
        int1Title: "Olahraga & Outdoor",
        int1Desc: "Di samping menggeluti pemrograman web, saya senang menghabiskan waktu di luar ruangan bermain sepak bola dan cricket bersama rekan-rekan.",
        int2Title: "Tayangan Olahraga & Cricket",
        int2Desc: "Saat berada di dalam ruangan, saya suka menyaksikan siaran turnamen olahraga, khususnya pertandingan cricket favorit internasional.",

        // Awards
        awardsHeading: "Penghargaan (Awards & Certifications)",
        awardsSubheading: "Prestasi akademik dan sertifikasi magang",
        award1Year: "Tahun 2021",
        award1Title: "Best Student Bachelor Of Computer",
        award1Desc: "Department of Information System, Institut Teknologi Adhi Tama Surabaya.",
        award2Year: "Tahun 2020",
        award2Title: "Internship Web Programmer Certificate",
        award2Desc: "PT Sentra Vidya Utama (SEVIMA) - Surabaya.",

        // Contact CTA & Footer
        ctaHeading: "Tertarik Bekerja Sama?",
        ctaDesc: "Saya terbuka untuk peluang kerja full-time, freelance, maupun kolaborasi proyek web development.",
        footerBackToTop: "Kembali ke Atas",
        footerCopy: "© 2026 Dwi Cipta Nugraha • Portofolio Web",
        modalCaption: "Screenshot Proyek",
        imgHint: "Klik untuk memperbesar"
    },
    en: {
        // Navigation
        navAbout: "About Me",
        navEducation: "Education",
        navExperience: "Experience",
        navSkills: "Skills",
        navProjects: "Projects",
        navInterests: "Interests",
        navAwards: "Awards",
        themeDark: "Dark Mode",
        themeLight: "Light Mode",
        langThemeLabel: "Theme:",
        langSelectLabel: "Language:",

        // Profile & About
        roleTitle: "Fullstack Developer",
        roleDegree: "B.S. in Information Systems (ITATS)",
        statusBadge: "Fullstack Developer • 5+ Years Experience",
        location: "Jl. Jojoran 3E Dlm 18B, Surabaya, Indonesia",
        bioText: `<strong class="text-slate-900 dark:text-white font-semibold">Full-Stack Developer</strong> (<span class="text-brand-600 dark:text-brand-400 font-semibold">5+ Years Experience</span>) combining high-performance backend engineering (<strong class="text-slate-800 dark:text-slate-100">PHP, Go, Node.js</strong>), modern web & mobile interfaces (<strong class="text-slate-800 dark:text-slate-100">React.js, Vue.js, Flutter</strong>), and DevOps automation (<strong class="text-slate-800 dark:text-slate-100">Docker, Linux, GCP</strong>) to build scalable, secure, and easily maintainable digital products.`,
        btnContact: "Get in Touch",
        btnProjects: "View Portfolio",

        // Education
        eduHeading: "Education",
        eduSubheading: "Academic history and qualifications",
        eduDegree: "Bachelor of Computer Science (S1)",
        eduMajor: "Information Systems",
        eduGpa: "GPA: <strong>3.73 / 4.00</strong>",
        eduFocus: "Focus: Software Engineering, Database Systems, & Management Information Systems.",

        // Experience
        expHeading: "Work Experience",
        expSubheading: "Professional track record & software engineering projects",
        expFullTime: "Full-Time",
        expSelfEmployed: "Self-Employed",
        expMamoraTitle: "Software Engineer",
        expMamoraDate: "2022 – Present",
        expMamoraB1: "Developed and maintained backend and frontend system architectures for Human Resource platforms.",
        expMamoraB2: "Built web and Android mobile applications for attendance and HR management.",
        expMamoraB3: "Managed project deployment pipelines to VPS and Google Cloud Platform (GCP), as well as office local server maintenance.",
        expMamoraB4: "Analyzed client requirements and designed custom applications tailored to requested specifications.",

        expFreelanceTitle: "Freelance Full-Stack Developer",
        expFreelanceCompany: "Self-Employed / Independent Projects",
        expFreelanceDate: "2020 – Present",
        expFreelanceB1: "Designed and deployed custom mini ERP applications for printing and marketing business operations.",
        expFreelanceB2: "Developed custom pre-order systems for dental laboratory and clinic workflows.",
        expFreelanceB3: "Built management and operational systems for pawnshop businesses.",

        expSevimaTitle: "Internship Web Programmer",
        expSevimaDate: "January 2020 – April 2020",
        expSevimaB1: "Developed modules for Higher Education Academic Information Systems.",
        expSevimaB2: "Conducted comprehensive system testing and bug fixing on academic platforms.",
        expSevimaB3: "Implemented dynamic reporting modules (Excel, Word, PDF, and HTML export).",

        // Skills
        skillsHeading: "Technical Skills",
        skillsSubheading: "Backend, frontend, mobile, and cloud infrastructure technologies",
        skillsCat1: "Languages & Backend Frameworks",
        skillsCat2: "Frontend & Mobile Dev",
        skillsCat3: "DevOps & Infrastructure",

        // Projects
        projectsHeading: "Portfolio Projects",
        projectsSubheading: "Web applications and information systems developed",
        p1Tag: "Web Information System",
        p1Title: "Airlangga Car Driving Course Registration System",
        p1Desc: "A web-based registration information system to manage applicant registrations, verify applicant documents, and manage driving course scheduling.",

        p2Tag: "Finance & Pawnshop",
        p2Title: "Pegadaian Jaya Group Bima Information System",
        p2Desc: "A web-based pawnshop information system used to record pawned items, manage pawn extensions, calculate interest, and handle auctioning of overdue items.",

        p3Tag: "Manufacturing & Lab",
        p3Title: "Dental Barokah Laboratory",
        p3Desc: "A web-based dental manufacturing system built to handle custom pre-orders for artificial tooth fabrication and manage dental clinic billings.",

        p4Tag: "Expert System • AI",
        p4Title: "Cat Disease Diagnosis Expert System",
        p4Desc: "A web-based expert diagnosis system to detect cat diseases based on clinical symptoms using the Forward Chaining inference method.",

        p5Tag: "Data Mining & Optimization",
        p5Title: "Training Data Optimization System (PSO & Naive Bayes)",
        p5Desc: "A web-based training data optimization system combining Particle Swarm Optimization (PSO) for feature reduction and Naive Bayes for classification.",

        // Interests
        interestsHeading: "Interests & Hobbies",
        interestsSubheading: "Activities and passions beyond coding",
        int1Title: "Sports & Outdoors",
        int1Desc: "Besides web development, I enjoy spending time outdoors playing football and cricket with friends.",
        int2Title: "Sports Broadcasts & Cricket",
        int2Desc: "When indoors, I love watching sports tournament broadcasts, especially international cricket matches.",

        // Awards
        awardsHeading: "Awards & Certifications",
        awardsSubheading: "Academic honors and internship credentials",
        award1Year: "Year 2021",
        award1Title: "Best Student Bachelor Of Computer",
        award1Desc: "Department of Information Systems, Institut Teknologi Adhi Tama Surabaya.",
        award2Year: "Year 2020",
        award2Title: "Internship Web Programmer Certificate",
        award2Desc: "PT Sentra Vidya Utama (SEVIMA) - Surabaya.",

        // Contact CTA & Footer
        ctaHeading: "Interested in Collaborating?",
        ctaDesc: "I am open to full-time opportunities, freelance projects, and web development collaborations.",
        footerBackToTop: "Back to Top",
        footerCopy: "© 2026 Dwi Cipta Nugraha • Web Portfolio",
        modalCaption: "Project Screenshot",
        imgHint: "Click to enlarge"
    }
};

// Current Active Language
let currentLang = localStorage.getItem('language') || 'id';

function applyLanguage(lang) {
    if (!translations[lang]) lang = 'id';
    currentLang = lang;
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;

    const dict = translations[lang];

    // 1. Text Content replacements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key] !== undefined) {
            el.textContent = dict[key];
        }
    });

    // 2. HTML Content replacements (for bold, tags, etc.)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        if (dict[key] !== undefined) {
            el.innerHTML = dict[key];
        }
    });

    // 3. Title attribute replacements
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
        const key = el.getAttribute('data-i18n-title');
        if (dict[key] !== undefined) {
            el.setAttribute('title', dict[key]);
        }
    });

    // 4. Update language toggle button UI states
    updateLanguageButtons(lang);

    // 5. Update Dark mode text based on active language
    const isDark = document.documentElement.classList.contains('dark');
    updateThemeToggleIcons(isDark);
}

function updateLanguageButtons(lang) {
    document.querySelectorAll('.lang-btn-id').forEach(btn => {
        if (lang === 'id') {
            btn.classList.add('bg-brand-600', 'text-white', 'shadow-xs');
            btn.classList.remove('text-slate-600', 'dark:text-slate-300', 'hover:bg-slate-100', 'dark:hover:bg-slate-800');
        } else {
            btn.classList.remove('bg-brand-600', 'text-white', 'shadow-xs');
            btn.classList.add('text-slate-600', 'dark:text-slate-300', 'hover:bg-slate-100', 'dark:hover:bg-slate-800');
        }
    });

    document.querySelectorAll('.lang-btn-en').forEach(btn => {
        if (lang === 'en') {
            btn.classList.add('bg-brand-600', 'text-white', 'shadow-xs');
            btn.classList.remove('text-slate-600', 'dark:text-slate-300', 'hover:bg-slate-100', 'dark:hover:bg-slate-800');
        } else {
            btn.classList.remove('bg-brand-600', 'text-white', 'shadow-xs');
            btn.classList.add('text-slate-600', 'dark:text-slate-300', 'hover:bg-slate-100', 'dark:hover:bg-slate-800');
        }
    });
}

function toggleLanguage() {
    const nextLang = currentLang === 'id' ? 'en' : 'id';
    applyLanguage(nextLang);
}

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

    const dict = translations[currentLang] || translations.id;
    themeTexts.forEach(text => {
        text.textContent = isDark ? dict.themeLight : dict.themeDark;
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
    // 1. Initialize Theme & Language
    initTheme();
    applyLanguage(currentLang);

    // Attach click listener to all theme toggle buttons
    const themeToggles = document.querySelectorAll('.theme-toggle-btn');
    themeToggles.forEach(btn => {
        btn.addEventListener('click', toggleTheme);
    });

    // Language buttons
    document.querySelectorAll('.lang-btn-id').forEach(btn => {
        btn.addEventListener('click', () => applyLanguage('id'));
    });
    document.querySelectorAll('.lang-btn-en').forEach(btn => {
        btn.addEventListener('click', () => applyLanguage('en'));
    });
    document.querySelectorAll('.lang-toggle-btn').forEach(btn => {
        btn.addEventListener('click', toggleLanguage);
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
