// floatingFreeScanButton.js - Handles the floating FREE SCAN button functionality

(function () {
    console.log("%c🔵 FloatingFreeScanButton script loaded", "background: #06B6D4; color: black; padding: 4px 8px; font-weight: bold;");

    // Prevent any duplicate initialization
    if (window.__floatingScanLoaded) {
        console.log("⚠️ Already initialized, skipping");
        return;
    }
    window.__floatingScanLoaded = true;

    function createButton() {
        console.log("%c🔨 Creating floating scan button...", "color: #06B6D4; font-weight: bold;");

        // Remove any existing instances
        const existing = document.getElementById("floating-scan-wrapper");
        if (existing) {
            console.log("🧹 Clearing existing wrapper");
            existing.innerHTML = "";
        }

        const wrapper = document.getElementById("floating-scan-wrapper");
        if (!wrapper) {
            console.error("❌ ERROR: Wrapper element #floating-scan-wrapper not found!");
            return;
        }

        console.log("✅ Wrapper found, creating button HTML...");

        // Create the HTML structure
        wrapper.innerHTML = `
            <div id="floating-scan-container" style="position: fixed; bottom: 2rem; right: 2rem; z-index: 9999; opacity: 0; transform: translateY(100px); transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);">
                <div style="position: relative; display: inline-block;">
                    <button
                        id="scan-close-btn-unique"
                        style="position: absolute; top: -8px; right: -8px; width: 24px; height: 24px; background-color: #dc2626; color: white; border: none; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 16px; font-weight: bold; cursor: pointer; z-index: 1; box-shadow: 0 4px 6px rgba(0,0,0,0.3); line-height: 1; transition: all 0.2s;"
                        aria-label="Close"
                        type="button"
                    >×</button>
                    <button
                        id="scan-main-btn-unique"
                        style="background-color: #06B6D4; color: black; border: none; padding: 1rem 2rem; font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.1em; cursor: pointer; transition: all 0.3s; display: inline-flex; align-items: center; gap: 0.75rem; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);"
                        type="button"
                    >
                        <svg style="width: 20px; height: 20px;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span>FREE SCAN</span>
                        <svg style="width: 14px; height: 14px;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </div>
        `;

        console.log("✅ HTML injected");

        // Get elements
        const container = document.getElementById("floating-scan-container");
        const closeBtn = document.getElementById("scan-close-btn-unique");
        const mainBtn = document.getElementById("scan-main-btn-unique");

        if (!container || !closeBtn || !mainBtn) {
            console.error("❌ ERROR: Button elements not found!");
            return;
        }

        console.log("✅ All elements found, showing button...");

        // Show button after short delay
        setTimeout(() => {
            container.style.opacity = "1";
            container.style.transform = "translateY(0)";
            console.log("%c✨ Button is now VISIBLE!", "background: #06B6D4; color: black; padding: 4px 8px; font-weight: bold; font-size: 14px;");
        }, 100);

        // Close button handler - just hides for current session
        closeBtn.onclick = (e) => {
            e.stopPropagation();
            e.preventDefault();
            console.log("🔴 Close button clicked");
            container.style.opacity = "0";
            container.style.transform = "translateY(100px)";
            setTimeout(() => {
                wrapper.innerHTML = "";
                console.log("✅ Button hidden for this session");
            }, 400);
        };

        // Hover effects
        closeBtn.onmouseenter = function () {
            this.style.backgroundColor = "#b91c1c";
            this.style.transform = "scale(1.1)";
        };
        closeBtn.onmouseleave = function () {
            this.style.backgroundColor = "#dc2626";
            this.style.transform = "scale(1)";
        };

        // Main button handler
        mainBtn.onclick = () => {
            console.log("� Main button clicked");
            const sections = document.querySelectorAll("section");
            let ctaSection = null;
            sections.forEach((section) => {
                if (section.className.includes("06B6D4")) {
                    ctaSection = section;
                }
            });
            if (ctaSection) {
                ctaSection.scrollIntoView({ behavior: "smooth", block: "start" });
            } else {
                window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
            }
        };

        mainBtn.onmouseenter = function () {
            this.style.transform = "scale(1.05)";
        };
        mainBtn.onmouseleave = function () {
            this.style.transform = "scale(1)";
        };
    }

    // Initialize
    if (document.readyState === "loading") {
        console.log("⏳ Waiting for DOMContentLoaded...");
        document.addEventListener("DOMContentLoaded", createButton);
    } else {
        console.log("⚡ DOM already loaded, creating button immediately");
        createButton();
    }
})();
