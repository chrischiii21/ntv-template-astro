// Navbar functionality
document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector(".nav-bar");
    const logoText = document.querySelector(".nav-logo-text");
    const navLinks = document.querySelectorAll(".nav-link");
    const navMeta = document.querySelector(".nav-meta");
    const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
    const mobileMenu = document.querySelector(".mobile-menu");
    const mobileMenuOverlay = document.querySelector(
        ".mobile-menu-overlay",
    );
    const mobileCloseBtn = document.querySelector(".mobile-close-btn");
    const hamburgerIcon = document.querySelector(".hamburger-icon");
    const closeIcon = document.querySelector(".close-icon");
    const mobileDropdownBtns = document.querySelectorAll(
        ".mobile-dropdown-btn",
    );

    // Function to close mobile menu
    const closeMobileMenu = () => {
        mobileMenu?.classList.remove("translate-x-0");
        mobileMenu?.classList.add("translate-x-full");
        mobileMenuOverlay?.classList.remove("opacity-100", "visible");
        mobileMenuOverlay?.classList.add("opacity-0", "invisible");
        hamburgerIcon?.classList.remove("hidden");
        closeIcon?.classList.add("hidden");
        document.body.style.overflow = "";
    };

    // Function to open mobile menu
    const openMobileMenu = () => {
        mobileMenu?.classList.remove("translate-x-full");
        mobileMenu?.classList.add("translate-x-0");
        mobileMenuOverlay?.classList.remove("opacity-0", "invisible");
        mobileMenuOverlay?.classList.add("opacity-100", "visible");
        hamburgerIcon?.classList.add("hidden");
        closeIcon?.classList.remove("hidden");
        document.body.style.overflow = "hidden";
    };

    // Scroll state
    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            // Scrolled state
            nav?.classList.remove("bg-black/95");
            nav?.classList.add(
                "bg-white/98",
                "shadow-[0_1px_0_rgba(0,0,0,0.08)]",
            );

            logoText?.classList.remove("text-white");
            logoText?.classList.add("text-black");

            navLinks.forEach((link) => {
                link.classList.remove(
                    "text-white/60",
                    "hover:text-[#06B6D4]",
                );
                link.classList.add(
                    "text-black/60",
                    "hover:text-[#06B6D4]",
                );
            });

            navMeta?.classList.remove("text-white/40");
            navMeta?.classList.add("text-black/40");

            mobileMenuBtn?.classList.remove("text-white");
            mobileMenuBtn?.classList.add("text-black");
        } else {
            // Default state
            nav?.classList.remove(
                "bg-white/98",
                "shadow-[0_1px_0_rgba(0,0,0,0.08)]",
            );
            nav?.classList.add("bg-black/95");

            logoText?.classList.remove("text-black");
            logoText?.classList.add("text-white");

            navLinks.forEach((link) => {
                link.classList.remove("text-black/60");
                link.classList.add(
                    "text-white/60",
                    "hover:text-[#06B6D4]",
                );
            });

            navMeta?.classList.remove("text-black/40");
            navMeta?.classList.add("text-white/40");

            mobileMenuBtn?.classList.remove("text-black");
            mobileMenuBtn?.classList.add("text-white");
        }
    });

    // Mobile menu toggle
    mobileMenuBtn?.addEventListener("click", () => {
        const isOpen = mobileMenu?.classList.contains("translate-x-0");
        if (isOpen) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    });

    // Mobile close button
    mobileCloseBtn?.addEventListener("click", closeMobileMenu);

    // Click outside to close
    mobileMenuOverlay?.addEventListener("click", closeMobileMenu);

    // Mobile dropdown toggles
    mobileDropdownBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            const content = btn.nextElementSibling;
            const icon = btn.querySelector("svg");

            if (content?.classList.contains("hidden")) {
                content.classList.remove("hidden");
                icon?.classList.add("rotate-180");
            } else {
                content?.classList.add("hidden");
                icon?.classList.remove("rotate-180");
            }
        });
    });

    // Close mobile menu when clicking links
    const mobileLinks = document.querySelectorAll(".mobile-menu a");
    mobileLinks.forEach((link) => {
        link.addEventListener("click", closeMobileMenu);
    });
});