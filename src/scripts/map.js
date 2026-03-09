// Map functionality
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Initialize map when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    const mapElement = document.getElementById("map");
    if (!mapElement) return;

    const map = L.map("map", {
        zoomControl: false, // Remove zoom controls
        scrollWheelZoom: false,
        doubleClickZoom: false,
        touchZoom: false,
    }).setView([39.7294, -104.8319], 12);

    // Standard map tiles (light theme)
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors",
        maxZoom: 19,
    }).addTo(map);

    // Custom cyan marker icon
    const cyanIcon = L.divIcon({
        className: "custom-marker-cyan",
        html: `<div class="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center shadow-2xl border-4 border-white pulse-marker">
            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
            </svg>
        </div>`,
        iconSize: [48, 48],
        iconAnchor: [24, 48],
    });

    // Store current marker
    let currentMarker = null;

    // Function to move map and update overlay
    window.flyToCity = (lat, lng, name, region) => {
        // Remove previous marker
        if (currentMarker) {
            map.removeLayer(currentMarker);
        }

        // Add new marker
        currentMarker = L.marker([lat, lng], { icon: cyanIcon }).addTo(map);

        // Fly to location
        map.flyTo([lat, lng], 12, {
            duration: 1.5,
        });

        // Update overlay text
        const nameElement = document.getElementById("map-location-name");
        const regionElement = document.getElementById("map-location-region");
        if (nameElement) nameElement.textContent = name.toUpperCase();
        if (regionElement) regionElement.textContent = region;
    };

    // Initialize with Aurora
    currentMarker = L.marker([39.7294, -104.8319], { icon: cyanIcon }).addTo(map);
});