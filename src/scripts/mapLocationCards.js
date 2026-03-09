// Map Location Cards functionality
document.addEventListener("DOMContentLoaded", () => {
    const locationCards = document.querySelectorAll(
        ".map-location-card, .map-location-active",
    );

    locationCards.forEach((card) => {
        card.addEventListener("click", () => {
            locationCards.forEach((c) =>
                c.classList.remove("map-location-active"),
            );
            card.classList.add("map-location-active");
        });
    });
});