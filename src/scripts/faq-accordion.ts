// FAQ Accordion functionality
document.addEventListener("DOMContentLoaded", () => {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
        const button = item.querySelector(".faq-button");
        const content = item.querySelector(".faq-content") as HTMLElement;
        const icon = item.querySelector(".faq-icon");

        button?.addEventListener("click", () => {
            const isOpen = item.classList.contains("faq-open");

            // Close all other FAQs
            faqItems.forEach((otherItem) => {
                if (otherItem !== item) {
                    otherItem.classList.remove("faq-open");
                    otherItem.classList.remove(
                        "border-blue-500",
                        "bg-blue-50/50",
                    );
                    otherItem.classList.add("border-gray-200", "bg-white");
                    const otherContent =
                        otherItem.querySelector(".faq-content") as HTMLElement;
                    const otherIcon = otherItem.querySelector(".faq-icon");
                    if (otherContent) otherContent.style.display = "none";
                    if (otherIcon)
                        otherIcon.innerHTML =
                            '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>';
                }
            });

            // Toggle current FAQ
            if (isOpen) {
                item.classList.remove("faq-open");
                item.classList.remove("border-blue-500", "bg-blue-50/50");
                item.classList.add("border-gray-200", "bg-white");
                if (content) content.style.display = "none";
                if (icon)
                    icon.innerHTML =
                        '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>';
            } else {
                item.classList.add("faq-open");
                item.classList.remove("border-gray-200", "bg-white");
                item.classList.add("border-blue-500", "bg-blue-50/50");
                if (content) content.style.display = "block";
                if (icon)
                    icon.innerHTML =
                        '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>';
            }
        });
    });
});
