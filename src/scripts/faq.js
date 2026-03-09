// FAQ Accordion functionality
document.addEventListener("DOMContentLoaded", () => {
    const faqButtons = document.querySelectorAll(".faq-item-button");

    faqButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const faqItem = button.closest(".faq-item");
            const answer = faqItem?.querySelector(".faq-item-answer");
            const icon = button.querySelector(".faq-item-icon svg");

            if (answer && icon) {
                const isOpen = faqItem?.classList.contains("faq-item-open");

                // Close all items
                document.querySelectorAll(".faq-item").forEach((item) => {
                    item.classList.remove("faq-item-open");
                    item.querySelector(".faq-item-answer")?.classList.add("hidden");
                });

                // Open clicked item if it was closed
                if (!isOpen) {
                    faqItem?.classList.add("faq-item-open");
                    answer.classList.remove("hidden");
                }
            }
        });
    });
});