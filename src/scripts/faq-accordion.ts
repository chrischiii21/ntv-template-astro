// FAQ Accordion functionality
export function initFaqAccordion() {
    const faqButtons = document.querySelectorAll(".faq-item-button");

    faqButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const faqItem = button.closest(".faq-item");
            const answer = faqItem?.querySelector(".faq-item-answer");
            const icon = button.querySelector(".faq-item-icon");
            const svg = icon?.querySelector("svg");

            if (answer && icon && svg) {
                const isOpen = faqItem?.classList.contains("faq-item-open");

                // Reset all items
                document.querySelectorAll(".faq-item").forEach((item) => {
                    item.classList.remove("faq-item-open");
                    item.querySelector(".faq-item-answer")?.classList.add("hidden");

                    const otherIcon = item.querySelector(".faq-item-icon");
                    otherIcon?.classList.remove("bg-[#ff5c00]", "border-[#ff5c00]");
                    otherIcon?.querySelector("svg")?.setAttribute("stroke", "currentColor");
                });

                // Open target item if it was closed
                if (!isOpen) {
                    faqItem?.classList.add("faq-item-open");
                    answer.classList.remove("hidden");
                    icon.classList.add("bg-[#ff5c00]", "border-[#ff5c00]");
                    svg.setAttribute("stroke", "white");
                }
            }
        });
    });
}

// Auto-initialize when DOM is ready
if (typeof document !== 'undefined') {
    document.addEventListener("DOMContentLoaded", initFaqAccordion);
}
