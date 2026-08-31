<!DOCTYPE html>
<html lang="id" class="scroll-smooth">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <title>Dwi Cipta Nugraha | Portofolio Web Developer</title>
    <meta name="description" content="Portofolio Web Developer & Information System Graduate - Dwi Cipta Nugraha. Keahlian dalam PHP, Laravel, Python, JavaScript, dan perancangan sistem informasi." />
    <meta name="author" content="Dwi Cipta Nugraha" />
    <link rel="icon" type="image/x-icon" href="assets/img/favicon.ico" />

    <!-- Google Fonts: Plus Jakarta Sans -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">

    <!-- Font Awesome 6 Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    <!-- Tailwind CSS with custom configuration -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
                    },
                    colors: {
                        brand: {
                            50: '#f0f9ff',
                            100: '#e0f2fe',
                            200: '#bae6fd',
                            300: '#7dd3fc',
                            400: '#38bdf8',
                            500: '#0ea5e9',
                            600: '#0284c7',
                            700: '#0369a1',
                            800: '#075985',
                            900: '#0c4a6e',
                            950: '#082f49',
                        }
                    },
                    boxShadow: {
                        'glow-sky': '0 0 25px -5px rgba(56, 189, 248, 0.35)',
                        'glow-sky-lg': '0 0 35px -5px rgba(14, 165, 233, 0.45)',
                    }
                }
            }
        }
    </script>

    <!-- Custom CSS for theme transition and styling -->
    <style>
        * {
            transition: background-color 0.25s ease, border-color 0.25s ease;
        }
        .glass-card {
            background-color: rgba(255, 255, 255, 0.85);
            backdrop-filter: blur(12px);
        }
        .dark .glass-card {
            background-color: rgba(15, 23, 42, 0.85);
        }
        .glass-nav {
            background-color: rgba(240, 249, 255, 0.9);
            backdrop-filter: blur(16px);
        }
        .dark .glass-nav {
            background-color: rgba(11, 19, 38, 0.95);
        }
    </style>
</head>

<body class="bg-brand-50/40 dark:bg-slate-950 text-slate-700 dark:text-slate-200 font-sans min-h-screen selection:bg-brand-200 selection:text-brand-900 dark:selection:bg-brand-900 dark:selection:text-brand-200 antialiased relative">

    <!-- Subtle Background Ambient Glows -->
    <div class="fixed top-0 left-0 right-0 h-96 bg-gradient-to-b from-brand-100/60 to-transparent dark:from-sky-950/20 dark:to-transparent pointer-events-none -z-10"></div>
    <div class="fixed -top-40 right-0 w-96 h-96 bg-brand-300/20 dark:bg-brand-600/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
    <div class="fixed bottom-0 left-72 w-96 h-96 bg-cyan-200/20 dark:bg-cyan-900/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

    <!-- Mobile Top Navigation Bar -->
    <header class="lg:hidden sticky top-0 z-40 glass-nav border-b border-brand-100 dark:border-slate-800/80 px-4 py-3 flex items-center justify-between shadow-sm">
        <div class="flex items-center space-x-3">
            <img class="w-10 h-10 rounded-full object-cover ring-2 ring-brand-400 dark:ring-brand-500 shadow-sm" src="assets/img/CV.png" alt="Dwi Cipta Nugraha" />
            <div>
                <a href="#about" class="font-bold text-slate-900 dark:text-white text-sm sm:text-base leading-tight block">Dwi Cipta N.</a>
                <span class="text-xs text-brand-600 dark:text-brand-400 font-medium">Web Developer</span>
            </div>
        </div>
        <div class="flex items-center space-x-2">
            <!-- Theme Toggle Mobile -->
            <button class="theme-toggle-btn p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-brand-100 dark:hover:bg-slate-800 transition duration-200 border border-brand-200/60 dark:border-slate-700/60 shadow-xs" title="Ganti Mode Gelap/Terang" aria-label="Toggle theme">
                <i class="fas fa-sun text-amber-500 theme-icon-sun hidden text-base"></i>
                <i class="fas fa-moon text-brand-600 dark:text-brand-400 theme-icon-moon text-base"></i>
            </button>

            <!-- Hamburger Button -->
            <button id="mobileMenuBtn" class="p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-brand-100 dark:hover:bg-slate-800 transition duration-200 border border-brand-200/60 dark:border-slate-700/60" aria-label="Toggle navigation menu">
                <i class="fas fa-bars text-lg"></i>
            </button>
        </div>
    </header>

    <!-- Mobile Navigation Drawer -->
    <div id="mobileNavDrawer" class="hidden fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm lg:hidden flex-col justify-end">
        <div class="bg-white dark:bg-slate-900 rounded-t-3xl p-6 border-t border-brand-200 dark:border-slate-800 shadow-2xl space-y-4 max-h-[85vh] overflow-y-auto">
            <div class="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                <div class="flex items-center space-x-3">
                    <img class="w-11 h-11 rounded-full object-cover ring-2 ring-brand-400" src="assets/img/CV.png" alt="Dwi Cipta Nugraha" />
                    <div>
                        <h4 class="font-bold text-slate-900 dark:text-white">Dwi Cipta Nugraha</h4>
                        <p class="text-xs text-brand-600 dark:text-brand-400">Portofolio & Resume</p>
                    </div>
                </div>
                <button id="closeMobileNav" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-700">
                    <i class="fas fa-times"></i>
                </button>
            </div>

            <nav class="grid grid-cols-2 gap-2 pt-2">
                <a href="#about" class="mobile-nav-link flex items-center space-x-2.5 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-brand-50 dark:hover:bg-slate-800 hover:text-brand-600">
                    <i class="fas fa-user-circle text-brand-500 w-5"></i>
                    <span>About</span>
                </a>
                <a href="#education" class="mobile-nav-link flex items-center space-x-2.5 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-brand-50 dark:hover:bg-slate-800 hover:text-brand-600">
                    <i class="fas fa-graduation-cap text-brand-500 w-5"></i>
                    <span>Education</span>
                </a>
                <a href="#experience" class="mobile-nav-link flex items-center space-x-2.5 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-brand-50 dark:hover:bg-slate-800 hover:text-brand-600">
                    <i class="fas fa-briefcase text-brand-500 w-5"></i>
                    <span>Experience</span>
                </a>
                <a href="#skills" class="mobile-nav-link flex items-center space-x-2.5 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-brand-50 dark:hover:bg-slate-800 hover:text-brand-600">
                    <i class="fas fa-code text-brand-500 w-5"></i>
                    <span>Skills</span>
                </a>
                <a href="#projects" class="mobile-nav-link flex items-center space-x-2.5 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-brand-50 dark:hover:bg-slate-800 hover:text-brand-600">
                    <i class="fas fa-laptop-code text-brand-500 w-5"></i>
                    <span>Projects</span>
                </a>
                <a href="#interests" class="mobile-nav-link flex items-center space-x-2.5 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-brand-50 dark:hover:bg-slate-800 hover:text-brand-600">
                    <i class="fas fa-heart text-brand-500 w-5"></i>
                    <span>Interests</span>
                </a>
                <a href="#awards" class="mobile-nav-link col-span-2 flex items-center space-x-2.5 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-brand-50 dark:hover:bg-slate-800 hover:text-brand-600">
                    <i class="fas fa-trophy text-amber-500 w-5"></i>
                    <span>Awards & Certifications</span>
                </a>
            </nav>

            <div class="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span class="text-xs text-slate-500 dark:text-slate-400">Tema Tampilan:</span>
                <button class="theme-toggle-btn flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-brand-100/70 dark:bg-slate-800 text-xs font-medium text-brand-700 dark:text-brand-300">
                    <i class="fas fa-sun text-amber-500 theme-icon-sun hidden"></i>
                    <i class="fas fa-moon text-brand-600 dark:text-brand-400 theme-icon-moon"></i>
                    <span class="theme-toggle-text">Mode Gelap</span>
                </button>
            </div>
        </div>
    </div>

    <!-- Desktop Fixed Sidebar -->
    <aside class="hidden lg:flex fixed inset-y-0 left-0 w-72 flex-col justify-between glass-nav border-r border-brand-200/70 dark:border-slate-800/80 p-6 z-30 shadow-sm overflow-y-auto">
        <div>
            <!-- Profile Info & Avatar -->
            <div class="text-center pt-2 pb-6 border-b border-brand-100 dark:border-slate-800/80">
                <div class="relative inline-block mx-auto mb-4 group">
                    <div class="absolute -inset-1 rounded-full bg-gradient-to-tr from-brand-500 to-cyan-400 opacity-60 group-hover:opacity-100 blur transition duration-300"></div>
                    <img class="relative w-28 h-28 rounded-full object-cover ring-4 ring-white dark:ring-slate-900 shadow-md transform group-hover:scale-105 transition duration-300" src="assets/img/CV.png" alt="Dwi Cipta Nugraha" />
                    <span class="absolute bottom-1 right-1 w-5 h-5 bg-emerald-500 border-2 border-white dark:border-slate-900 rounded-full" title="Siap Berkolaborasi"></span>
                </div>
                <h2 class="font-bold text-lg text-slate-900 dark:text-white tracking-tight">Dwi Cipta Nugraha</h2>
                <p class="text-xs font-semibold text-brand-600 dark:text-brand-400 mt-1 uppercase tracking-wider">Web Programmer</p>
                <p class="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">S.Kom - Sistem Informasi</p>
            </div>

            <!-- Navigation Links -->
            <nav class="mt-6 space-y-1.5" id="sideNav">
                <a href="#about" class="sidebar-nav-link flex items-center space-x-3 px-4 py-2.5 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-brand-100/60 dark:hover:bg-slate-800/70 transition-all duration-200">
                    <i class="fas fa-user-circle w-5 text-center text-brand-500"></i>
                    <span>Tentang Saya</span>
                </a>
                <a href="#education" class="sidebar-nav-link flex items-center space-x-3 px-4 py-2.5 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-brand-100/60 dark:hover:bg-slate-800/70 transition-all duration-200">
                    <i class="fas fa-graduation-cap w-5 text-center text-brand-500"></i>
                    <span>Pendidikan</span>
                </a>
                <a href="#experience" class="sidebar-nav-link flex items-center space-x-3 px-4 py-2.5 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-brand-100/60 dark:hover:bg-slate-800/70 transition-all duration-200">
                    <i class="fas fa-briefcase w-5 text-center text-brand-500"></i>
                    <span>Pengalaman</span>
                </a>
                <a href="#skills" class="sidebar-nav-link flex items-center space-x-3 px-4 py-2.5 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-brand-100/60 dark:hover:bg-slate-800/70 transition-all duration-200">
                    <i class="fas fa-code w-5 text-center text-brand-500"></i>
                    <span>Keahlian (Skills)</span>
                </a>
                <a href="#projects" class="sidebar-nav-link flex items-center space-x-3 px-4 py-2.5 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-brand-100/60 dark:hover:bg-slate-800/70 transition-all duration-200">
                    <i class="fas fa-laptop-code w-5 text-center text-brand-500"></i>
                    <span>Proyek Portfolio</span>
                </a>
                <a href="#interests" class="sidebar-nav-link flex items-center space-x-3 px-4 py-2.5 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-brand-100/60 dark:hover:bg-slate-800/70 transition-all duration-200">
                    <i class="fas fa-heart w-5 text-center text-brand-500"></i>
                    <span>Minat & Hobi</span>
                </a>
                <a href="#awards" class="sidebar-nav-link flex items-center space-x-3 px-4 py-2.5 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-brand-100/60 dark:hover:bg-slate-800/70 transition-all duration-200">
                    <i class="fas fa-trophy w-5 text-center text-amber-500"></i>
                    <span>Penghargaan</span>
                </a>
            </nav>
        </div>

        <!-- Sidebar Footer & Dark Mode Switch -->
        <div class="pt-4 border-t border-brand-100 dark:border-slate-800/80 space-y-4">
            <!-- Dark Mode Toggle Button -->
            <button class="theme-toggle-btn w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-white/80 dark:bg-slate-900 border border-brand-200/80 dark:border-slate-800 shadow-xs hover:border-brand-400 dark:hover:border-slate-700 transition duration-200 group text-slate-700 dark:text-slate-300">
                <span class="flex items-center space-x-2 text-xs font-medium">
                    <i class="fas fa-moon text-brand-600 dark:text-brand-400 theme-icon-moon"></i>
                    <i class="fas fa-sun text-amber-500 theme-icon-sun hidden"></i>
                    <span class="theme-toggle-text">Mode Gelap</span>
                </span>
                <span class="text-[10px] bg-brand-100 dark:bg-slate-800 text-brand-700 dark:text-brand-300 px-2 py-0.5 rounded-md font-mono">Toggle</span>
            </button>

            <!-- Social Links -->
            <div class="flex items-center justify-center space-x-3 text-slate-500 dark:text-slate-400">
                <a href="https://github.com/nu99etz" target="_blank" rel="noopener noreferrer" class="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-brand-100 dark:hover:bg-slate-800 hover:text-brand-600 dark:hover:text-brand-400 transition" title="GitHub Profile">
                    <i class="fab fa-github text-base"></i>
                </a>
                <a href="https://www.linkedin.com/in/dwi-cipta-nugraha-49bb641a5/" target="_blank" rel="noopener noreferrer" class="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-brand-100 dark:hover:bg-slate-800 hover:text-brand-600 dark:hover:text-brand-400 transition" title="LinkedIn Profile">
                    <i class="fab fa-linkedin-in text-base"></i>
                </a>
                <a href="https://www.facebook.com/dwicipta.nugraha.54/" target="_blank" rel="noopener noreferrer" class="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-brand-100 dark:hover:bg-slate-800 hover:text-brand-600 dark:hover:text-brand-400 transition" title="Facebook">
                    <i class="fab fa-facebook-f text-base"></i>
                </a>
                <a href="mailto:dwiciptan99@gmail.com" class="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-brand-100 dark:hover:bg-slate-800 hover:text-brand-600 dark:hover:text-brand-400 transition" title="Kirim Email">
                    <i class="fas fa-envelope text-base"></i>
                </a>
            </div>

            <p class="text-[11px] text-center text-slate-400 dark:text-slate-500">
                © 2026 Dwi Cipta Nugraha
            </p>
        </div>
    </aside>

    <!-- Main Content Area -->
    <main class="lg:pl-72 min-h-screen">
        <div class="max-w-4xl mx-auto px-4 sm:px-8 py-8 sm:py-14 space-y-16 sm:space-y-24">

            <!-- 1. ABOUT SECTION -->
            <section id="about" class="scroll-mt-24">
                <div class="glass-card rounded-3xl p-6 sm:p-10 border border-brand-100 dark:border-slate-800 shadow-sm relative overflow-hidden">
                    <!-- Top accent banner decoration -->
                    <div class="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-brand-300/30 dark:from-brand-600/20 to-transparent rounded-full blur-2xl pointer-events-none"></div>

                    <!-- Greeting Badge -->
                    <div class="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-brand-100/80 dark:bg-brand-950/60 border border-brand-200/80 dark:border-brand-800/80 text-brand-800 dark:text-brand-300 text-xs font-semibold mb-6">
                        <span class="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span>Fullstack & Web Developer Enthusiast</span>
                    </div>

                    <!-- Name Headline -->
                    <h1 class="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                        Dwi Cipta <span class="bg-gradient-to-r from-brand-600 to-cyan-500 dark:from-brand-400 dark:to-cyan-300 bg-clip-text text-transparent">Nugraha</span>
                    </h1>

                    <!-- Contact & Info Pills -->
                    <div class="flex flex-wrap gap-2.5 sm:gap-3 mt-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                        <span class="inline-flex items-center space-x-1.5 bg-slate-100/80 dark:bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-200/60 dark:border-slate-700/60">
                            <i class="fas fa-map-marker-alt text-brand-500"></i>
                            <span>Surabaya, Jawa Timur (60285)</span>
                        </span>
                        <a href="tel:082234073315" class="inline-flex items-center space-x-1.5 bg-slate-100/80 dark:bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-200/60 dark:border-slate-700/60 hover:border-brand-400 hover:text-brand-600 dark:hover:text-brand-400 transition">
                            <i class="fas fa-phone text-brand-500"></i>
                            <span>0822-3407-3315</span>
                        </a>
                        <a href="mailto:dwiciptan99@gmail.com" class="inline-flex items-center space-x-1.5 bg-slate-100/80 dark:bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-200/60 dark:border-slate-700/60 hover:border-brand-400 hover:text-brand-600 dark:hover:text-brand-400 transition">
                            <i class="fas fa-envelope text-brand-500"></i>
                            <span>dwiciptan99@gmail.com</span>
                        </a>
                    </div>

                    <!-- Bio Lead Paragraph -->
                    <div class="mt-6 text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base space-y-3">
                        <p>
                            Halo! Nama saya <strong class="text-slate-900 dark:text-white font-semibold">Dwi Cipta Nugraha</strong>, lahir di Surabaya pada 8 Agustus 1999. Lulusan Sarjana Komputer (S1 Sistem Informasi) dari <strong class="text-brand-600 dark:text-brand-400">Institut Teknologi Adhi Tama Surabaya (ITATS)</strong> dengan predikat memuaskan (GPA 3.73).
                        </p>
                        <p>
                            Memiliki pengalaman sebagai <strong class="text-slate-800 dark:text-slate-100">Freelance Web Programmer</strong> serta pengalaman magang di software house PT Sentra Vidya Utama. Terbiasa membangun aplikasi sistem informasi berbasis web, mengoptimalkan database, melakukan debugging, serta cepat mempelajari teknologi baru dan solid berkolaborasi dalam tim.
                        </p>
                    </div>

                    <!-- Action Buttons & Social Links -->
                    <div class="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
                        <div class="flex flex-wrap gap-3">
                            <a href="mailto:dwiciptan99@gmail.com" class="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-600 to-cyan-600 hover:from-brand-500 hover:to-cyan-500 text-white text-xs sm:text-sm font-semibold shadow-md shadow-brand-500/20 hover:shadow-brand-500/30 hover:-translate-y-0.5 transition duration-200">
                                <i class="fas fa-paper-plane"></i>
                                <span>Hubungi Saya</span>
                            </a>
                            <a href="#projects" class="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-brand-50 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-semibold border border-slate-200 dark:border-slate-700 hover:border-brand-300 dark:hover:border-slate-600 transition duration-200">
                                <i class="fas fa-eye text-brand-500"></i>
                                <span>Lihat Portofolio</span>
                            </a>
                        </div>

                        <!-- Social Icon Pills -->
                        <div class="flex items-center space-x-2">
                            <a href="https://github.com/nu99etz" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:bg-brand-600 hover:text-white dark:hover:bg-brand-500 dark:hover:text-white transition duration-200 shadow-xs" title="GitHub">
                                <i class="fab fa-github text-lg"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/dwi-cipta-nugraha-49bb641a5/" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white transition duration-200 shadow-xs" title="LinkedIn">
                                <i class="fab fa-linkedin-in text-lg"></i>
                            </a>
                            <a href="https://www.facebook.com/dwicipta.nugraha.54/" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:bg-blue-700 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition duration-200 shadow-xs" title="Facebook">
                                <i class="fab fa-facebook-f text-lg"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <!-- 2. EDUCATION SECTION -->
            <section id="education" class="scroll-mt-24 space-y-6">
                <div class="flex items-center space-x-3">
                    <div class="w-10 h-10 rounded-xl bg-brand-100 dark:bg-brand-950/80 text-brand-600 dark:text-brand-400 flex items-center justify-center font-bold">
                        <i class="fas fa-graduation-cap text-lg"></i>
                    </div>
                    <div>
                        <h2 class="text-2xl font-bold text-slate-900 dark:text-white">Pendidikan (Education)</h2>
                        <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400">Riwayat studi akademik dan kualifikasi</p>
                    </div>
                </div>

                <div class="glass-card rounded-2xl p-6 sm:p-7 border border-brand-100 dark:border-slate-800 shadow-sm relative overflow-hidden group hover:border-brand-300 dark:hover:border-slate-700 transition duration-300">
                    <div class="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
                        <div>
                            <h3 class="text-lg font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition">
                                Institut Teknologi Adhi Tama Surabaya (ITATS)
                            </h3>
                            <div class="flex flex-wrap items-center gap-2 mt-1">
                                <span class="text-sm font-semibold text-brand-600 dark:text-brand-400">Sarjana Komputer (S.Kom)</span>
                                <span class="text-slate-300 dark:text-slate-700">•</span>
                                <span class="text-sm text-slate-600 dark:text-slate-300">Sistem Informasi</span>
                            </div>
                        </div>
                        <div class="flex items-center space-x-2">
                            <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-brand-100 dark:bg-brand-950 text-brand-700 dark:text-brand-300 border border-brand-200/60 dark:border-brand-800">
                                2017 - 2021
                            </span>
                        </div>
                    </div>

                    <div class="mt-4 flex flex-wrap items-center gap-4">
                        <div class="inline-flex items-center space-x-2 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 px-3 py-1.5 rounded-xl border border-emerald-200/70 dark:border-emerald-800/60 text-xs font-semibold">
                            <i class="fas fa-star text-amber-400"></i>
                            <span>IPK / GPA: <strong>3.73 / 4.00</strong></span>
                        </div>
                        <div class="text-xs text-slate-500 dark:text-slate-400">
                            Fokus: Rekayasa Perangkat Lunak, Basis Data, dan Sistem Informasi Manajemen.
                        </div>
                    </div>
                </div>
            </section>

            <!-- 3. EXPERIENCE SECTION -->
            <section id="experience" class="scroll-mt-24 space-y-6">
                <div class="flex items-center space-x-3">
                    <div class="w-10 h-10 rounded-xl bg-brand-100 dark:bg-brand-950/80 text-brand-600 dark:text-brand-400 flex items-center justify-center font-bold">
                        <i class="fas fa-briefcase text-lg"></i>
                    </div>
                    <div>
                        <h2 class="text-2xl font-bold text-slate-900 dark:text-white">Pengalaman Kerja (Experience)</h2>
                        <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400">Rekam jejak profesional & proyek freelance</p>
                    </div>
                </div>

                <div class="space-y-4">
                    <!-- Exp 1: Freelance -->
                    <div class="glass-card rounded-2xl p-6 sm:p-7 border border-brand-100 dark:border-slate-800 shadow-sm relative group hover:border-brand-300 dark:hover:border-slate-700 transition duration-300">
                        <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
                            <div>
                                <div class="flex items-center space-x-2">
                                    <h3 class="text-lg font-bold text-slate-900 dark:text-white">Freelance Web Programmer</h3>
                                    <span class="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">Aktif</span>
                                </div>
                                <p class="text-sm font-semibold text-brand-600 dark:text-brand-400 mt-0.5">Personal Work / Project-Based</p>
                            </div>
                            <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-brand-100/80 dark:bg-slate-800 text-brand-700 dark:text-brand-300 self-start">
                                April 2020 - Sekarang
                            </span>
                        </div>
                        <p class="mt-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                            Bekerja secara independen membangun dan mengembangkan berbagai aplikasi sistem berbasis web sesuai kebutuhan spesifik klien. Menangani perancangan arsitektur database, pembuatan modul backend, antarmuka pengguna responsif, serta deployment sistem.
                        </p>
                    </div>

                    <!-- Exp 2: PT Sentra Vidya Utama -->
                    <div class="glass-card rounded-2xl p-6 sm:p-7 border border-brand-100 dark:border-slate-800 shadow-sm relative group hover:border-brand-300 dark:hover:border-slate-700 transition duration-300">
                        <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
                            <div>
                                <h3 class="text-lg font-bold text-slate-900 dark:text-white">Internship Web Programmer</h3>
                                <p class="text-sm font-semibold text-brand-600 dark:text-brand-400 mt-0.5">PT Sentra Vidya Utama (SEVIMA)</p>
                            </div>
                            <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 self-start">
                                Januari 2020 - April 2020
                            </span>
                        </div>
                        <ul class="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                            <li class="flex items-start space-x-2">
                                <i class="fas fa-check-circle text-brand-500 mt-1 text-xs"></i>
                                <span>Mengembangkan modul pada Sistem Informasi Akademik Perguruan Tinggi.</span>
                            </li>
                            <li class="flex items-start space-x-2">
                                <i class="fas fa-check-circle text-brand-500 mt-1 text-xs"></i>
                                <span>Melakukan pengujian sistem (testing) serta perbaikan bug (bug fixing) pada aplikasi akademik.</span>
                            </li>
                            <li class="flex items-start space-x-2">
                                <i class="fas fa-check-circle text-brand-500 mt-1 text-xs"></i>
                                <span>Menambahkan modul pelaporan dinamis (Export Excel, Word, PDF, dan HTML).</span>
                            </li>
                        </ul>
                    </div>

                    <!-- Exp 3: Rumah Photo -->
                    <div class="glass-card rounded-2xl p-6 sm:p-7 border border-brand-100 dark:border-slate-800 shadow-sm relative group hover:border-brand-300 dark:hover:border-slate-700 transition duration-300">
                        <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
                            <div>
                                <h3 class="text-lg font-bold text-slate-900 dark:text-white">Internship Photographer</h3>
                                <p class="text-sm font-semibold text-brand-600 dark:text-brand-400 mt-0.5">Rumah Photo</p>
                            </div>
                            <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 self-start">
                                Februari 2016 - April 2016
                            </span>
                        </div>
                        <ul class="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                            <li class="flex items-start space-x-2">
                                <i class="fas fa-check-circle text-brand-500 mt-1 text-xs"></i>
                                <span>Fotografi Pre-Wedding & Wedding event.</span>
                            </li>
                            <li class="flex items-start space-x-2">
                                <i class="fas fa-check-circle text-brand-500 mt-1 text-xs"></i>
                                <span>Pemotretan model dan pengeditan hasil foto.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <!-- 4. SKILLS SECTION -->
            <section id="skills" class="scroll-mt-24 space-y-6">
                <div class="flex items-center space-x-3">
                    <div class="w-10 h-10 rounded-xl bg-brand-100 dark:bg-brand-950/80 text-brand-600 dark:text-brand-400 flex items-center justify-center font-bold">
                        <i class="fas fa-code text-lg"></i>
                    </div>
                    <div>
                        <h2 class="text-2xl font-bold text-slate-900 dark:text-white">Keahlian & Teknologi (Skills)</h2>
                        <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400">Bahasa pemrograman, framework, dan alur kerja pengembangan</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <!-- Programming Languages -->
                    <div class="glass-card rounded-2xl p-6 border border-brand-100 dark:border-slate-800 shadow-sm space-y-4">
                        <h3 class="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center space-x-2">
                            <i class="fas fa-terminal text-brand-500"></i>
                            <span>Bahasa Pemrograman & Framework</span>
                        </h3>
                        <div class="flex flex-wrap gap-2.5">
                            <span class="inline-flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-brand-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-brand-200/60 dark:border-slate-700 text-xs font-semibold">
                                <i class="fab fa-php text-indigo-500 text-sm"></i>
                                <span>PHP</span>
                            </span>
                            <span class="inline-flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-brand-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-brand-200/60 dark:border-slate-700 text-xs font-semibold">
                                <i class="fab fa-laravel text-red-500 text-sm"></i>
                                <span>Laravel</span>
                            </span>
                            <span class="inline-flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-brand-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-brand-200/60 dark:border-slate-700 text-xs font-semibold">
                                <i class="fab fa-python text-blue-500 text-sm"></i>
                                <span>Python</span>
                            </span>
                            <span class="inline-flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-brand-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-brand-200/60 dark:border-slate-700 text-xs font-semibold">
                                <i class="fab fa-js-square text-amber-500 text-sm"></i>
                                <span>JavaScript</span>
                            </span>
                            <span class="inline-flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-brand-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-brand-200/60 dark:border-slate-700 text-xs font-semibold">
                                <i class="fab fa-html5 text-orange-500 text-sm"></i>
                                <span>HTML5</span>
                            </span>
                            <span class="inline-flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-brand-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-brand-200/60 dark:border-slate-700 text-xs font-semibold">
                                <i class="fab fa-css3-alt text-blue-600 text-sm"></i>
                                <span>CSS3</span>
                            </span>
                        </div>
                    </div>

                    <!-- Workflow & Methodology -->
                    <div class="glass-card rounded-2xl p-6 border border-brand-100 dark:border-slate-800 shadow-sm space-y-4">
                        <h3 class="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center space-x-2">
                            <i class="fas fa-tasks text-cyan-500"></i>
                            <span>Workflow & Metodologi</span>
                        </h3>
                        <div class="space-y-2.5">
                            <div class="flex items-center space-x-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                                <span class="w-6 h-6 rounded-lg bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                                    <i class="fas fa-check text-xs"></i>
                                </span>
                                <span>Cross Browser Testing & Debugging</span>
                            </div>
                            <div class="flex items-center space-x-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                                <span class="w-6 h-6 rounded-lg bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                                    <i class="fas fa-check text-xs"></i>
                                </span>
                                <span>Scrum & Agile Development</span>
                            </div>
                            <div class="flex items-center space-x-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                                <span class="w-6 h-6 rounded-lg bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                                    <i class="fas fa-check text-xs"></i>
                                </span>
                                <span>Database Design & Query Optimization (MySQL)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- 5. PROJECTS SECTION -->
            <section id="projects" class="scroll-mt-24 space-y-6">
                <div class="flex items-center justify-between">
                    <div class="flex items-center space-x-3">
                        <div class="w-10 h-10 rounded-xl bg-brand-100 dark:bg-brand-950/80 text-brand-600 dark:text-brand-400 flex items-center justify-center font-bold">
                            <i class="fas fa-laptop-code text-lg"></i>
                        </div>
                        <div>
                            <h2 class="text-2xl font-bold text-slate-900 dark:text-white">Proyek Portofolio (Projects)</h2>
                            <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400">Hasil karya sistem informasi dan aplikasi web yang telah dibangun</p>
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <!-- Project 1: Kursus Mobil -->
                    <div class="glass-card rounded-2xl overflow-hidden border border-brand-100 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-brand-300 dark:hover:border-slate-700 transition duration-300 flex flex-col justify-between">
                        <div>
                            <div class="grid grid-cols-2 gap-1.5 p-3 bg-slate-100/60 dark:bg-slate-800/40">
                                <img src="assets/img/daftar.png" alt="Sistem Informasi Pendaftaran Kursus Mobil Airlangga (Form)" class="project-preview-img w-full h-36 object-cover rounded-lg cursor-pointer hover:opacity-90 transition transform hover:scale-[1.02]" title="Klik untuk memperbesar" />
                                <img src="assets/img/admin.png" alt="Sistem Informasi Pendaftaran Kursus Mobil Airlangga (Admin)" class="project-preview-img w-full h-36 object-cover rounded-lg cursor-pointer hover:opacity-90 transition transform hover:scale-[1.02]" title="Klik untuk memperbesar" />
                            </div>
                            <div class="p-5 space-y-3">
                                <div class="flex items-center justify-between">
                                    <span class="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-brand-100 dark:bg-brand-950 text-brand-700 dark:text-brand-300">Web Information System</span>
                                </div>
                                <h3 class="font-bold text-base text-slate-900 dark:text-white leading-snug">
                                    Sistem Informasi Pendaftaran Kursus Mobil Airlangga
                                </h3>
                                <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                                    Sistem pendaftaran kursus mobil berbasis web untuk mengelola registrasi peserta, konfirmasi berkas pemohon, hingga pengelolaan jadwal kursus oleh admin.
                                </p>
                            </div>
                        </div>
                        <div class="px-5 pb-5 pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                            <span class="text-xs font-mono text-slate-400 dark:text-slate-500">PHP • MySQL • Bootstrap</span>
                            <span class="text-xs font-medium text-brand-600 dark:text-brand-400">Screenshot Ready</span>
                        </div>
                    </div>

                    <!-- Project 2: Pegadaian Jaya Group Bima -->
                    <div class="glass-card rounded-2xl overflow-hidden border border-brand-100 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-brand-300 dark:hover:border-slate-700 transition duration-300 flex flex-col justify-between">
                        <div>
                            <div class="p-3 bg-slate-100/60 dark:bg-slate-800/40">
                                <img src="assets/img/pegadaian.png" alt="Pegadaian Jaya Group Bima" class="project-preview-img w-full h-40 object-cover rounded-lg cursor-pointer hover:opacity-90 transition transform hover:scale-[1.02]" title="Klik untuk memperbesar" />
                            </div>
                            <div class="p-5 space-y-3">
                                <span class="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300">Finance & Pawnshop</span>
                                <h3 class="font-bold text-base text-slate-900 dark:text-white leading-snug">
                                    Sistem Informasi Pegadaian Jaya Group Bima
                                </h3>
                                <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                                    Sistem informasi pegadaian berbasis web untuk pendataan barang gadai, perpanjangan masa gadai, hitung bunga transaksi, hingga lelang barang jatuh tempo.
                                </p>
                            </div>
                        </div>
                        <div class="px-5 pb-5 pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                            <span class="text-xs font-mono text-slate-400 dark:text-slate-500">Laravel • MySQL</span>
                            <span class="text-xs font-medium text-brand-600 dark:text-brand-400">Screenshot Ready</span>
                        </div>
                    </div>

                    <!-- Project 3: Dental Barokah Laboratory -->
                    <div class="glass-card rounded-2xl overflow-hidden border border-brand-100 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-brand-300 dark:hover:border-slate-700 transition duration-300 flex flex-col justify-between">
                        <div>
                            <div class="p-3 bg-slate-100/60 dark:bg-slate-800/40">
                                <img src="assets/img/dentallab.png" alt="Dental Barokah Laboratory" class="project-preview-img w-full h-40 object-cover rounded-lg cursor-pointer hover:opacity-90 transition transform hover:scale-[1.02]" title="Klik untuk memperbesar" />
                            </div>
                            <div class="p-5 space-y-3">
                                <span class="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">Manufacturing & Lab</span>
                                <h3 class="font-bold text-base text-slate-900 dark:text-white leading-snug">
                                    Dental Barokah Laboratory
                                </h3>
                                <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                                    Sistem manufaktur dental untuk menangani pre-order pembuatan gigi tiruan, monitoring tahapan produksi laboratorium, dan rekapitulasi tagihan dokter gigi.
                                </p>
                            </div>
                        </div>
                        <div class="px-5 pb-5 pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                            <span class="text-xs font-mono text-slate-400 dark:text-slate-500">PHP • MySQL • JS</span>
                            <span class="text-xs font-medium text-brand-600 dark:text-brand-400">Screenshot Ready</span>
                        </div>
                    </div>

                    <!-- Project 4: Skripsi Sistem Pakar Kucing -->
                    <div class="glass-card rounded-2xl overflow-hidden border border-brand-100 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-brand-300 dark:hover:border-slate-700 transition duration-300 flex flex-col justify-between">
                        <div>
                            <div class="p-3 bg-slate-100/60 dark:bg-slate-800/40">
                                <img src="assets/img/kucing.png" alt="Sistem Pakar Pendeteksi Penyakit Kucing" class="project-preview-img w-full h-40 object-cover rounded-lg cursor-pointer hover:opacity-90 transition transform hover:scale-[1.02]" title="Klik untuk memperbesar" />
                            </div>
                            <div class="p-5 space-y-3">
                                <span class="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300">Expert System • AI</span>
                                <h3 class="font-bold text-base text-slate-900 dark:text-white leading-snug">
                                    Sistem Pakar Pendeteksi Penyakit Kucing
                                </h3>
                                <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                                    Aplikasi sistem pakar berbasis web untuk mendiagnosis jenis penyakit pada kucing berdasarkan gejala klinis menggunakan metode Forward Chaining.
                                </p>
                            </div>
                        </div>
                        <div class="px-5 pb-5 pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                            <span class="text-xs font-mono text-slate-400 dark:text-slate-500">Forward Chaining • PHP</span>
                            <span class="text-xs font-medium text-brand-600 dark:text-brand-400">Screenshot Ready</span>
                        </div>
                    </div>

                    <!-- Project 5: Optimasi Data Latih PSO & Naive Bayes -->
                    <div class="glass-card rounded-2xl overflow-hidden border border-brand-100 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-brand-300 dark:hover:border-slate-700 transition duration-300 md:col-span-2 flex flex-col md:flex-row justify-between">
                        <div class="p-3 bg-slate-100/60 dark:bg-slate-800/40 md:w-5/12">
                            <img src="assets/img/pso.png" alt="Optimasi Data Latih PSO & Naive Bayes" class="project-preview-img w-full h-44 md:h-full object-cover rounded-lg cursor-pointer hover:opacity-90 transition transform hover:scale-[1.02]" title="Klik untuk memperbesar" />
                        </div>
                        <div class="p-6 md:w-7/12 flex flex-col justify-between space-y-4">
                            <div class="space-y-2">
                                <span class="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300">Data Mining & Optimization</span>
                                <h3 class="font-bold text-base sm:text-lg text-slate-900 dark:text-white leading-snug">
                                    Sistem Informasi Optimasi Data Latih (PSO & Naive Bayes)
                                </h3>
                                <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                                    Sistem informasi optimasi data latih berbasis web yang mengkombinasikan dua metode algoritma cerdas, yaitu Particle Swarm Optimization (PSO) untuk reduksi atribut dan Naive Bayes untuk klasifikasi data.
                                </p>
                            </div>
                            <div class="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                                <span class="text-xs font-mono text-slate-400 dark:text-slate-500">Python / Web • PSO • Naive Bayes</span>
                                <span class="text-xs font-medium text-brand-600 dark:text-brand-400">Research & Dev</span>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <!-- 6. INTERESTS SECTION -->
            <section id="interests" class="scroll-mt-24 space-y-6">
                <div class="flex items-center space-x-3">
                    <div class="w-10 h-10 rounded-xl bg-brand-100 dark:bg-brand-950/80 text-brand-600 dark:text-brand-400 flex items-center justify-center font-bold">
                        <i class="fas fa-heart text-lg"></i>
                    </div>
                    <div>
                        <h2 class="text-2xl font-bold text-slate-900 dark:text-white">Minat & Hobi (Interests)</h2>
                        <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400">Aktivitas dan kegemaran di luar waktu coding</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div class="glass-card rounded-2xl p-6 border border-brand-100 dark:border-slate-800 shadow-sm space-y-3">
                        <div class="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                            <i class="fas fa-futbol text-lg"></i>
                        </div>
                        <h3 class="font-bold text-slate-900 dark:text-white text-base">Olahraga & Outdoor</h3>
                        <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                            Di samping menggeluti pemrograman web, saya senang menghabiskan waktu di luar ruangan bermain sepak bola dan cricket bersama rekan-rekan.
                        </p>
                    </div>

                    <div class="glass-card rounded-2xl p-6 border border-brand-100 dark:border-slate-800 shadow-sm space-y-3">
                        <div class="w-10 h-10 rounded-xl bg-brand-100 dark:bg-brand-950 text-brand-600 dark:text-brand-400 flex items-center justify-center">
                            <i class="fas fa-tv text-lg"></i>
                        </div>
                        <h3 class="font-bold text-slate-900 dark:text-white text-base">Tayangan Olahraga & Cricket</h3>
                        <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                            Saat berada di dalam ruangan, saya suka menyaksikan siaran turnamen olahraga, khususnya pertandingan cricket favorit internasional.
                        </p>
                    </div>
                </div>
            </section>

            <!-- 7. AWARDS & CERTIFICATIONS SECTION -->
            <section id="awards" class="scroll-mt-24 space-y-6">
                <div class="flex items-center space-x-3">
                    <div class="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950/80 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold">
                        <i class="fas fa-trophy text-lg"></i>
                    </div>
                    <div>
                        <h2 class="text-2xl font-bold text-slate-900 dark:text-white">Penghargaan (Awards & Certifications)</h2>
                        <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400">Prestasi akademik dan sertifikasi magang</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <!-- Award 1 -->
                    <div class="glass-card rounded-2xl p-6 border border-amber-200/80 dark:border-slate-800 shadow-sm relative group hover:border-amber-400 transition duration-300">
                        <div class="flex items-start space-x-4">
                            <div class="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-950/60 text-amber-500 flex items-center justify-center shrink-0 shadow-xs">
                                <i class="fas fa-award text-2xl"></i>
                            </div>
                            <div class="space-y-1">
                                <span class="text-[10px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 rounded">Tahun 2021</span>
                                <h3 class="font-bold text-slate-900 dark:text-white text-sm sm:text-base leading-snug">
                                    Best Student Bachelor Of Computer
                                </h3>
                                <p class="text-xs text-slate-600 dark:text-slate-300">
                                    Department of Information System, Institut Teknologi Adhi Tama Surabaya.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Award 2 -->
                    <div class="glass-card rounded-2xl p-6 border border-brand-200/80 dark:border-slate-800 shadow-sm relative group hover:border-brand-400 transition duration-300">
                        <div class="flex items-start space-x-4">
                            <div class="w-12 h-12 rounded-2xl bg-brand-100 dark:bg-brand-950/60 text-brand-500 flex items-center justify-center shrink-0 shadow-xs">
                                <i class="fas fa-certificate text-2xl"></i>
                            </div>
                            <div class="space-y-1">
                                <span class="text-[10px] font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-950/60 px-2 py-0.5 rounded">Tahun 2020</span>
                                <h3 class="font-bold text-slate-900 dark:text-white text-sm sm:text-base leading-snug">
                                    Internship Web Programmer Certificate
                                </h3>
                                <p class="text-xs text-slate-600 dark:text-slate-300">
                                    PT Sentra Vidya Utama (SEVIMA) - Surabaya.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Bottom Contact Banner -->
            <section class="glass-card rounded-3xl p-8 border border-brand-200 dark:border-slate-800 text-center space-y-4 relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-sky-100 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
                <div class="w-12 h-12 rounded-2xl bg-brand-500 text-white flex items-center justify-center mx-auto shadow-glow-sky">
                    <i class="fas fa-handshake text-xl"></i>
                </div>
                <h2 class="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">Tertarik Bekerja Sama?</h2>
                <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                    Saya terbuka untuk peluang kerja full-time, freelance, maupun kolaborasi proyek web development.
                </p>
                <div class="pt-2">
                    <a href="mailto:dwiciptan99@gmail.com" class="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white text-sm font-semibold shadow-md shadow-brand-500/30 hover:-translate-y-0.5 transition duration-200">
                        <i class="fas fa-envelope"></i>
                        <span>dwiciptan99@gmail.com</span>
                    </a>
                </div>
            </section>

            <!-- Footer -->
            <footer class="pt-6 pb-12 border-t border-slate-200/80 dark:border-slate-800 text-center text-xs text-slate-400 dark:text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-3">
                <p>© 2026 Dwi Cipta Nugraha • Portofolio Web</p>
                <div class="flex items-center space-x-4">
                    <a href="#about" class="hover:text-brand-600 dark:hover:text-brand-400 transition">Kembali ke Atas <i class="fas fa-arrow-up ml-1"></i></a>
                </div>
            </footer>

        </div>
    </main>

    <!-- Image Lightbox Modal -->
    <div id="imageModal" class="hidden fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md items-center justify-center p-4">
        <div id="imageModalBackdrop" class="absolute inset-0"></div>
        <div class="relative max-w-4xl max-h-[90vh] bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 z-10 flex flex-col">
            <div class="flex items-center justify-between px-4 py-3 border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/90">
                <p id="modalCaption" class="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 truncate pr-4">Screenshot Proyek</p>
                <button id="modalCloseBtn" class="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700 flex items-center justify-center transition" aria-label="Tutup preview">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="p-2 overflow-auto max-h-[calc(90vh-60px)] flex items-center justify-center bg-slate-950/10">
                <img id="modalImage" src="" alt="Preview Proyek" class="max-w-full max-h-[78vh] object-contain rounded-lg shadow-sm" />
            </div>
        </div>
    </div>

    <!-- Core interactive scripts -->
    <script src="js/scripts.js"></script>
</body>

</html>